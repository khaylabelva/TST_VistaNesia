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
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [errors, setErrors] = useState({
    location: '',
    category: '',
    minBudget: '',
    maxBudget: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      location: !location.trim() ? 'Destination is required' : '',
      category: !category.trim() ? 'Travel style is required' : '',
      minBudget: isNaN(Number(minBudget)) || !minBudget.trim() ? 'Min budget must be a valid number' : '',
      maxBudget: isNaN(Number(maxBudget)) || !maxBudget.trim() ? 'Max budget must be a valid number' : '',
    };

    if (Number(minBudget) > Number(maxBudget)) {
      newErrors.minBudget = 'Min budget cannot be greater than max budget';
      newErrors.maxBudget = 'Max budget cannot be less than min budget';
    }

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
        body: JSON.stringify({
          city: location,
          category,
          minBudget: Number(minBudget),
          maxBudget: Number(maxBudget),
        }),
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
            <label htmlFor="minBudget" className={styles.label}>
              Min Budget
            </label>
            <input
              id="minBudget"
              type="text"
              value={minBudget}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setMinBudget(value);
                setErrors((prev) => ({ ...prev, minBudget: '' }));
              }}
              placeholder="e.g., 10000"
              className={`${styles.input} ${errors.minBudget ? styles.inputError : ''}`}
            />
            {errors.minBudget && <p className={styles.errorMessage}>{errors.minBudget}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="maxBudget" className={styles.label}>
              Max Budget
            </label>
            <input
              id="maxBudget"
              type="text"
              value={maxBudget}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setMaxBudget(value);
                setErrors((prev) => ({ ...prev, maxBudget: '' }));
              }}
              placeholder="e.g., 50000"
              className={`${styles.input} ${errors.maxBudget ? styles.inputError : ''}`}
            />
            {errors.maxBudget && <p className={styles.errorMessage}>{errors.maxBudget}</p>}
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