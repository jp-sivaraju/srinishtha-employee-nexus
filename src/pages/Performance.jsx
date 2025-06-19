
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  button  from '../components/ui/button';
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
import PerformanceMetrics from '../components/performance/PerformanceMetrics';
import PerformanceFeedback from '../components/performance/PerformanceFeedback';
import PerformanceGoals from '../components/performance/PerformanceGoals';
import TeamPerformance from '../components/performance/TeamPerformance';
import PerformanceSummary from '../components/performance/PerformanceSummary';
import AppraisalCycles from '../components/performance/AppraisalCycles';
import GoalManagement from '../components/performance/GoalManagement';
import SelfAssessment from '../components/performance/SelfAssessment';
import SupervisorReview from '../components/performance/SupervisorReview';
import MonthlyPerformanceDashboard from '../components/performance/MonthlyPerformanceDashboard';

const Performance = () => {
  const [activeTab, setActiveTab] = useState('monthly-reviews');

  return (
    <AppLayout>
      <div className="container px-6 mx-auto">
        <PageHeader 
          title="Performance Management System" 
          description="Comprehensive performance tracking with appraisal cycles, goals, and reviews"
          withParallax={true}
        />
        
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <Tabs 
            defaultValue="monthly-reviews" 
            className="w-full" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6">
              <TabsTrigger value="monthly-reviews" className="flex items-center gap-2">
                <FileText size={16} />
                <span>Monthly Reviews</span>
              </TabsTrigger>
              <TabsTrigger value="cycles" className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Appraisal Cycles</span>
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target size={16} />
                <span>Goal Management</span>
              </TabsTrigger>
              <TabsTrigger value="self-assessment" className="flex items-center gap-2">
                <UserCheck size={16} />
                <span>Self Assessment</span>
              </TabsTrigger>
              <TabsTrigger value="supervisor-review" className="flex items-center gap-2">
                <AlertCircle size={16} />
                <span>Supervisor Review</span>
              </TabsTrigger>
              <TabsTrigger value="individual" className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>Individual Metrics</span>
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users size={16} />
                <span>Team Overview</span>
              </TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>Feedback</span>
              </TabsTrigger>
              <TabsTrigger value="summary" className="flex items-center gap-2">
                <BarChart2 size={16} />
                <span>Performance Summary</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly-reviews">
              <MonthlyPerformanceDashboard />
            </TabsContent>
            
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
      </div>
    </AppLayout>
  );
};

export default Performance;
