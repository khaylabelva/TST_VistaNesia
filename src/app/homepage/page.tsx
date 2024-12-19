'use client';

import React, { useEffect, useState } from 'react';
import styles from './homepage.module.css';
import Header from './Header';
import ClientForm from './ClientForm';
import { fetchUser, logOut } from '../auth/auth.action';

export default function Homepage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

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

    const fetchDropdownData = async () => {
      try {
        const response = await fetch('/api/places');
        const data = await response.json();
        setCities(data.cities);
        setCategories(data.categories);
      } catch (error) {
        console.error('Failed to fetch dropdown data:', error);
      }
    };

    getUserData();
    fetchDropdownData();
  }, []);

  const handleLogout = async () => {
    await logOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingContent}>
          <img
            src="/loading.gif"
            alt="Loading..."
            className={styles.loadingGif}
          />
          <h2 className={styles.loadingTitle}>You’re All Set!</h2>
          <p className={styles.loadingDescription}>
            We're taking you back to the homepage. See you there!
          </p>
        </div>
      </div>
    );
  }

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
      <ClientForm user={user} cities={cities} categories={categories} />
    </div>
  );
}
