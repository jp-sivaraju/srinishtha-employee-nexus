
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '../components/ui/button';
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
  Star
} from 'lucide-react';
import PerformanceMetrics from '../components/performance/PerformanceMetrics';
import PerformanceFeedback from '../components/performance/PerformanceFeedback';
import PerformanceGoals from '../components/performance/PerformanceGoals';
import TeamPerformance from '../components/performance/TeamPerformance';
import PerformanceSummary from '../components/performance/PerformanceSummary';

const Performance = () => {
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <AppLayout>
      <div className="container px-6 mx-auto">
        <PageHeader 
          title="Performance Tracker" 
          description="Track, manage, and review employee performance metrics"
          withParallax={true}
        />
        
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <Tabs 
            defaultValue="individual" 
            className="w-full" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6">
              <TabsTrigger value="individual" className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>Individual View</span>
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users size={16} />
                <span>Team Overview</span>
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target size={16} />
                <span>Goals & OKRs</span>
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
            
            <TabsContent value="individual">
              <PerformanceMetrics />
            </TabsContent>
            
            <TabsContent value="team">
              <TeamPerformance />
            </TabsContent>
            
            <TabsContent value="goals">
              <PerformanceGoals />
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
