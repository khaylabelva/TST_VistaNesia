"use client"; // Tambahkan ini di baris pertama

import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
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
          <form className={styles.form}>
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
                  placeholder="Enter your password"
                  className={styles.input}
                  required
                />
                <span className={styles.showPassword} onClick={togglePassword}>
                  <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                </span>
              </div>
            </div>
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
          </form>
          <p className={styles.footerText}>
            Don’t have an account?{' '}
            <a href="#" className={styles.signupLink}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
