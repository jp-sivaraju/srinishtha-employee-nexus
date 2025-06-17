
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import RatingSelector from './RatingSelector';
import StatusBadge from './StatusBadge';
import { Save, Send, CheckCircle } from 'lucide-react';

const MonthlyReviewModal = ({ 
  isOpen, 
  onClose, 
  review, 
  currentUser, 
  onUpdateReview, 
  onSubmitReview, 
  onApproveReview 
}) => {
  const [formData, setFormData] = useState({
    selfRating: null,
    selfComments: '',
    managerRating: null,
    managerComments: '',
    goals: [],
    achievements: []
  });

  useEffect(() => {
    if (review) {
      setFormData({
        selfRating: review.selfRating || null,
        selfComments: review.selfComments || '',
        managerRating: review.managerRating || null,
        managerComments: review.managerComments || '',
        goals: review.goals || [],
        achievements: review.achievements || []
      });
    }
  }, [review]);

  if (!review) return null;

  const handleSave = () => {
    onUpdateReview(review.id, formData);
  };

  const handleSubmit = () => {
    onUpdateReview(review.id, formData);
    onSubmitReview(review.id);
  };

  const handleApprove = () => {
    onApproveReview(review.id, formData.managerRating, formData.managerComments);
    onClose();
  };

  const canEditSelf = currentUser.role === 'employee' && 
    review.employeeId === currentUser.employeeId && 
    review.status === 'draft';

  const canEditManager = (currentUser.role === 'manager' || currentUser.role === 'admin') && 
    review.status === 'pending_review';

  const isReadOnly = !canEditSelf && !canEditManager;

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Performance Review - {review.employeeName}</span>
            <StatusBadge status={review.status} />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Employee Information */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <Label className="text-sm font-medium">Employee</Label>
              <p className="text-sm">{review.employeeName}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Department</Label>
              <p className="text-sm">{review.department}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Position</Label>
              <p className="text-sm">{review.position}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Review Period</Label>
              <p className="text-sm">
                {new Date(review.month + '-01').toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>

          {/* Goals and Achievements */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Monthly Goals</Label>
              <ul className="mt-2 space-y-1">
                {review.goals.map((goal, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    • {goal}
                  </li>
                ))}
              </ul>
            </div>
            
            {formData.achievements.length > 0 && (
              <div>
                <Label className="text-sm font-medium">Key Achievements</Label>
                <ul className="mt-2 space-y-1">
                  {formData.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Separator />

          {/* Self Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Self Assessment</h3>
            
            <div>
              <Label className="text-sm font-medium">Self Rating</Label>
              <div className="mt-2">
                <RatingSelector
                  value={formData.selfRating}
                  onChange={(rating) => setFormData(prev => ({ ...prev, selfRating: rating }))}
                  disabled={!canEditSelf}
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Self Comments</Label>
              <Textarea
                value={formData.selfComments}
                onChange={(e) => setFormData(prev => ({ ...prev, selfComments: e.target.value }))}
                placeholder="Share your thoughts on your performance this month..."
                className="mt-2"
                rows={4}
                disabled={!canEditSelf}
              />
            </div>
          </div>

          <Separator />

          {/* Manager Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Manager Assessment</h3>
            
            <div>
              <Label className="text-sm font-medium">Manager Rating</Label>
              <div className="mt-2">
                <RatingSelector
                  value={formData.managerRating}
                  onChange={(rating) => setFormData(prev => ({ ...prev, managerRating: rating }))}
                  disabled={!canEditManager}
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Manager Comments</Label>
              <Textarea
                value={formData.managerComments}
                onChange={(e) => setFormData(prev => ({ ...prev, managerComments: e.target.value }))}
                placeholder="Provide feedback on the employee's performance..."
                className="mt-2"
                rows={4}
                disabled={!canEditManager}
              />
            </div>
          </div>

          {/* Timestamps */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
            <div>
              <Label className="text-xs font-medium text-gray-500">Last Updated</Label>
              <p>{formatDate(review.lastUpdated)}</p>
            </div>
            <div>
              <Label className="text-xs font-medium text-gray-500">Submitted</Label>
              <p>{formatDate(review.submittedAt)}</p>
            </div>
            <div>
              <Label className="text-xs font-medium text-gray-500">Reviewed</Label>
              <p>{formatDate(review.reviewedAt)}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            
            {canEditSelf && (
              <>
                <Button variant="outline" onClick={handleSave}>
                  <Save size={16} className="mr-2" />
                  Save Draft
                </Button>
                <Button onClick={handleSubmit}>
                  <Send size={16} className="mr-2" />
                  Submit for Review
                </Button>
              </>
            )}
            
            {canEditManager && (
              <Button onClick={handleApprove}>
                <CheckCircle size={16} className="mr-2" />
                Approve Review
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MonthlyReviewModal;
