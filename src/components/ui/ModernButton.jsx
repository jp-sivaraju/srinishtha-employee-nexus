
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
    primary: "bg-gradient-to-r from-primary-500 to-primary-400 text-white hover:from-primary-400 hover:to-primary-300",
    secondary: "bg-accent-blue text-white hover:bg-accent-blue/90",
    outline: "border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10",
    ghost: "text-primary-400 hover:bg-primary-400/10",
    danger: "bg-gradient-to-r from-red-600 to-red-400 text-white hover:from-red-500 hover:to-red-300",
  };
  
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  
  const animationClasses = withAnimation ? "transform hover:-translate-y-0.5 active:translate-y-0" : "";
  const glowClasses = withGlow ? "shadow-md hover:shadow-lg hover:shadow-primary-400/30" : "";
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
