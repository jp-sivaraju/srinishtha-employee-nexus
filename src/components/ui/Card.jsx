
import React, { useEffect, useRef } from 'react';

export const Card = ({ 
  title, 
  icon: Icon, 
  children, 
  className = '', 
  footer,
  animateOnScroll = true 
}) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (animateOnScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
      
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [animateOnScroll]);

  return (
    <div 
      ref={cardRef} 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden card-hover ${animateOnScroll ? 'animate-on-scroll' : ''} ${className}`}
    >
      {(title || Icon) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-3 text-primary-600" />}
          {title && <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>}
        </div>
      )}
      
      <div className="p-6">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};
