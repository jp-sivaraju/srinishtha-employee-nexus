
import React from 'react';

const GlassContainer = ({ 
  children, 
  className = '', 
  blur = 'md', // sm, md, lg, xl
  opacity = 'medium', // light, medium, heavy
  border = true,
  rounded = 'lg', // none, sm, md, lg, xl, full
  padding = true
}) => {
  
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };
  
  const opacityClasses = {
    light: 'bg-white/10 dark:bg-gray-900/10',
    medium: 'bg-white/30 dark:bg-gray-900/30',
    heavy: 'bg-white/50 dark:bg-gray-900/50',
  };
  
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const borderClasses = border ? 'border border-white/20 dark:border-gray-800/30' : '';
  const paddingClasses = padding ? 'p-6' : '';
  
  return (
    <div className={`
      ${blurClasses[blur]}
      ${opacityClasses[opacity]}
      ${roundedClasses[rounded]}
      ${borderClasses}
      ${paddingClasses}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassContainer;
