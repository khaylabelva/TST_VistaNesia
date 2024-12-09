'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from './schema';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';
import styles from './signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signUp } from '../auth.action';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const res = await signUp(values);
    if (res.success) {
      toast.success('Account created successfully');
      router.push('/auth/sign-in');
    } else {
      toast.error(res.error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.imageBackground}></div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <h2 className={styles.title}>Create your account</h2>
          <p className={styles.subtitle}>Join us to access all features</p>
          <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)} autoComplete="on">
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...form.register('name')}
                className={styles.input}
                autoComplete="name" 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...form.register('email')}
                className={styles.input}
                autoComplete="email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Create a password"
                  {...form.register('password')}
                  className={styles.input}
                  autoComplete="new-password" 
                />
                <span className={styles.showPassword} onClick={togglePassword}>
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    size="1x"
                  />
                </span>
              </div>
            </div>
            <button type="submit" className={styles.signupButton}>
              Sign Up
            </button>
          </form>
          <p className={styles.footerText}>
            Already have an account?{' '}
            <button
              onClick={() => router.push('/auth/sign-in')}
              className={styles.loginLink}
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;