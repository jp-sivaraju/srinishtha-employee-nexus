
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import ModernButton from '../components/ui/ModernButton';
import GradientText from '../components/ui/GradientText';
import GlassContainer from '../components/ui/GlassContainer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark bg-gradient-to-br from-dark to-dark-light text-white p-4">
      {/* Code-like elements background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
        
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
          className="text-center p-8 md:p-12 border-white/10 bg-dark-lighter/70"
        >
          <div className="mb-8">
            <GradientText gradient="blue-purple" as="h1" className="text-8xl font-bold mb-4 font-fira">
              404
            </GradientText>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              &lt;Page not found/&gt;
            </h2>
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
                className="bg-gradient-primary shadow-glow-primary"
              >
                Return to Home
              </ModernButton>
            </Link>
            <Link to="/dashboard">
              <ModernButton 
                variant="outline"
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
