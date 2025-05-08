
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Srinishtha Hub";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Oops! The page you're looking for cannot be found.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-5 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Return to Dashboard
        </Link>
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          If you believe this is an error, please contact the IT department.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
