"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.imageBackground}></div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <h2 className={styles.title}>Create your account</h2>
          <p className={styles.subtitle}>Join us to access all features</p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Create a password"
                  className={styles.input}
                  required
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
            <span>
              <button onClick={handleLoginClick} className={styles.loginLink}>
                Log In
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
