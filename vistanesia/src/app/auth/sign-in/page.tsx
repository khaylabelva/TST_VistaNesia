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

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

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
    router.push('/signup');
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
          <form
            className={styles.form}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...form.register('email')}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  {...form.register('password')}
                  className={styles.input}
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
            </div>
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
          </form>
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