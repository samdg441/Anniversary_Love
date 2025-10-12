import { useState, useEffect } from 'react';
import './RomanticCarousel.css';

const RomanticCarousel = ({ diffDays, diffMinutes, diffSeconds }) => {
  const slides = [
    { 
      image: '/images/foto-dias.jpg', 
      text: 'Días Juntos', 
      value: diffDays 
    },
    { 
      image: '/images/foto-minutos.jpg', 
      text: 'Minutos de Felicidad', 
      value: diffMinutes 
    },
    { 
      image: '/images/foto-segundos.jpg', 
      text: 'Segundos de Amor', 
      value: diffSeconds 
    },
    { 
      image: '/images/foto-romantica.jpg', 
      text: 'Meses Juntos', 
      value: 9 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="romantic-carousel">
      <div className="carousel-container">
        <button 
          className="nav-button prev-button" 
          onClick={handlePrev}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <div className="slide-content">
          <div className="image-container">
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].text}
              className={`carousel-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentElement.querySelector('.photo-placeholder');
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="photo-placeholder">
              {slides[currentIndex].text}
            </div>
          </div>
          
          <div className="text-content">
            <div className="romantic-value">{slides[currentIndex].value}</div>
            <div className="romantic-text">{slides[currentIndex].text}</div>
          </div>
        </div>

        <button 
          className="nav-button next-button" 
          onClick={handleNext}
          aria-label="Siguiente imagen"
        >
          ›
        </button>
      </div>

      {/* Indicadores de corazones restaurados */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`heart-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          >
            ♥
          </button>
        ))}
      </div>
    </div>
  );
};

export default RomanticCarousel;