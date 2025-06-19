
import React from 'react';

const Modernbutton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary', 
  size = 'medium',
  withGlow = false,
  withAnimation = true,
  withShine = false,
  className = '',
  iconLeft,
  iconRight,
  fullWidth = false
}) => {
  
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-500",
    secondary: "bg-secondary text-white hover:bg-dark-lighter",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
    danger: "bg-red-600 text-white hover:bg-red-500",
    glow: "bg-gradient-to-r from-primary-600 via-primary to-primary-500 text-white border border-white/10",
    light: "bg-white text-secondary hover:bg-gray-100",
    dark: "bg-secondary text-white hover:bg-dark-lighter",
  };
  
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  
  const animationClasses = withAnimation ? "transform hover:-translate-y-0.5 active:translate-y-0" : "";
  const glowClasses = withGlow ? 
    variant === 'glow' ? "shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50" : 
    variant === 'danger' ? "shadow-md hover:shadow-lg hover:shadow-red-500/50" :
    "shadow-md hover:shadow-lg hover:shadow-primary/30" : "";
  const shineClasses = withShine ? "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-all before:duration-1000 before:ease-in-out" : "";
  
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  const widthClasses = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${glowClasses} ${shineClasses} ${disabledClasses} ${widthClasses} ${className}`}
    >
      {iconLeft && <span className="mr-1">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-1">{iconRight}</span>}
    </button>
  );
};

export default Modernbutton;
