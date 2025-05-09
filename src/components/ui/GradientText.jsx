
import React from 'react';

const GradientText = ({ 
  children, 
  gradient = 'primary', // primary, secondary, sunset, blue-purple, night-owl
  className = '',
  as: Component = 'span',
  weight = 'normal' // normal, medium, semibold, bold
}) => {
  
  const gradientClasses = {
    primary: 'from-primary-500 to-primary-300',
    secondary: 'from-accent-blue to-primary-400',
    sunset: 'from-accent to-accent-yellow',
    'blue-purple': 'from-accent-blue to-primary-400',
    'night-owl': 'from-accent-blue via-accent-aqua to-primary-400',
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
