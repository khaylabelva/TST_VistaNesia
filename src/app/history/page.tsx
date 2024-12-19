import React from "react";
import styles from "./history.module.css";

const HistoryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Profile</h1>

      <div className={styles.profileCard}>
        <div className={styles.avatar}>B</div>
        <div className={styles.profileInfo}>
          <h2 className={styles.username}>belva</h2>
          <p className={styles.email}>belvakhayla@gmail.com</p>
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
        <div className={styles.tableRow}>
          <span>1</span>
          <span>2023-12-18</span>
          <span>Bali</span>
          <span>Vacation</span>
          <span>$500</span>
          <span>$1000</span>
          <span>
            <a href="#" className={styles.seeResult}>
              View
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
