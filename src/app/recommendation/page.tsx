import React from 'react';
import styles from './recommendation.module.css';
import Image from 'next/image';

const recommendedDestinations = [
  {
    id: 1,
    name: 'Pulau Komodo',
    location: 'Nusa Tenggara Timur',
    description: 'Home to the famous Komodo dragons and breathtaking landscapes.',
    category: 'Cagar Alam',
    budget: 'Rp 2.500.000 - Rp 5.000.000',
    imageUrl: '/komodo.jpg',
  },
  {
    id: 2,
    name: 'Candi Borobudur',
    location: 'Magelang, Jawa Tengah',
    description: 'The world\'s largest Buddhist temple with stunning architectural marvel.',
    category: 'Budaya',
    budget: 'Rp 1.500.000 - Rp 3.000.000',
    imageUrl: '/borobudur.jpg',
  },
  {
    id: 3,
    name: 'Taman Safari Indonesia',
    location: 'Bogor, Jawa Barat',
    description: 'An exciting wildlife park with diverse animal species.',
    category: 'Taman Hiburan',
    budget: 'Rp 1.000.000 - Rp 2.500.000',
    imageUrl: '/safari.jpg',
  },
  {
    id: 4,
    name: 'Raja Ampat',
    location: 'Papua Barat',
    description: 'A paradise for marine life and underwater exploration.',
    category: 'Cagar Alam',
    budget: 'Rp 5.000.000 - Rp 10.000.000',
    imageUrl: '/raja-ampat.jpg',
  },
  {
    id: 5,
    name: 'Cagar Alam Kerinci Seblat',
    location: 'Sumatera',
    description: 'A vast national park with rich biodiversity and stunning landscapes.',
    category: 'Cagar Alam',
    budget: 'Rp 2.000.000 - Rp 4.000.000',
    imageUrl: '/kerinci.jpg',
  }
];

export default function RecommendationPage() {
  return (
    <div className={styles.recommendationContainer}>
      <div className={styles.header}>
        <h1>Recommended Destinations</h1>
        <p>Based on your travel preferences</p>
      </div>
      <div className={styles.cardContainer}>
        {recommendedDestinations.map((destination) => (
          <div key={destination.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image 
                src={destination.imageUrl} 
                alt={destination.name} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className={styles.cardContent}>
              <h2>{destination.name}</h2>
              <p className={styles.location}>{destination.location}</p>
              <p className={styles.description}>{destination.description}</p>
              <div className={styles.cardDetails}>
                <span className={styles.category}>{destination.category}</span>
                <span className={styles.budget}>{destination.budget}</span>
              </div>
              <button className={styles.detailButton}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}