
import React from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pmo = () => {
  return (
    <AppLayout>
      <div className="container px-6 mx-auto">
        <PageHeader 
          title="PMO / Execution" 
          description="Program Management Office - Track project execution and resource allocation"
        />
        
        <Tabs defaultValue="delivery" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="delivery">Delivery Status</TabsTrigger>
            <TabsTrigger value="resources">Resource Allocation</TabsTrigger>
            <TabsTrigger value="updates">Weekly Updates</TabsTrigger>
            <TabsTrigger value="risks">Risks & Blockers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="delivery">
            <Card title="Project Delivery Status">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deadline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {/* Sample data rows */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Website Redesign</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Acme Corporation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">June 30, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          On Track
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-xs mt-1 block">75%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Mobile App Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Tech Innovators</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">August 15, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          At Risk
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <span className="text-xs mt-1 block">45%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <Card title="Resource Allocation Board">
              <div className="space-y-4">
                {/* Resource allocation visualization would go here */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                  Resource allocation board placeholder
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="updates">
            <Card title="Weekly Update Submission">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Submit weekly project updates for management review
              </p>
              <div className="space-y-4">
                {/* Weekly update form would go here */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
                  Weekly update submission form placeholder
                </div>
              </div>
            </Card>
            
            <div className="mt-6">
              <Card title="Recent Updates">
                <div className="space-y-4">
                  {/* List of recent updates would go here */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <h4 className="font-semibold">Website Redesign - Week 12</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Submitted by: John Doe on May 5, 2025
                    </p>
                    <p className="mt-2">
                      Completed the homepage redesign and navigation menu. Started work on responsive views.
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <h4 className="font-semibold">Mobile App Development - Week 8</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Submitted by: Jane Smith on May 4, 2025
                    </p>
                    <p className="mt-2">
                      Authentication module implemented. Facing issues with API integration that may delay delivery.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="risks">
            <Card title="Risks & Blockers Log">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Issue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Severity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {/* Sample data rows */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Mobile App Development</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">API integration failing due to authentication issues</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          High
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Tech Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Open</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Website Redesign</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Client feedback on design pending for 3 days</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          Medium
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Project Manager</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Pmo;
