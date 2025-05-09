
import React from 'react';

const GradientText = ({ 
  children, 
  gradient = 'primary', // primary, secondary, sunset, blue-purple, pastel
  className = '',
  as: Component = 'span',
  weight = 'normal' // normal, medium, semibold, bold
}) => {
  
  const gradientClasses = {
    primary: 'from-primary-600 to-primary-400',
    secondary: 'from-primary-400 to-secondary-400',
    sunset: 'from-orange-500 to-pink-400',
    'blue-purple': 'from-blue-500 to-purple-500',
    pastel: 'from-green-400 to-yellow-300',
  };
  
  const fontWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  return (
    <Component 
      className={`bg-gradient-to-r ${gradientClasses[gradient]} bg-clip-text text-transparent ${fontWeightClasses[weight]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default GradientText;
