
import React from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Performance = () => {
  return (
    <AppLayout>
      <div className="container px-6 mx-auto">
        <PageHeader 
          title="Performance Tracker" 
          description="Track, manage, and review employee performance metrics"
        />
        
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="individual">Individual View</TabsTrigger>
            <TabsTrigger value="team">Team Overview</TabsTrigger>
            <TabsTrigger value="summary">Performance Summary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual">
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <Card title="Self Rating">
                <p className="text-gray-600 dark:text-gray-400">
                  Rate your performance across different parameters for the current period.
                </p>
                <div className="mt-4 space-y-4">
                  {/* Rating form would go here */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                    Self-rating form placeholder
                  </div>
                </div>
              </Card>
              
              <Card title="Assessor Rating">
                <p className="text-gray-600 dark:text-gray-400">
                  Your performance rating as assessed by your manager/assessor.
                </p>
                <div className="mt-4 space-y-4">
                  {/* Assessor ratings would go here */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                    Assessor rating display placeholder
                  </div>
                </div>
              </Card>
            </div>
            
            <Card title="Performance Notes & Comments">
              <div className="space-y-4">
                {/* Notes section would go here */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                  Performance notes and comments placeholder
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card title="Team Performance Overview">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {/* Sample data rows */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Website Redesign</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">4.5/5</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <button className="text-primary-500 hover:text-primary-700">View</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Jane Smith</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Mobile App Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">3.8/5</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <button className="text-primary-500 hover:text-primary-700">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="summary">
            <Card title="Performance Summary">
              <div className="space-y-4">
                {/* Summary charts/graphs would go here */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                  Performance summary charts placeholder
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Performance;
