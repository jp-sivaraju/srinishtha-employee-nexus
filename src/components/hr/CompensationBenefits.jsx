import React, { useState } from 'react';
import GlassContainer from '../ui/GlassContainer';

const DocumentCard = ({ title, description, onView, onDownload, dropdownOptions, onDropdownChange }) => {
  return (
    <div className="bg-primary-900/20 rounded-lg p-3 shadow-lg border border-primary-400/20 mb-3">
      <div className="flex justify-between items-between mb-2">
        <div className="flex items-between gap-16">
          <h3 className="text-sm font-medium text-blue">{title}</h3>
          {dropdownOptions && (
            <select
              className="bg-gray-600 text-white px-0 py-0 rounded"
              onChange={(e) => onDropdownChange(e.target.value)}
            >
              {dropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex gap-2">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-2 rounded"
            onClick={onView}
          >
            View
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-2 rounded"
            onClick={onDownload}
          >
            Download
          </button>
        </div>
      </div>
      {description && <p className="text-primary-300 text-sm">{description}</p>}
    </div>
  );
};

const EmployeeDocuments = () => {
  const [paySlipFilter, setPaySlipFilter] = useState('January');

  const handleView = (documentType, filter = '') => {
    alert(`Viewing ${documentType}${filter ? ` (${filter})` : ''}...`);
  };

  const handleDownload = (documentType, filter = '') => {
    alert(`Downloading ${documentType}${filter ? ` (${filter})` : ''}...`);
    // In a real app, you’d use something like jsPDF to generate and download a PDF
  };

  const handlePaySlipFilterChange = (value) => {
    setPaySlipFilter(value);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <GlassContainer className="p-3 max-w-lg mx-between">
      <DocumentCard
        title="Offer Letter"
        onView={() => handleView('Offer Letter')}
        onDownload={() => handleDownload('Offer Letter')}
      />
      <DocumentCard
        title="Hike"
        onView={() => handleView('Hike')}
        onDownload={() => handleDownload('Hike')}
      />
      <DocumentCard
        title="Monthly"
        dropdownOptions={months}
        onDropdownChange={handlePaySlipFilterChange}
        onView={() => handleView('Pay Slips', paySlipFilter)}
        onDownload={() => handleDownload('Pay Slips', paySlipFilter)}
      />
    </GlassContainer>
  );
};

export default EmployeeDocuments;