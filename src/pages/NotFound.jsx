
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-primary-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-4">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-lg w-full z-10">
        <GlassContainer 
          blur="xl"
          opacity="medium"
          className="text-center p-8 md:p-12"
        >
          <div className="mb-8">
            <GradientText gradient="sunset" as="h1" className="text-8xl font-bold mb-4">
              404
            </GradientText>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Oops! Page not found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/">
              <ModernButton withGlow withAnimation>
                Return to Home
              </ModernButton>
            </Link>
            <Link to="/dashboard">
              <ModernButton variant="outline">
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
