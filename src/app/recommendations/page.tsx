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
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      const carousel = carouselRef.current;
    
      const handleScroll = () => {
        if (!carousel) return;
    
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      };
      carousel?.addEventListener('scroll', handleScroll);
      return () => carousel?.removeEventListener('scroll', handleScroll);
    }, []);    

    useEffect(() => {
      const resultsId = new URLSearchParams(window.location.search).get('resultsId');
      if (resultsId) {
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

    const handleBackToHomeClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPopup(true);
    };

    const handleConfirmRedirect = () => {
      localStorage.setItem('recommendations', JSON.stringify(recommendedDestinations));
      window.location.href = '/homepage';
    };

    const handleCancelRedirect = () => {
      setShowPopup(false);
    };

    return (
      <div className={styles.container}>
        {/* Back to Home Link */}
        <div className={styles.backToHome}>
          <a href="#" onClick={handleBackToHomeClick}>← Back to Home</a>
        </div>

        {/* Confirmation Popup */}
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <h3>Do you want to save your recommendations?</h3>
              <p>If you go back now, your selected destinations may not be saved.</p>
              <div className={styles.popupButtons}>
                <button onClick={handleCancelRedirect}>No, Don't Save</button>
                <button onClick={handleConfirmRedirect}>Yes, Save & Go Back</button>
              </div>
            </div>
          </div>
        )}

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
          <h2 className={styles.title}>
            {recommendedDestinations.length > 0
              ? `There are ${recommendedDestinations.length} places for you to explore!`
              : "No destinations available to explore!"}
          </h2>
        </div>

        {/* Recommendations Section */}
        <section className={styles.recommendations}>
          {/* Previous Button */}
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
                      <p><strong>Price:</strong> {destination.price ? `Rp ${destination.price}` : 'Rp 0'}</p>
                      <p><strong>Rating:</strong> {destination.rating || 'N/A'}</p>
                      <p><strong>Estimated Time:</strong>{' '}{destination.timeMinutes ? `${destination.timeMinutes} minutes` : '0 minutes'}</p>
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

          {/* Next Button */}
          {!isAtEnd && recommendedDestinations.length > 1 && (
            <button className={styles.nextButton} onClick={scrollRight}>
              <img src="/right-arrow.png" alt="Scroll Right" className={styles.arrowImage} />
            </button>
          )}
        </section>

        {expandedCard && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{expandedCard.name}</h2>
            <p className={styles.modalDescription}>{expandedCard.description}</p>
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
