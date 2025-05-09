
import React from 'react';

const ModernButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary', 
  size = 'medium',
  withGlow = false,
  withAnimation = true,
  className = '',
  iconLeft,
  iconRight,
  fullWidth = false
}) => {
  
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-400 text-white hover:from-primary-500 hover:to-primary-300",
    secondary: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600",
    outline: "border-2 border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800",
    ghost: "text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800",
    danger: "bg-gradient-to-r from-red-600 to-red-400 text-white hover:from-red-500 hover:to-red-300",
  };
  
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  
  const animationClasses = withAnimation ? "transform hover:-translate-y-0.5 active:translate-y-0" : "";
  const glowClasses = withGlow ? "shadow-md hover:shadow-lg hover:shadow-primary-300/30" : "";
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  const widthClasses = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${glowClasses} ${disabledClasses} ${widthClasses} ${className}`}
    >
      {iconLeft && <span className="mr-1">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-1">{iconRight}</span>}
    </button>
  );
};

export default ModernButton;
