
import React from 'react';

const GradientText = ({ 
  children, 
  gradient = 'primary', // primary, secondary, sunset, blue-purple, night-owl, rainbow, neon, shine, danger
  className = '',
  as: Component = 'span',
  weight = 'normal', // normal, medium, semibold, bold
  animate = false
}) => {
  
  const gradientClasses = {
    primary: 'from-primary-500 to-primary-300',
    secondary: 'from-accent-blue to-primary-400',
    sunset: 'from-red-500 to-red-300',
    'blue-purple': 'from-accent-blue to-primary-400',
    'night-owl': 'from-accent-blue via-accent-aqua to-primary-400',
    rainbow: 'from-accent-blue via-primary-400 to-accent-yellow',
    neon: 'from-accent-aqua via-primary-300 to-accent animate-pulse',
    shine: 'from-white/90 via-primary-300 to-white/90',
    pastel: 'from-accent-yellow via-accent-aqua to-primary-300',
    danger: 'from-red-500 via-red-400 to-white/90',
  };
  
  const fontWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const animationClass = animate ? 'bg-size-200 animate-gradient-x' : '';
  
  return (
    <Component 
      className={`bg-gradient-to-r ${gradientClasses[gradient]} bg-clip-text text-transparent ${fontWeightClasses[weight]} ${animationClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default GradientText;
