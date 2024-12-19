"use client";

import React, { useEffect, useState } from "react";
import styles from "./history.module.css";
import { fetchUser } from "../auth/auth.action";

const HistoryPage = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedDestinations, setSavedDestinations] = useState<any[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUser();
        if (!userData) {
          window.location.href = "/auth/sign-in";
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      const userKey = `recommendations_${user.email}`;
      const storedRecommendations = localStorage.getItem(userKey);
      if (storedRecommendations) {
        try {
          const recommendations = JSON.parse(storedRecommendations);
          setSavedDestinations(recommendations);
        } catch (error) {
          console.error("Failed to parse recommendations:", error);
        }
      }
    }
  }, [user]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <img src="/loading.gif" alt="Loading..." className={styles.loadingGif} />
      </div>
    );
  }

  if (!user) {
    return <div>Error: User not found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <a href="/homepage" className={styles.backToHome}>
            ← Back to Home
          </a>
          <h1 className={styles.title}>My Profile</h1>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.avatar}>{user.name[0].toUpperCase()}</div>
          <div className={styles.profileInfo}>
            <h2 className={styles.username}>{user.name}</h2>
            <p className={styles.email}>{user.email}</p>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>No.</span>
            <span>Date</span>
            <span>Destination</span>
            <span>Category</span>
            <span>Min Budget</span>
            <span>Max Budget</span>
            <span>See Result</span>
          </div>
          {savedDestinations.length > 0 ? (
            savedDestinations.map((destination, index) => {
              const resultDate = new Date(destination.date);
              const formattedDate = isNaN(resultDate.getTime())
                ? "Invalid Date"
                : resultDate.toLocaleDateString();
              return (
                <div key={destination.id || index} className={styles.tableRow}>
                  <span>{index + 1}</span>
                  <span>{formattedDate}</span>
                  <span>{destination.form.location || "N/A"}</span>
                  <span>{destination.form.category || "N/A"}</span>
                  <span>{destination.form.minBudget || "N/A"}</span>
                  <span>{destination.form.maxBudget || "N/A"}</span>
                  <span>
                    <a
                      href={`/recommendations/?resultsId=${destination.id}`}
                      className={styles.seeResult}
                    >
                      View
                    </a>
                  </span>
                </div>
              );
            })
          ) : (
            <div className={styles.noData}>No saved destinations</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
