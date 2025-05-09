
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="text-center max-w-md w-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Page not found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-primary-600 to-primary-400 text-white font-medium shadow-md hover:from-primary-500 hover:to-primary-300 transform transition-all duration-300 hover:-translate-y-0.5"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
