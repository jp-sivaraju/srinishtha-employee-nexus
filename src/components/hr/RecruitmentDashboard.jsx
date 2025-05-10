
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import ModernButton from '../ui/ModernButton';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';
import { Plus, FileText, UserCheck, Calendar } from 'lucide-react';
import { Progress } from '../ui/progress';

const mockJobOpenings = [
  { id: 1, title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', applicants: 24, status: 'Open', stage: 'Interviewing' },
  { id: 2, title: 'Product Designer', department: 'Design', location: 'London', applicants: 18, status: 'Open', stage: 'Screening' },
  { id: 3, title: 'HR Manager', department: 'Human Resources', location: 'New York', applicants: 12, status: 'Open', stage: 'Final Interviews' },
  { id: 4, title: 'Marketing Specialist', department: 'Marketing', location: 'Singapore', applicants: 16, status: 'Open', stage: 'Screening' },
];

const RecruitmentDashboard = () => {
  return (
    <GlassContainer className="p-6">
      <div className="flex justify-between items-center mb-6">
        <GradientText as="h2" className="text-2xl font-semibold" gradient="night-owl">
          Recruitment Dashboard
        </GradientText>
        <ModernButton variant="glow" iconLeft={<Plus size={16} />} withGlow>
          Post New Job
        </ModernButton>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg">
          <div className="flex items-center mb-2">
            <div className="bg-primary-400/30 p-2 rounded-md mr-3">
              <FileText size={18} className="text-primary-100" />
            </div>
            <span className="text-primary-100 text-sm">Open Positions</span>
          </div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-primary-200 mt-2">+3 since last month</div>
        </div>
        
        <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg">
          <div className="flex items-center mb-2">
            <div className="bg-primary-400/30 p-2 rounded-md mr-3">
              <UserCheck size={18} className="text-primary-100" />
            </div>
            <span className="text-primary-100 text-sm">Applications</span>
          </div>
          <div className="text-2xl font-bold text-white">86</div>
          <div className="text-xs text-primary-200 mt-2">+24 since last week</div>
        </div>
        
        <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg">
          <div className="flex items-center mb-2">
            <div className="bg-primary-400/30 p-2 rounded-md mr-3">
              <Calendar size={18} className="text-primary-100" />
            </div>
            <span className="text-primary-100 text-sm">Interviews Scheduled</span>
          </div>
          <div className="text-2xl font-bold text-white">32</div>
          <div className="text-xs text-primary-200 mt-2">8 upcoming this week</div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockJobOpenings.map(job => (
              <TableRow key={job.id} className="cursor-pointer hover:bg-primary-900/10">
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">{job.stage}</span>
                    <Progress 
                      value={
                        job.stage === 'Screening' ? 25 : 
                        job.stage === 'Interviewing' ? 50 :
                        job.stage === 'Final Interviews' ? 75 : 100
                      } 
                      className="h-1.5" 
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    {job.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </GlassContainer>
  );
};

export default RecruitmentDashboard;
