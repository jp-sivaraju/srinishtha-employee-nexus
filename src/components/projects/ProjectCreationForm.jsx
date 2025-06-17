
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Save, 
  X, 
  Upload, 
  Calendar, 
  DollarSign, 
  Users, 
  Target,
  AlertTriangle,
  FileText,
  Plus,
  Minus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const ProjectCreationForm = ({ onClose, onSave, editProject = null }) => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    // Basic Information
    projectName: editProject?.projectName || '',
    projectCode: editProject?.projectCode || '',
    description: editProject?.description || '',
    
    // Project Management Fields (PMP Standard)
    projectType: editProject?.projectType || 'waterfall',
    projectCategory: editProject?.projectCategory || 'internal',
    priority: editProject?.priority || 'medium',
    complexity: editProject?.complexity || 'medium',
    
    // Stakeholder Information
    projectManager: editProject?.projectManager || '',
    projectSponsor: editProject?.projectSponsor || '',
    businessOwner: editProject?.businessOwner || '',
    technicalLead: editProject?.technicalLead || '',
    
    // Timeline & Milestones
    startDate: editProject?.startDate || '',
    endDate: editProject?.endDate || '',
    plannedDuration: editProject?.plannedDuration || '',
    
    // Budget & Resources
    totalBudget: editProject?.totalBudget || '',
    approvedBudget: editProject?.approvedBudget || '',
    currency: editProject?.currency || 'USD',
    
    // Scope & Objectives
    projectObjectives: editProject?.projectObjectives || [''],
    projectScope: editProject?.projectScope || '',
    outOfScope: editProject?.outOfScope || '',
    successCriteria: editProject?.successCriteria || [''],
    
    // Risk Management
    riskLevel: editProject?.riskLevel || 'medium',
    assumptions: editProject?.assumptions || [''],
    constraints: editProject?.constraints || [''],
    dependencies: editProject?.dependencies || [''],
    
    // Quality & Compliance
    qualityStandards: editProject?.qualityStandards || '',
    complianceRequirements: editProject?.complianceRequirements || '',
    
    // Communication
    reportingFrequency: editProject?.reportingFrequency || 'weekly',
    communicationPlan: editProject?.communicationPlan || '',
    
    // Additional Fields
    department: editProject?.department || '',
    location: editProject?.location || '',
    timezone: editProject?.timezone || 'UTC',
    tags: editProject?.tags || [],
    customFields: editProject?.customFields || {}
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayFieldChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.projectName || !formData.projectCode || !formData.projectManager) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    onSave(formData);
    showToast(`Project ${editProject ? 'updated' : 'created'} successfully!`, 'success');
    onClose();
  };

  const generateProjectCode = () => {
    const code = formData.projectName
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .substring(0, 6) + '-' + Date.now().toString().slice(-4);
    handleInputChange('projectCode', code);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {editProject ? 'Edit Project' : 'Create New Project'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <Card title="Basic Information" icon={FileText}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Code *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.projectCode}
                    onChange={(e) => handleInputChange('projectCode', e.target.value)}
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                    required
                  />
                  <button
                    type="button"
                    onClick={generateProjectCode}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                >
                  <option value="waterfall">Waterfall</option>
                  <option value="agile">Agile</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="lean">Lean</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Stakeholders */}
          <Card title="Stakeholders" icon={Users}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Manager *
                </label>
                <input
                  type="text"
                  value={formData.projectManager}
                  onChange={(e) => handleInputChange('projectManager', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Sponsor
                </label>
                <input
                  type="text"
                  value={formData.projectSponsor}
                  onChange={(e) => handleInputChange('projectSponsor', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Owner
                </label>
                <input
                  type="text"
                  value={formData.businessOwner}
                  onChange={(e) => handleInputChange('businessOwner', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technical Lead
                </label>
                <input
                  type="text"
                  value={formData.technicalLead}
                  onChange={(e) => handleInputChange('technicalLead', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          </Card>

          {/* Timeline & Budget */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Timeline" icon={Calendar}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Planned Duration (weeks)
                  </label>
                  <input
                    type="number"
                    value={formData.plannedDuration}
                    onChange={(e) => handleInputChange('plannedDuration', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
            </Card>

            <Card title="Budget" icon={DollarSign}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Total Budget
                  </label>
                  <input
                    type="number"
                    value={formData.totalBudget}
                    onChange={(e) => handleInputChange('totalBudget', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Approved Budget
                  </label>
                  <input
                    type="number"
                    value={formData.approvedBudget}
                    onChange={(e) => handleInputChange('approvedBudget', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Currency
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          {/* Objectives & Scope */}
          <Card title="Objectives & Scope" icon={Target}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Objectives
                </label>
                {formData.projectObjectives.map((objective, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={objective}
                      onChange={(e) => handleArrayFieldChange('projectObjectives', index, e.target.value)}
                      className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                      placeholder={`Objective ${index + 1}`}
                    />
                    {formData.projectObjectives.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayField('projectObjectives', index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                      >
                        <Minus size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayField('projectObjectives')}
                  className="mt-2 px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md hover:bg-primary-200 dark:hover:bg-primary-900/50 flex items-center gap-1"
                >
                  <Plus size={14} />
                  Add Objective
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Scope
                </label>
                <textarea
                  value={formData.projectScope}
                  onChange={(e) => handleInputChange('projectScope', e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Out of Scope
                </label>
                <textarea
                  value={formData.outOfScope}
                  onChange={(e) => handleInputChange('outOfScope', e.target.value)}
                  rows={2}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          </Card>

          {/* Risk Management */}
          <Card title="Risk Management" icon={AlertTriangle}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Risk Level
                </label>
                <select
                  value={formData.riskLevel}
                  onChange={(e) => handleInputChange('riskLevel', e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assumptions
                </label>
                {formData.assumptions.map((assumption, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={assumption}
                      onChange={(e) => handleArrayFieldChange('assumptions', index, e.target.value)}
                      className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                      placeholder={`Assumption ${index + 1}`}
                    />
                    {formData.assumptions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayField('assumptions', index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                      >
                        <Minus size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayField('assumptions')}
                  className="mt-2 px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md hover:bg-primary-200 dark:hover:bg-primary-900/50 flex items-center gap-1"
                >
                  <Plus size={14} />
                  Add Assumption
                </button>
              </div>
            </div>
          </Card>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
            >
              <Save size={16} />
              {editProject ? 'Update Project' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreationForm;
