
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const useAppraisalCycles = () => {
  const { toast } = useToast();
  
  const [cycles, setCycles] = useState([
    {
      id: 1,
      name: 'Q2 2025 Performance Review',
      type: 'Quarterly',
      startDate: '2025-04-01',
      endDate: '2025-06-30',
      status: 'Active',
      participants: 24,
      completedReviews: 8,
      stage: 'Goal Setting',
      description: 'Q2 quarterly performance appraisal focusing on product development goals',
      template: 'Standard Quarterly',
      departments: ['Engineering', 'Design', 'Product'],
      notificationsEnabled: true,
      autoReminders: true
    },
    {
      id: 2,
      name: 'Annual Review 2024',
      type: 'Annual',
      startDate: '2024-12-01',
      endDate: '2025-01-31',
      status: 'Completed',
      participants: 45,
      completedReviews: 45,
      stage: 'Closed',
      description: 'Comprehensive annual performance review for all departments',
      template: 'Comprehensive Annual',
      departments: ['All Departments'],
      notificationsEnabled: true,
      autoReminders: true
    },
    {
      id: 3,
      name: 'Mid-Year Assessment',
      type: 'Half-yearly',
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      status: 'Planned',
      participants: 0,
      completedReviews: 0,
      stage: 'Planning',
      description: 'Mid-year performance assessment and goal adjustment',
      template: 'Mid-Year Check-in',
      departments: ['Engineering', 'Sales', 'Marketing'],
      notificationsEnabled: false,
      autoReminders: false
    }
  ]);

  const [newCycle, setNewCycle] = useState({
    name: '',
    type: 'Quarterly',
    startDate: '',
    endDate: '',
    description: '',
    template: 'Standard Quarterly',
    departments: [],
    notificationsEnabled: true,
    autoReminders: true
  });

  const templates = [
    'Standard Quarterly',
    'Comprehensive Annual',
    'Mid-Year Check-in',
    'Monthly Sprint Review',
    'Probationary Review',
    'Leadership Assessment',
    'Custom Template'
  ];

  const departmentsList = [
    'Engineering',
    'Design',
    'Product',
    'Sales',
    'Marketing',
    'HR',
    'Finance',
    'Operations',
    'Customer Success'
  ];

  const handleCreateCycle = () => {
    if (!newCycle.name || !newCycle.startDate || !newCycle.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (newCycle.departments.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one department",
        variant: "destructive",
      });
      return;
    }

    const cycle = {
      id: cycles.length + 1,
      ...newCycle,
      status: 'Planned',
      participants: 0,
      completedReviews: 0,
      stage: 'Planning'
    };

    setCycles([...cycles, cycle]);
    setNewCycle({
      name: '',
      type: 'Quarterly',
      startDate: '',
      endDate: '',
      description: '',
      template: 'Standard Quarterly',
      departments: [],
      notificationsEnabled: true,
      autoReminders: true
    });
    toast({
      title: "Success",
      description: "Appraisal cycle created successfully",
    });
    return true; // Indicates successful creation
  };

  const startCycle = (cycleId) => {
    setCycles(cycles.map(cycle => 
      cycle.id === cycleId 
        ? { ...cycle, status: 'Active', stage: 'Goal Setting' }
        : cycle
    ));
    toast({
      title: "Success",
      description: "Appraisal cycle started",
    });
  };

  const duplicateCycle = (cycle) => {
    const duplicated = {
      ...cycle,
      id: cycles.length + 1,
      name: `${cycle.name} (Copy)`,
      status: 'Planned',
      stage: 'Planning',
      participants: 0,
      completedReviews: 0
    };
    setCycles([...cycles, duplicated]);
    toast({
      title: "Success",
      description: "Cycle duplicated successfully",
    });
  };

  const archiveCycle = (cycleId) => {
    setCycles(cycles.map(cycle => 
      cycle.id === cycleId 
        ? { ...cycle, status: 'Archived' }
        : cycle
    ));
    toast({
      title: "Success",
      description: "Cycle archived",
    });
  };

  const sendReminders = (cycleId) => {
    toast({
      title: "Success",
      description: "Reminders sent to all participants",
    });
  };

  return {
    cycles,
    newCycle,
    setNewCycle,
    templates,
    departmentsList,
    handleCreateCycle,
    startCycle,
    duplicateCycle,
    archiveCycle,
    sendReminders
  };
};

export default useAppraisalCycles;
