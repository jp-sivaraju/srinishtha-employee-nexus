
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart2, 
  CheckCircle, 
  FileText, 
  MessageCircle, 
  Target, 
  TrendingUp,
  Clock,
  Calendar,
  Users,
  Star,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import PerformanceMetrics from '../performance/PerformanceMetrics';
import PerformanceFeedback from '../performance/PerformanceFeedback';
import PerformanceGoals from '../performance/PerformanceGoals';
import TeamPerformance from '../performance/TeamPerformance';
import PerformanceSummary from '../performance/PerformanceSummary';
import AppraisalCycles from '../performance/AppraisalCycles';
import GoalManagement from '../performance/GoalManagement';
import SelfAssessment from '../performance/SelfAssessment';
import SupervisorReview from '../performance/SupervisorReview';

const PerformanceManagement = () => {
  const [activeTab, setActiveTab] = useState('cycles');

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Performance Management System
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive performance tracking with appraisal cycles, goals, and reviews
        </p>
      </div>
      
      <Tabs 
        defaultValue="cycles" 
        className="w-full" 
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-6 grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="cycles" className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="hidden sm:inline">Appraisal Cycles</span>
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex items-center gap-2">
            <Target size={16} />
            <span className="hidden sm:inline">Goal Management</span>
          </TabsTrigger>
          <TabsTrigger value="self-assessment" className="flex items-center gap-2">
            <UserCheck size={16} />
            <span className="hidden sm:inline">Self Assessment</span>
          </TabsTrigger>
          <TabsTrigger value="supervisor-review" className="flex items-center gap-2">
            <AlertCircle size={16} />
            <span className="hidden sm:inline">Supervisor Review</span>
          </TabsTrigger>
          <TabsTrigger value="individual" className="flex items-center gap-2">
            <TrendingUp size={16} />
            <span className="hidden sm:inline">Individual Metrics</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center gap-2">
            <Users size={16} />
            <span className="hidden sm:inline">Team Overview</span>
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Feedback</span>
          </TabsTrigger>
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <BarChart2 size={16} />
            <span className="hidden sm:inline">Summary</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cycles">
          <AppraisalCycles />
        </TabsContent>
        
        <TabsContent value="goals">
          <GoalManagement />
        </TabsContent>
        
        <TabsContent value="self-assessment">
          <SelfAssessment />
        </TabsContent>
        
        <TabsContent value="supervisor-review">
          <SupervisorReview />
        </TabsContent>
        
        <TabsContent value="individual">
          <PerformanceMetrics />
        </TabsContent>
        
        <TabsContent value="team">
          <TeamPerformance />
        </TabsContent>
        
        <TabsContent value="feedback">
          <PerformanceFeedback />
        </TabsContent>
        
        <TabsContent value="summary">
          <PerformanceSummary />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceManagement;
