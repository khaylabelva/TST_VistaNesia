"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './recommendations.module.css';

interface Destination {
  id: number;
  name: string;
  description: string;
  city: string;
  category: string;
  price: string;
  rating: string;
  timeMinutes: string;
}

export default function RecommendationsPage() {
    const [recommendedDestinations, setRecommendedDestinations] = useState<Destination[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
  
    useEffect(() => {
      const resultsId = new URLSearchParams(window.location.search).get('resultsId');
      if (resultsId) {
        // Fetch recommendations from localStorage or API based on the resultsId
        const storedRecommendations = localStorage.getItem('recommendations');
        if (storedRecommendations) {
          setRecommendedDestinations(JSON.parse(storedRecommendations));
        }
      }
    }, []);
  
    const scrollLeft = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const scrollAmount = carousel.clientWidth / 2;
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const scrollAmount = carousel.clientWidth / 2;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const [expandedCard, setExpandedCard] = useState<Destination | null>(null);

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

        {/* Title Section */}
        <div className={styles.headerTop}>
          <h2 className={styles.title}>There&rsquo;s {recommendedDestinations.length} places for you to explore!</h2>
        </div>

        {/* Recommendations Section */}
        <section className={styles.recommendations}>
          {!isAtStart && (
            <button className={styles.prevButton} onClick={scrollLeft}>
              <img src="/left-arrow.png" alt="Scroll Left" className={styles.arrowImage} />
            </button>
          )}
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel} ref={carouselRef}>
            {recommendedDestinations.map((destination) => (
              <div key={destination.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{destination.name}</h3>
                  <p className={styles.city}>{destination.city}</p>
                  <div className={styles.details}>
                    <p><strong>Category:</strong> {destination.category || 'N/A'}</p>
                    <p><strong>Price:</strong> {destination.price || '0'}</p>
                    <p><strong>Rating:</strong> {destination.rating || 'N/A'}</p>
                    <p><strong>Estimated Time:</strong> {destination.timeMinutes || '-'}</p>
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
          </div>
          {!isAtEnd && (
            <button className={styles.nextButton} onClick={scrollRight}>
              <img src="/right-arrow.png" alt="Scroll Right" className={styles.arrowImage} />
            </button>
          )}
        </section>

        {expandedCard && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>{expandedCard.name}</h2>
              <p>{expandedCard.description}</p>
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
              >
                ✖ Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
}