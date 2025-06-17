
import React, { useState } from 'react';
import { Plus, Workflow } from 'lucide-react';
import ProjectCreationForm from './ProjectCreationForm';
import ProjectImportExportWorkflow from './ProjectImportExportWorkflow';
import PMOWorkflowStats from './pmo/PMOWorkflowStats';
import PMOQuickActions from './pmo/PMOQuickActions';
import PMORecentActivities from './pmo/PMORecentActivities';
import { useToast } from '@/hooks/use-toast';


const PMOWorkflowDashboard = () => {
  const { showToast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showImportExport, setShowImportExport] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleProjectSave = (projectData) => {
    console.log('Saving project:', projectData);
    showToast('Project saved successfully!', 'success');
    setShowCreateForm(false);
    setEditProject(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">PMO Workflow Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage project workflows, creation, and data operations</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowImportExport(true)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Workflow size={16} />
            Import/Export
          </button>
          <button 
            onClick={() => setShowCreateForm(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
          >
            <Plus size={16} />
            New Project
          </button>
        </div>
      </div>

      <PMOWorkflowStats />
      
      <PMOQuickActions 
        onCreateProject={() => setShowCreateForm(true)}
        onShowImportExport={() => setShowImportExport(true)}
      />
      
      <PMORecentActivities />

      {/* Modals */}
      {showCreateForm && (
        <ProjectCreationForm
          onClose={() => {
            setShowCreateForm(false);
            setEditProject(null);
          }}
          onSave={handleProjectSave}
          editProject={editProject}
        />
      )}

      {showImportExport && (
        <ProjectImportExportWorkflow
          onClose={() => setShowImportExport(false)}
        />
      )}
    </div>
  );
};

export default PMOWorkflowDashboard;
