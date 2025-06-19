
import React from 'react';
import  button  from '../ui/button';
import { Plus } from 'lucide-react';

const AppraisalCyclesHeader = ({ onCreateClick }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Appraisal Cycles</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage comprehensive performance appraisal cycles across all organizational levels
        </p>
      </div>
      <button 
        onClick={onCreateClick}
        className="flex items-center gap-2"
      >
        <Plus size={16} />
        Create New Cycle
      </button>
    </div>
  );
};

export default AppraisalCyclesHeader;
