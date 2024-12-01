import React from 'react';
import styles from './login.module.css'; // Mengimpor CSS module

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Login</h2>
      <form className={styles.loginForm}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className={styles.loginBtn}>Login</button>
      </form>
    </div>
  );
};

export default Login;