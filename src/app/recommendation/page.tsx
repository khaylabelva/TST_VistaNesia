'use client';

import React, { useState } from 'react';
import styles from './recommendation.module.css';

interface Destination {
  id: number;
  name: string;
  description: string;
  city: string;
  details: {
    category: string;
    price: string;
    rating: string;
    time: string;
  };
}

const recommendedDestinations = [
  {
    id: 1,
    name: 'Pulau Komodo',
    description: 'Home to the famous Komodo dragons and breathtaking landscapes.',
    city: 'Nusa Tenggara Timur',
    details: {
      category: 'Cagar Alam',
      price: 'Rp 2.500.000 - Rp 5.000.000',
      rating: '4.8',
      time: '180 minutes',
    },
  },
  {
    id: 2,
    name: 'Candi Borobudur',
    description: "The world's largest Buddhist temple with stunning architectural marvel.",
    city: 'Magelang, Jawa Tengah',
    details: {
      category: 'Budaya',
      price: 'Rp 1.500.000 - Rp 3.000.000',
      rating: '4.7',
      time: '120 minutes',
    },
  },
  {
    id: 3,
    name: 'Taman Safari Indonesia',
    description: 'An exciting wildlife park with diverse animal species.',
    city: 'Bogor, Jawa Barat',
    details: {
      category: 'Taman Hiburan',
      price: 'Rp 1.000.000 - Rp 2.500.000',
      rating: '4.5',
      time: '150 minutes',
    },
  },
  {
    id: 4,
    name: 'Raja Ampat',
    description: 'A paradise for marine life and underwater exploration.',
    city: 'Papua Barat',
    details: {
      category: 'Cagar Alam',
      price: 'Rp 5.000.000 - Rp 10.000.000',
      rating: '5.0',
      time: '240 minutes',
    },
  },
  {
    id: 5,
    name: 'Cagar Alam Kerinci Seblat',
    description: 'A vast national park with rich biodiversity and stunning landscapes.',
    city: 'Sumatera',
    details: {
      category: 'Cagar Alam',
      price: 'Rp 2.000.000 - Rp 4.000.000',
      rating: '4.6',
      time: '180 minutes',
    },
  },
];

export default function RecommendationPage() {
  const [modalData, setModalData] = useState<Destination['details'] | null>(null);

  const openModal = (details: Destination['details']) => setModalData(details);
  const closeModal = () => setModalData(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recommended Destinations</h1>
      <div className={styles.timeline}>
        {recommendedDestinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.circle}></div>
            <div className={styles.content}>
              <h2 className={styles.destinationName}>{destination.name}</h2>
              <p className={styles.city}>{destination.city}</p>
              <p className={styles.description}>{destination.description}</p>
              <button
                className={styles.detailsButton}
                onClick={() => openModal(destination.details)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <>
          <div className={styles.overlay} onClick={closeModal}></div>
          <div className={styles.modal}>
            <h2>Details</h2>
            <p>
              <span className={styles.strongText}>Category:</span> {modalData.category}
            </p>
            <p>
              <span className={styles.strongText}>Price:</span> {modalData.price}
            </p>
            <p>
              <span className={styles.strongText}>Rating:</span> {modalData.rating} ⭐
            </p>
            <p>
              <span className={styles.strongText}>Time:</span> {modalData.time}
            </p>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}