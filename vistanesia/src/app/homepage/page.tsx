import styles from './homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Discover Indonesia’s Hidden Gems</h1>
      </div>
      <div className={styles.searchContainer}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="location" className={styles.label}>
              Destination
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your destination"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="category" className={styles.label}>
              Travel Style
            </label>
            <select id="category" className={styles.select}>
              <option value="budaya">Budaya</option>
              <option value="taman-hiburan">Taman Hiburan</option>
              <option value="cagar-alam">Cagar Alam</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price" className={styles.label}>
              Budget Range
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter your budget range"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Explore →
          </button>
        </form>
      </div>
    </div>
  );
}
