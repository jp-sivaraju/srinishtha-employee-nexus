
import React from 'react';
import { Card } from '@/components/ui/card';
import MonthSelector from './MonthSelector';
import PerformanceFilters from './PerformanceFilters';
import EmployeePerformanceTable from './EmployeePerformanceTable';
import MonthlyReviewModal from './MonthlyReviewModal';
import useMonthlyPerformance from './useMonthlyPerformance';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const MonthlyPerformanceDashboard = () => {
  const {
    reviews,
    currentUser,
    filters,
    setFilters,
    selectedReview,
    isModalOpen,
    departments,
    statuses,
    updateReview,
    submitReview,
    approveReview,
    openReviewModal,
    closeReviewModal
  } = useMonthlyPerformance();

  // Calculate stats
  const stats = {
    total: reviews.length,
    completed: reviews.filter(r => r.status === 'completed').length,
    pending: reviews.filter(r => r.status === 'pending_review').length,
    draft: reviews.filter(r => r.status === 'draft').length
  };

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Monthly Performance Reviews
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track and manage monthly performance assessments
          </p>
        </div>
        <MonthSelector
          value={filters.month}
          onChange={(month) => setFilters(prev => ({ ...prev, month }))}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Reviews
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.total}
              </p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Completed
              </p>
              <p className="text-2xl font-bold text-green-600">
                {stats.completed}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Pending Review
              </p>
              <p className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Completion Rate
              </p>
              <p className="text-2xl font-bold text-primary">
                {completionRate}%
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <PerformanceFilters
        filters={filters}
        setFilters={setFilters}
        departments={departments}
        statuses={statuses}
      />

      {/* Reviews Table */}
      <Card className="p-6">
        <EmployeePerformanceTable
          reviews={reviews}
          currentUser={currentUser}
          onViewReview={openReviewModal}
          onEditReview={openReviewModal}
        />
      </Card>

      {/* Review Modal */}
      <MonthlyReviewModal
        isOpen={isModalOpen}
        onClose={closeReviewModal}
        review={selectedReview}
        currentUser={currentUser}
        onUpdateReview={updateReview}
        onSubmitReview={submitReview}
        onApproveReview={approveReview}
      />
    </div>
  );
};

export default MonthlyPerformanceDashboard;
