
import React from 'react';
import { Star } from 'lucide-react';

const RatingSelector = ({ value, onChange, disabled = false }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      {ratings.map((rating) => (
        <button
          key={rating}
          type="button"
          disabled={disabled}
          onClick={() => onChange(rating)}
          className={`p-1 rounded transition-colors ${
            disabled 
              ? 'cursor-not-allowed opacity-50' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Star
            size={20}
            className={`${
              value >= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            } transition-colors`}
          />
        </button>
      ))}
      {value && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          ({value}/5)
        </span>
      )}
    </div>
  );
};

export default RatingSelector;
