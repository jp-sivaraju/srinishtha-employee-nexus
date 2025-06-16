
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const useMonthlyPerformance = () => {
  const { toast } = useToast();
  
  // Mock data - in a real app this would come from an API
  const [reviews, setReviews] = useState([
    {
      id: 1,
      employeeId: 'EMP001',
      employeeName: 'Sarah Johnson',
      department: 'Engineering',
      position: 'Senior Developer',
      month: '2025-06',
      year: 2025,
      status: 'completed',
      selfRating: 4,
      managerRating: 4,
      selfComments: 'Great month with successful project delivery and team collaboration.',
      managerComments: 'Excellent performance, exceeded expectations on the new feature implementation.',
      goals: ['Complete API refactoring', 'Mentor junior developers'],
      achievements: ['Led successful product launch', 'Improved code coverage by 15%'],
      lastUpdated: '2025-06-15T10:30:00Z',
      submittedAt: '2025-06-14T16:45:00Z',
      reviewedAt: '2025-06-15T10:30:00Z'
    },
    {
      id: 2,
      employeeId: 'EMP002',
      employeeName: 'Michael Chen',
      department: 'Design',
      position: 'UX Designer',
      month: '2025-06',
      year: 2025,
      status: 'pending_review',
      selfRating: 5,
      managerRating: null,
      selfComments: 'Delivered all design projects on time and received positive feedback from stakeholders.',
      managerComments: '',
      goals: ['Redesign user onboarding', 'Create design system components'],
      achievements: ['Improved user satisfaction by 20%', 'Created comprehensive style guide'],
      lastUpdated: '2025-06-12T14:20:00Z',
      submittedAt: '2025-06-12T14:20:00Z',
      reviewedAt: null
    },
    {
      id: 3,
      employeeId: 'EMP003',
      employeeName: 'Emily Rodriguez',
      department: 'Marketing',
      position: 'Marketing Manager',
      month: '2025-06',
      year: 2025,
      status: 'draft',
      selfRating: null,
      managerRating: null,
      selfComments: '',
      managerComments: '',
      goals: ['Launch Q2 campaign', 'Increase social media engagement'],
      achievements: [],
      lastUpdated: '2025-06-01T09:00:00Z',
      submittedAt: null,
      reviewedAt: null
    }
  ]);

  const [currentUser] = useState({
    id: 'USER001',
    role: 'manager', // 'employee', 'manager', 'admin'
    employeeId: 'EMP001',
    name: 'Current User'
  });

  const [filters, setFilters] = useState({
    department: 'all',
    status: 'all',
    month: '2025-06'
  });

  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter reviews based on current filters and user role
  const filteredReviews = reviews.filter(review => {
    if (currentUser.role === 'employee' && review.employeeId !== currentUser.employeeId) {
      return false;
    }
    
    if (filters.department !== 'all' && review.department !== filters.department) {
      return false;
    }
    
    if (filters.status !== 'all' && review.status !== filters.status) {
      return false;
    }
    
    if (filters.month && review.month !== filters.month) {
      return false;
    }
    
    return true;
  });

  const departments = [...new Set(reviews.map(r => r.department))];
  const statuses = ['draft', 'pending_review', 'completed'];

  const updateReview = (reviewId, updates) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            ...updates, 
            lastUpdated: new Date().toISOString(),
            status: updates.selfRating && updates.selfComments ? 'pending_review' : 'draft'
          }
        : review
    ));
    
    toast({
      title: "Success",
      description: "Review updated successfully",
    });
  };

  const submitReview = (reviewId) => {
    const review = reviews.find(r => r.id === reviewId);
    if (!review.selfRating || !review.selfComments) {
      toast({
        title: "Error",
        description: "Please complete self-rating and comments before submitting",
        variant: "destructive",
      });
      return;
    }

    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            status: 'pending_review',
            submittedAt: new Date().toISOString()
          }
        : review
    ));
    
    toast({
      title: "Success",
      description: "Review submitted for manager approval",
    });
  };

  const approveReview = (reviewId, managerRating, managerComments) => {
    if (currentUser.role !== 'manager' && currentUser.role !== 'admin') {
      toast({
        title: "Error",
        description: "You don't have permission to approve reviews",
        variant: "destructive",
      });
      return;
    }

    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            status: 'completed',
            managerRating,
            managerComments,
            reviewedAt: new Date().toISOString()
          }
        : review
    ));
    
    toast({
      title: "Success",
      description: "Review approved successfully",
    });
  };

  const openReviewModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeReviewModal = () => {
    setSelectedReview(null);
    setIsModalOpen(false);
  };

  return {
    reviews: filteredReviews,
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
  };
};

export default useMonthlyPerformance;
