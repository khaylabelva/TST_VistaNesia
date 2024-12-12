'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signIn } from '../auth.action';
import styles from './login.module.css';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signInSchema } from './schema';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const togglePassword = () => setShowPassword(!showPassword);

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const res = await signIn(values);
    if (res.success) {
      toast.success('Login successful');
      router.push('/homepage');
    } else {
      toast.error(res.error);
    }
  }

  const handleSignUpClick = () => {
    router.push('/auth/sign-up');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.imageBackground}></div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <h2 className={styles.title}>Welcome back!</h2>
          <p className={styles.subtitle}>Please enter your details</p>
          <Form {...form}>
            <form
              className={styles.form}
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-left">Password</FormLabel>
                    <FormControl>
                      <div className={styles.passwordWrapper}>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <span
                          className={styles.showPassword}
                          onClick={togglePassword}
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            size="1x"
                          />
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <Button type="submit" className={styles.loginButton}>
                Log In
              </Button>
            </form>
          </Form>
          <p className={styles.footerText}>
            Don’t have an account?{' '}
            <button onClick={handleSignUpClick} className={styles.signupLink}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
