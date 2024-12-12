'use client';

import React, { useEffect, useState } from 'react';
import styles from './homepage.module.css';
import Header from './Header';
import ClientForm from './ClientForm';
import { fetchUser, logOut } from '../auth/auth.action';

export default function Homepage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUser();
      if (!userData) {
        window.location.href = '/auth/sign-in';
      } else {
        setUser(userData);
      }
      setLoading(false);
    };
    getUserData();
  }, []);

  const handleLogout = async () => {
    await logOut();
    window.location.href = '/';
  };

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.logout}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className={styles.content}>
        <Header user={user} />
      </div>
      <ClientForm user={user} />
    </div>
  );
}