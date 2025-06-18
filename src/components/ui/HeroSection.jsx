
import React from 'react';
import { Link } from 'react-router-dom';
import GradientText from './GradientText';
import ModernButton from './ModernButton';
import GlassContainer from './GlassContainer';
import { ChevronRight, Sparkle } from 'lucide-react'
import { Sidebar } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dark via-primary-600/30 to-dark min-h-[90vh] flex items-center">
      {/* Animated particles/stars background */}
      <div className="stars-container absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>
      
      {/* Abstract shapes background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-accent-blue to-primary-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-r from-accent to-accent-yellow rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-r from-accent-aqua to-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating elements - decorative */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-accent-yellow to-accent animate-float opacity-70"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-aqua animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-white font-medium mb-6 border border-white/20 animate-fade-in flex items-center gap-2">
              <Sparkle size={16} className="text-accent-yellow animate-pulse" />
              <span>Welcome to Srinishtha Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Your Complete <br />
              <GradientText gradient="rainbow" className="font-bold" weight="bold" animate={true} as="span">
                Employee Portal
              </GradientText>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Access all your company resources, tools, and information in one seamless platform designed for better collaboration and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <ModernButton 
                  size="large" 
                  variant="glow" 
                  className="text-white font-bold"
                  withAnimation 
                  withGlow
                  iconRight={<ChevronRight />}
                >
                  Sign In
                </ModernButton>
              </Link>
              
              <Link to="/dashboard">
                <ModernButton 
                  size="large" 
                  variant="outline" 
                  className="text-white border-white/40 hover:bg-white/10"
                  withAnimation
                  withShine
                >
                  Explore Features
                </ModernButton>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Main image with glass effect */}
              <GlassContainer 
                blur="xl" 
                opacity="medium" 
                className="transform rotate-2 hover:rotate-0 transition-all duration-500 border-white/30"
                shine={true}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Digital Workplace" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 to-transparent rounded-lg"></div>
              </GlassContainer>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-yellow to-accent rounded-lg -rotate-12 -z-10 blur-sm animate-pulse-slow"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-300 to-primary-500 rounded-lg rotate-12 -z-10 blur-sm animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          className="fill-background"></path>
        </svg>
      </div>
    </div>
  );
};
