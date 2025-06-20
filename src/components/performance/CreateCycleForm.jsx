
import React from 'react';
import { Card } from '../ui/Card';
import  button  from '../ui/button';

const CreateCycleForm = ({ 
  newCycle, 
  setNewCycle, 
  onSubmit, 
  onCancel,
  templates,
  departmentsList 
}) => {
  const toggleDepartment = (dept) => {
    setNewCycle({
      ...newCycle,
      departments: newCycle.departments.includes(dept)
        ? newCycle.departments.filter(d => d !== dept)
        : [...newCycle.departments, dept]
    });
  };

  return (
    <Card title="Create New Appraisal Cycle">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cycle Name *
          </label>
          <input
            type="text"
            value={newCycle.name}
            onChange={(e) => setNewCycle({ ...newCycle, name: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
            placeholder="e.g., Q3 2025 Performance Review"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cycle Type
          </label>
          <select
            value={newCycle.type}
            onChange={(e) => setNewCycle({ ...newCycle, type: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-yearly">Half-yearly</option>
            <option value="Annual">Annual</option>
            <option value="Probationary">Probationary</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Start Date *
          </label>
          <input
            type="date"
            value={newCycle.startDate}
            onChange={(e) => setNewCycle({ ...newCycle, startDate: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            End Date *
          </label>
          <input
            type="date"
            value={newCycle.endDate}
            onChange={(e) => setNewCycle({ ...newCycle, endDate: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Template
          </label>
          <select
            value={newCycle.template}
            onChange={(e) => setNewCycle({ ...newCycle, template: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          >
            {templates.map(template => (
              <option key={template} value={template}>{template}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Departments *
          </label>
          <div className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 max-h-32 overflow-y-auto">
            {departmentsList.map(dept => (
              <label key={dept} className="flex items-center space-x-2 py-1">
                <input
                  type="checkbox"
                  checked={newCycle.departments.includes(dept)}
                  onChange={() => toggleDepartment(dept)}
                  className="rounded"
                />
                <span className="text-sm">{dept}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={newCycle.description}
          onChange={(e) => setNewCycle({ ...newCycle, description: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          rows="3"
          placeholder="Brief description of the appraisal cycle objectives"
        />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newCycle.notificationsEnabled}
            onChange={(e) => setNewCycle({ ...newCycle, notificationsEnabled: e.target.checked })}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Enable email notifications</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newCycle.autoReminders}
            onChange={(e) => setNewCycle({ ...newCycle, autoReminders: e.target.checked })}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Automatic reminders</span>
        </label>
      </div>
      
      <div className="flex justify-end space-x-3 mt-6">
        <button variant="outline" onClick={onCancel}>
          Cancel
        </button>
        <button onClick={onSubmit}>
          Create Cycle
        </button>
      </div>
    </Card>
  );
};

export default CreateCycleForm;
