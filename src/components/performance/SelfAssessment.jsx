
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { 
  Star, 
  MessageSquare, 
  CheckCircle, 
  Clock,
  AlertCircle,
  FileText,
  Send,
  Save
} from 'lucide-react';
import { toast } from '../ui/sonner';

const SelfAssessment = () => {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      cycleName: 'Q2 2025 Performance Review',
      cycleId: 1,
      status: 'In Progress',
      dueDate: '2025-06-25',
      completedSections: 2,
      totalSections: 5,
      lastSaved: '2025-01-12'
    }
  ]);

  const [activeAssessment, setActiveAssessment] = useState(null);
  const [assessmentData, setAssessmentData] = useState({
    overallRating: 0,
    goalAchievement: 0,
    skillDevelopment: 0,
    collaboration: 0,
    innovation: 0,
    strengths: '',
    improvements: '',
    challenges: '',
    achievements: '',
    futureGoals: '',
    additionalComments: ''
  });

  const ratingCategories = [
    { key: 'overallRating', label: 'Overall Performance', description: 'Rate your overall performance this cycle' },
    { key: 'goalAchievement', label: 'Goal Achievement', description: 'How well did you achieve your set goals?' },
    { key: 'skillDevelopment', label: 'Skill Development', description: 'Rate your progress in developing new skills' },
    { key: 'collaboration', label: 'Team Collaboration', description: 'How effectively did you work with your team?' },
    { key: 'innovation', label: 'Innovation & Initiative', description: 'Rate your contribution to innovation and taking initiative' }
  ];

  const StarRating = ({ rating, onRatingChange, readonly = false }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            onClick={() => !readonly && onRatingChange(star)}
            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} ${!readonly ? 'hover:text-yellow-400 cursor-pointer' : 'cursor-default'}`}
          >
            <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          ({rating}/5)
        </span>
      </div>
    );
  };

  const startAssessment = (assessment) => {
    setActiveAssessment(assessment);
  };

  const saveAssessment = () => {
    toast.success('Assessment saved as draft');
  };

  const submitAssessment = () => {
    const requiredFields = ['strengths', 'achievements', 'futureGoals'];
    const missingFields = requiredFields.filter(field => !assessmentData[field].trim());
    
    if (missingFields.length > 0) {
      toast.error('Please complete all required sections before submitting');
      return;
    }

    toast.success('Self-assessment submitted successfully! Your supervisor will be notified.');
    setActiveAssessment(null);
  };

  const updateRating = (category, rating) => {
    setAssessmentData({
      ...assessmentData,
      [category]: rating
    });
  };

  const updateTextArea = (field, value) => {
    setAssessmentData({
      ...assessmentData,
      [field]: value
    });
  };

  if (activeAssessment) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Self Assessment - {activeAssessment.cycleName}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Complete your self-assessment for this performance cycle
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setActiveAssessment(null)}
          >
            Back to List
          </Button>
        </div>

        <Card title="Performance Ratings">
          <div className="space-y-6">
            {ratingCategories.map((category) => (
              <div key={category.key} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {category.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {category.description}
                </p>
                <StarRating 
                  rating={assessmentData[category.key]}
                  onRatingChange={(rating) => updateRating(category.key, rating)}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card title="Self-Reflection">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Key Strengths *
              </label>
              <textarea
                value={assessmentData.strengths}
                onChange={(e) => updateTextArea('strengths', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="Describe your key strengths demonstrated during this cycle..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Areas for Improvement
              </label>
              <textarea
                value={assessmentData.improvements}
                onChange={(e) => updateTextArea('improvements', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="What areas would you like to improve in the next cycle?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Challenges Faced
              </label>
              <textarea
                value={assessmentData.challenges}
                onChange={(e) => updateTextArea('challenges', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="Describe any challenges you faced and how you addressed them..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Key Achievements *
              </label>
              <textarea
                value={assessmentData.achievements}
                onChange={(e) => updateTextArea('achievements', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="List your major achievements and contributions during this cycle..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Future Goals *
              </label>
              <textarea
                value={assessmentData.futureGoals}
                onChange={(e) => updateTextArea('futureGoals', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="What goals would you like to set for the next performance cycle?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Comments
              </label>
              <textarea
                value={assessmentData.additionalComments}
                onChange={(e) => updateTextArea('additionalComments', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Any additional comments or feedback..."
              />
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={saveAssessment}>
            <Save size={16} className="mr-2" />
            Save Draft
          </Button>
          <Button onClick={submitAssessment}>
            <Send size={16} className="mr-2" />
            Submit Assessment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Self Assessment</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Complete your self-assessment for active performance cycles
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
          <Card key={assessment.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {assessment.cycleName}
                  </h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                    assessment.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : assessment.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  }`}>
                    {assessment.status}
                  </span>
                </div>
                <div className="text-right">
                  {assessment.status === 'In Progress' && (
                    <Clock size={20} className="text-amber-500" />
                  )}
                  {assessment.status === 'Completed' && (
                    <CheckCircle size={20} className="text-green-500" />
                  )}
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Due: {new Date(assessment.dueDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {assessment.completedSections}/{assessment.totalSections} sections
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ 
                        width: `${(assessment.completedSections / assessment.totalSections) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
                
                {assessment.lastSaved && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Last saved: {new Date(assessment.lastSaved).toLocaleDateString()}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => startAssessment(assessment)}
                >
                  <FileText size={14} className="mr-1" />
                  {assessment.status === 'Completed' ? 'View' : 'Continue'}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelfAssessment;
