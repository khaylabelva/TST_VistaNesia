'use server'

import { z } from "zod"
import { signUpSchema } from "./sign-up/page"
import { prisma } from "@/lib/prisma"
import { Argon2id } from 'oslo/password'
import { lucia } from "@/lib/lucia"
import { cookies } from "next/headers"
import { signInSchema } from "./sign-in/page"
// import { generateCodeVerifier, generateState } from "arctic"
// import { googleOAuthClient } from "@/lib/googleOauth"

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: values.email.toLowerCase() },
    });
    if (existingUser) {
      return { error: 'User already exists', success: false };
    }

    const hashedPassword = await new Argon2id().hash(values.password);

    await prisma.user.create({
      data: {
        email: values.email.toLowerCase(),
        name: values.name,
        hashedPassword,
      },
    });

    return { success: true };
  } catch {
    return { error: 'Something went wrong', success: false };
  }
};

export const signIn = async (values: z.infer<typeof signInSchema>) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
    });
    if (!user || !user.hashedPassword) {
      return { success: false, error: "Invalid Credentials!" };
    }
    const passwordMatch = await new Argon2id().verify(
      user.hashedPassword,
      values.password
    );
    if (!passwordMatch) {
      return { success: false, error: "Invalid Credentials!" };
    }
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);
    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong" };
  }
};

// export const logOut = async () => {
//     const sessionCookie = await lucia.createBlankSessionCookie()
//     ;(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
//     return redirect('/authenticate')
// }

// export const getGoogleOauthConsentUrl = async () => {
//     try {
//         const state = generateState()
//         const codeVerifier = generateCodeVerifier()

//         cookies().set('codeVerifier', codeVerifier, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production'
//         })
//         cookies().set('state', state, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production'
//         })

//         const authUrl = await googleOAuthClient.createAuthorizationURL(state, codeVerifier, {
//             scopes: ['email', 'profile']
//         })
//         return { success: true, url: authUrl.toString() }

//     } catch {
//         // Removed unused `error` variable
//         return { success: false, error: 'Something went wrong' }
//     }
// }