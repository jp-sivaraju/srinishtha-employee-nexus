
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StatusBadge from './StatusBadge';
import RatingSelector from './RatingSelector';
import { Edit, Eye } from 'lucide-react';

const EmployeePerformanceTable = ({ 
  reviews, 
  currentUser, 
  onViewReview, 
  onEditReview 
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const canEdit = (review) => {
    if (currentUser.role === 'admin') return true;
    if (currentUser.role === 'manager') return true;
    if (currentUser.role === 'employee' && review.employeeId === currentUser.employeeId) {
      return review.status === 'draft';
    }
    return false;
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Self Rating</TableHead>
            <TableHead>Manager Rating</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                No performance reviews found for the selected criteria.
              </TableCell>
            </TableRow>
          ) : (
            reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{review.employeeName}</div>
                    <div className="text-sm text-gray-500">{review.position}</div>
                  </div>
                </TableCell>
                <TableCell>{review.department}</TableCell>
                <TableCell>
                  <StatusBadge status={review.status} />
                </TableCell>
                <TableCell>
                  {review.selfRating ? (
                    <RatingSelector value={review.selfRating} disabled />
                  ) : (
                    <span className="text-gray-400">Not rated</span>
                  )}
                </TableCell>
                <TableCell>
                  {review.managerRating ? (
                    <RatingSelector value={review.managerRating} disabled />
                  ) : (
                    <span className="text-gray-400">Not rated</span>
                  )}
                </TableCell>
                <TableCell>
                  <span className="text-sm text-gray-500">
                    {formatDate(review.lastUpdated)}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onViewReview(review)}
                    >
                      <Eye size={16} />
                    </Button>
                    {canEdit(review) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEditReview(review)}
                      >
                        <Edit size={16} />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeePerformanceTable;
