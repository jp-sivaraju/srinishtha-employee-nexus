
import React from 'react';

const GlassContainer = ({ 
  children, 
  className = '', 
  blur = 'md', // sm, md, lg, xl
  opacity = 'medium', // light, medium, heavy
  border = true,
  rounded = 'lg', // none, sm, md, lg, xl, full
  padding = true,
  shine = false
}) => {
  
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };
  
  const opacityClasses = {
    light: 'bg-white/10 dark:bg-dark/10',
    medium: 'bg-white/30 dark:bg-dark/30',
    heavy: 'bg-white/50 dark:bg-dark/50',
  };
  
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const borderClasses = border ? 'border border-white/20 dark:border-white/5' : '';
  const paddingClasses = padding ? 'p-6' : '';
  const shineClasses = shine ? 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-all before:duration-1000 before:ease-in-out' : '';
  
  return (
    <div className={`
      ${blurClasses[blur]}
      ${opacityClasses[opacity]}
      ${roundedClasses[rounded]}
      ${borderClasses}
      ${paddingClasses}
      ${shineClasses}
      shadow-lg hover:shadow-xl transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassContainer;
