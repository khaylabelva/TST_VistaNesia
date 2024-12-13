'use client';

import { useState } from 'react';
import styles from './recommendations.module.css';

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

const recommendedDestinations: Destination[] = [
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

export default function AdventurePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedCard, setExpandedCard] = useState<Destination | null>(null);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendedDestinations.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + recommendedDestinations.length) % recommendedDestinations.length
      );
    };
  
    const handleViewDescription = (destination: Destination) => {
      setExpandedCard(destination);
    };
  
    const handleCloseModal = () => {
      setExpandedCard(null);
    };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.text}>
            <h1>Recommended Destinations</h1>
            <p>
              Embark on your dream journey by choosing destinations that delight
              not only your eyes but also your soul. Each place holds stories
              and adventures waiting to be explored.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/header.jpg" alt="Nature" className={styles.headerImage} />
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className={styles.recommendations}>
        <button className={styles.prevButton} onClick={handlePrev}>
          ◀ Prev
        </button>
        <div className={styles.carousel}>
          {recommendedDestinations.slice(currentIndex, currentIndex + 3).map((destination) => (
            <div key={destination.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{destination.name}</h3>
                <p className={styles.city}>{destination.city}</p>
                <div className={styles.details}>
                  <p>
                    <strong>Category:</strong> {destination.details.category}
                  </p>
                  <p>
                    <strong>Price:</strong> {destination.details.price}
                  </p>
                  <p>
                    <strong>Rating:</strong> {destination.details.rating}
                  </p>
                  <p>
                    <strong>Estimated Time:</strong> {destination.details.time}
                  </p>
                </div>
                <button
                  className={styles.viewDescriptionButton}
                  onClick={() => handleViewDescription(destination)}
                >
                  View Description
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          Next ▶
        </button>
      </section>

      {expandedCard && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{expandedCard.name}</h2>
            <p>{expandedCard.description}</p>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}