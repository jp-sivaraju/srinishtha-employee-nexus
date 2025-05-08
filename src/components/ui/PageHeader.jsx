
import React, { useEffect } from 'react';

export const PageHeader = ({ title, description, backgroundImage, withParallax = true }) => {
  useEffect(() => {
    if (withParallax) {
      const handleScroll = () => {
        const header = document.getElementById('parallaxHeader');
        if (header) {
          const scrollValue = window.scrollY;
          const translateY = scrollValue * 0.5;
          header.style.backgroundPositionY = `-${translateY}px`;
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [withParallax]);

  return (
    <div 
      id="parallaxHeader"
      className={`${withParallax ? 'parallax-header' : 'relative'} w-full mb-8 rounded-lg overflow-hidden`}
      style={
        backgroundImage 
        ? { 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          } 
        : {}
      }
    >
      <div className={backgroundImage ? 'parallax-content' : 'bg-primary py-8 px-6 rounded-lg text-white'}>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && <p className="text-lg opacity-90">{description}</p>}
      </div>

      {withParallax && !backgroundImage && <div className="parallax-bg"></div>}
    </div>
  );
};
