'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './homepage.module.css';

const ClientForm = ({ user }: { user: any }) => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({
    location: '',
    category: '',
    price: ''
  });
  const router = useRouter();

  const handleHistoryClick = () => {
    router.push('/history');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      location: !location.trim() ? 'Destination is required' : '',
      category: !category.trim() ? 'Travel style is required' : '',
      price: !price.trim() ? 'Budget range is required' : ''
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      return;
    }
    router.push(`/recommendation?location=${encodeURIComponent(location)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`);
  };

  return (
    <div className={`${styles.searchContainer} ${Object.values(errors).some(error => error !== '') ? styles.error : ''}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInput}>
            <div className={styles.inputGroup}>
            <label htmlFor="location" className={styles.label}>
                Destination
            </label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => {
                setLocation(e.target.value);
                setErrors(prev => ({ ...prev, location: '' }));
                }}
                placeholder="Enter your destination"
                className={`${styles.input} ${errors.location ? styles.inputError : ''}`}
            />
            {errors.location && (
                <p className={styles.errorMessage}>{errors.location}</p>
            )}
            </div>
            <div className={styles.inputGroup}>
            <label htmlFor="category" className={styles.label}>
                Travel Style
            </label>
            <select 
                id="category"
                value={category}
                onChange={(e) => {
                setCategory(e.target.value);
                setErrors(prev => ({ ...prev, category: '' }));
                }}
                className={`${styles.select} ${errors.category ? styles.inputError : ''}`}
            >
                <option value="">Select Travel Style</option>
                <option value="budaya">Budaya</option>
                <option value="taman-hiburan">Taman Hiburan</option>
                <option value="cagar-alam">Cagar Alam</option>
            </select>
            {errors.category && (
                <p className={styles.errorMessage}>{errors.category}</p>
            )}
            </div>
            <div className={styles.inputGroup}>
            <label htmlFor="price" className={styles.label}>
                Budget Range
            </label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => {
                setPrice(e.target.value);
                setErrors(prev => ({ ...prev, price: '' }));
                }}
                placeholder="Enter your budget range"
                className={`${styles.input} ${errors.price ? styles.inputError : ''}`}
            />
            {errors.price && (
                <p className={styles.errorMessage}>{errors.price}</p>
            )}
            </div>
        </div>
        <button type="submit" className={styles.button}>
          Explore →
        </button>
      </form>
    </div>
  );
};

export default ClientForm;