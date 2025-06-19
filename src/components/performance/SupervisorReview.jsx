
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import  button  from '../ui/button';
import { 
  Star, 
  MessageSquare, 
  CheckCircle, 
  Clock,
  AlertCircle,
  FileText,
  Send,
  Eye,
  UserCheck,
  Users,
  Calendar
} from 'lucide-react';
import { toast } from '../ui/sonner';

const SupervisorReview = () => {
  const [pendingReviews, setPendingReviews] = useState([
    {
      id: 1,
      employeeName: 'John Smith',
      employeeId: 'EMP001',
      cycleName: 'Q2 2025 Performance Review',
      selfAssessmentDate: '2025-01-10',
      reviewDueDate: '2025-01-20',
      status: 'Pending Review',
      goals: 3,
      completedGoals: 2,
      department: 'Engineering'
    },
    {
      id: 2,
      employeeName: 'Sarah Johnson',
      employeeId: 'EMP002',
      cycleName: 'Q2 2025 Performance Review',
      selfAssessmentDate: '2025-01-08',
      reviewDueDate: '2025-01-18',
      status: 'Review In Progress',
      goals: 4,
      completedGoals: 3,
      department: 'Design'
    }
  ]);

  const [activeReview, setActiveReview] = useState(null);
  const [reviewData, setReviewData] = useState({
    overallRating: 0,
    goalAchievement: 0,
    skillDevelopment: 0,
    collaboration: 0,
    innovation: 0,
    strengths: '',
    improvements: '',
    supervisorComments: '',
    recommendedActions: '',
    nextCycleGoals: '',
    finalRating: 0,
    agreed: false
  });

  const mockEmployeeAssessment = {
    overallRating: 4,
    goalAchievement: 4,
    skillDevelopment: 3,
    collaboration: 5,
    innovation: 4,
    strengths: 'Excellent problem-solving skills and technical expertise. Shows great initiative in learning new technologies.',
    improvements: 'Could work on time management and delegation skills.',
    challenges: 'Faced challenges with the legacy system migration but handled it well.',
    achievements: 'Successfully led the React migration project and mentored two junior developers.',
    futureGoals: 'Complete advanced leadership training and take on more project management responsibilities.',
    additionalComments: 'Looking forward to taking on more challenging projects.'
  };

  const ratingCategories = [
    { key: 'overallRating', label: 'Overall Performance', description: 'Rate overall performance this cycle' },
    { key: 'goalAchievement', label: 'Goal Achievement', description: 'How well did they achieve their set goals?' },
    { key: 'skillDevelopment', label: 'Skill Development', description: 'Rate their progress in developing new skills' },
    { key: 'collaboration', label: 'Team Collaboration', description: 'How effectively did they work with the team?' },
    { key: 'innovation', label: 'Innovation & Initiative', description: 'Rate their contribution to innovation and initiative' }
  ];

  const StarRating = ({ rating, onRatingChange, readonly = false, employeeRating = null }) => {
    return (
      <div className="flex space-x-1 items-center">
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
        </div>
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          Supervisor: ({rating}/5)
        </span>
        {employeeRating && (
          <span className="ml-4 text-sm text-blue-600 dark:text-blue-400">
            Employee: ({employeeRating}/5)
          </span>
        )}
      </div>
    );
  };

  const startReview = (review) => {
    setActiveReview(review);
  };

  const submitReview = () => {
    if (!reviewData.supervisorComments.trim()) {
      toast.error('Please add supervisor comments before submitting');
      return;
    }

    toast.success('Review completed successfully! Employee will be notified for discussion.');
    setActiveReview(null);
  };

  const updateRating = (category, rating) => {
    setReviewData({
      ...reviewData,
      [category]: rating
    });
  };

  const updateTextArea = (field, value) => {
    setReviewData({
      ...reviewData,
      [field]: value
    });
  };

  const scheduleDiscussion = () => {
    toast.success('Discussion meeting scheduled with employee');
  };

  if (activeReview) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Review - {activeReview.employeeName}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {activeReview.cycleName} • Employee ID: {activeReview.employeeId}
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              variant="outline"
              onClick={scheduleDiscussion}
            >
              <Calendar size={16} className="mr-2" />
              Schedule Discussion
            </button>
            <button 
              variant="outline" 
              onClick={() => setActiveReview(null)}
            >
              Back to List
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Employee Self-Assessment">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance Ratings</h4>
                {ratingCategories.map((category) => (
                  <div key={category.key} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {category.label}
                    </span>
                    <StarRating 
                      rating={mockEmployeeAssessment[category.key]}
                      readonly={true}
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Strengths</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mockEmployeeAssessment.strengths}
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Key Achievements</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mockEmployeeAssessment.achievements}
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Future Goals</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mockEmployeeAssessment.futureGoals}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Supervisor Review">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Performance Ratings</h4>
                {ratingCategories.map((category) => (
                  <div key={category.key} className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 last:border-b-0">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {category.label}
                    </h5>
                    <StarRating 
                      rating={reviewData[category.key]}
                      onRatingChange={(rating) => updateRating(category.key, rating)}
                      employeeRating={mockEmployeeAssessment[category.key]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card title="Supervisor Feedback">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Key Strengths Observed *
              </label>
              <textarea
                value={reviewData.strengths}
                onChange={(e) => updateTextArea('strengths', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Describe the key strengths you observed..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Areas for Development
              </label>
              <textarea
                value={reviewData.improvements}
                onChange={(e) => updateTextArea('improvements', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Areas where the employee can improve..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Supervisor Comments *
              </label>
              <textarea
                value={reviewData.supervisorComments}
                onChange={(e) => updateTextArea('supervisorComments', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="4"
                placeholder="Detailed feedback on performance, achievements, and recommendations..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recommended Actions
              </label>
              <textarea
                value={reviewData.recommendedActions}
                onChange={(e) => updateTextArea('recommendedActions', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Specific actions and development opportunities..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Goals for Next Cycle
              </label>
              <textarea
                value={reviewData.nextCycleGoals}
                onChange={(e) => updateTextArea('nextCycleGoals', e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Suggested goals for the next performance cycle..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Final Overall Rating
              </label>
              <StarRating 
                rating={reviewData.finalRating}
                onRatingChange={(rating) => updateRating('finalRating', rating)}
              />
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-3">
          <button variant="outline">
            Save Draft
          </button>
          <button onClick={submitReview}>
            <Send size={16} className="mr-2" />
            Complete Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Supervisor Review</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Review and evaluate employee performance assessments
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {pendingReviews.map((review) => (
          <Card key={review.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.employeeName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.department} • {review.employeeId}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                    review.status === 'Pending Review' 
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {review.status}
                  </span>
                </div>
                <div className="text-right">
                  {review.status === 'Pending Review' && (
                    <AlertCircle size={20} className="text-amber-500" />
                  )}
                  {review.status === 'Review In Progress' && (
                    <Clock size={20} className="text-blue-500" />
                  )}
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <FileText size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {review.cycleName}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Self-assessment: {new Date(review.selfAssessmentDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Review due: {new Date(review.reviewDueDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Goals Progress</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {review.completedGoals}/{review.goals} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ 
                        width: `${(review.completedGoals / review.goals) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => startReview(review)}
                >
                  <UserCheck size={14} className="mr-1" />
                  {review.status === 'Pending Review' ? 'Start Review' : 'Continue'}
                </button>
                
                <button variant="outline" size="sm">
                  <Eye size={14} className="mr-1" />
                  Preview
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupervisorReview;
