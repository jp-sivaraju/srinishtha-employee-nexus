
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import ModernButton from '../components/ui/ModernButton';
import GradientText from '../components/ui/GradientText';
import GlassContainer from '../components/ui/GlassContainer';
import { Sparkle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark bg-gradient-to-br from-dark via-primary-600/20 to-dark-light text-white p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Glowing circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated particles/stars */}
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
        
        {/* Code lines */}
        <div className="absolute top-10 left-10 font-fira text-accent-blue opacity-30 text-sm">
          throw new Error('Page not found');
        </div>
        <div className="absolute bottom-20 right-20 font-fira text-accent-yellow opacity-30 text-sm">
          // Error code: 404
        </div>
        <div className="absolute bottom-40 left-1/4 font-fira text-primary opacity-30 text-sm">
          console.error('Route not available');
        </div>
      </div>
      
      <div className="max-w-lg w-full z-10">
        <GlassContainer 
          blur="xl"
          opacity="medium"
          shine={true}
          className="text-center p-8 md:p-12 border-white/10 bg-dark-lighter/70"
        >
          <div className="mb-8">
            <div className="mb-4 inline-block">
              <GradientText gradient="rainbow" as="h1" className="text-8xl font-bold font-fira" animate={true}>
                404
              </GradientText>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkle size={18} className="text-accent-yellow animate-pulse" />
              <h2 className="text-2xl font-semibold text-white">
                &lt;Page not found/&gt;
              </h2>
              <Sparkle size={18} className="text-accent-yellow animate-pulse" />
            </div>
            <p className="text-gray-300 mb-8 font-fira">
              The route you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/">
              <ModernButton 
                withGlow 
                withAnimation 
                withShine
                variant="glow"
                className="shadow-glow-primary"
              >
                Return to Home
              </ModernButton>
            </Link>
            <Link to="/dashboard">
              <ModernButton 
                variant="outline"
                withShine
                className="border-primary-400 text-primary-400 hover:bg-primary-400/10"
              >
                Go to Dashboard
              </ModernButton>
            </Link>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
};

export default NotFound;
