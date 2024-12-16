'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './homepage.module.css';

const ClientForm = ({
  user,
  cities,
  categories,
}: {
  user: any;
  cities: string[];
  categories: string[];
}) => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({
    location: '',
    category: '',
    price: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const newErrors = {
      location: !location.trim() ? 'Destination is required' : '',
      category: !category.trim() ? 'Travel style is required' : '',
      price: !price.trim() ? 'Budget range is required' : '',
    };
  
    setErrors(newErrors);
  
    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }
  
    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: location, category, price }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
  
      const data = await response.json();
      const recommendationsId = Date.now();
      localStorage.setItem('recommendations', JSON.stringify(data));
      router.push(`/recommendations?resultsId=${recommendationsId}`);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };    

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInput}>
          <div className={styles.inputGroup}>
            <label htmlFor="location" className={styles.label}>
              Destination
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setErrors((prev) => ({ ...prev, location: '' }));
              }}
              className={`${styles.select} ${errors.location ? styles.inputError : ''}`}
            >
              <option value="" disabled className={styles.placeholderOption}>
                Select your destination
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.location && <p className={styles.errorMessage}>{errors.location}</p>}
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
                setErrors((prev) => ({ ...prev, category: '' }));
              }}
              className={`${styles.select} ${errors.category ? styles.inputError : ''}`}
            >
              <option value="" disabled className={styles.placeholderOption}>
                Select your travel style
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <p className={styles.errorMessage}>{errors.category}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price" className={styles.label}>
              Budget Range
            </label>
            <select
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setErrors((prev) => ({ ...prev, price: '' }));
              }}
              className={`${styles.select} ${errors.price ? styles.inputError : ''}`}
            >
              <option value="" disabled className={styles.placeholderOption}>
                Select your budget range
              </option>
              <option value="0-50000">0 - 50,000</option>
              <option value="50000-100000">50,000 - 100,000</option>
              <option value="100000-150000">100,000 - 150,000</option>
              <option value="150000+">&gt; 150,000</option>
            </select>
            {errors.price && <p className={styles.errorMessage}>{errors.price}</p>}
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