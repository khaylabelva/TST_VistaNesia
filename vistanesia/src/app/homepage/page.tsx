import styles from './homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Navigate Roads with Comfort</h1>
        <p className={styles.subtitle}>Find your next destination with ease</p>
      </div>
      <div className={styles.searchContainer}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="location" className={styles.label}>
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="category" className={styles.label}>
              Category
            </label>
            <select id="category" className={styles.select}>
              <option value="economy">Economy Bus</option>
              <option value="executive">Executive Bus</option>
              <option value="luxury">Luxury Bus</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price" className={styles.label}>
              Price Range
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter price range"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Search →
          </button>
        </form>
      </div>
    </div>
  );
}
