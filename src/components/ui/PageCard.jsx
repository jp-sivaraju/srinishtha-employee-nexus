
import React, { useEffect, useRef } from 'react';

export const PageCard = ({ 
  title, 
  children, 
  className = '', 
  gradient = false,
  glassEffect = false,
  animateOnScroll = true,
  headerIcon: Icon,
  footer
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

  const baseClasses = "rounded-xl shadow-lg overflow-hidden card-hover-effect";
  const gradientClasses = gradient ? "bg-gradient-to-br from-white to-primary-100 dark:from-gray-800 dark:to-gray-700" : 
    "bg-white dark:bg-gray-800";
  const glassClasses = glassEffect ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30" : "";
  const animateClasses = animateOnScroll ? "animate-on-scroll" : "";
  
  return (
    <div 
      ref={cardRef} 
      className={`${baseClasses} ${gradientClasses} ${glassClasses} ${animateClasses} ${className}`}
    >
      {(title || Icon) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-3 text-primary-600" />}
          {title && <h3 className="text-lg font-semibold text-gradient">{title}</h3>}
        </div>
      )}
      
      <div className="p-6">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-3 bg-primary-50/50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default PageCard;
