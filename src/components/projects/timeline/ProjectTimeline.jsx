
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../../ui/Card';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  Filter,
  Download
} from 'lucide-react';

const ProjectTimeline = () => {
  const [timeScale, setTimeScale] = useState('month'); // day, week, month, quarter
  const [currentDate, setCurrentDate] = useState(new Date());
  const timelineRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      startDate: '2025-05-01',
      endDate: '2025-06-30',
      progress: 75,
      color: 'bg-blue-500',
      tasks: [
        { name: 'Design Phase', start: '2025-05-01', end: '2025-05-15', progress: 100 },
        { name: 'Development', start: '2025-05-16', end: '2025-06-15', progress: 80 },
        { name: 'Testing', start: '2025-06-01', end: '2025-06-30', progress: 30 }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Development',
      startDate: '2025-04-15',
      endDate: '2025-08-15',
      progress: 45,
      color: 'bg-green-500',
      tasks: [
        { name: 'Planning', start: '2025-04-15', end: '2025-05-01', progress: 100 },
        { name: 'UI/UX Design', start: '2025-05-01', end: '2025-05-30', progress: 90 },
        { name: 'Backend Development', start: '2025-05-15', end: '2025-07-15', progress: 60 },
        { name: 'Frontend Development', start: '2025-06-01', end: '2025-08-01', progress: 20 }
      ]
    },
    {
      id: 3,
      name: 'Data Migration',
      startDate: '2025-06-01',
      endDate: '2025-07-15',
      progress: 15,
      color: 'bg-purple-500',
      tasks: [
        { name: 'Data Analysis', start: '2025-06-01', end: '2025-06-15', progress: 80 },
        { name: 'Migration Scripts', start: '2025-06-10', end: '2025-07-01', progress: 30 },
        { name: 'Testing & Validation', start: '2025-07-01', end: '2025-07-15', progress: 0 }
      ]
    }
  ];

  const getTimelineRange = () => {
    const start = new Date(currentDate);
    const end = new Date(currentDate);
    
    switch (timeScale) {
      case 'day':
        start.setDate(start.getDate() - 15);
        end.setDate(end.getDate() + 15);
        break;
      case 'week':
        start.setDate(start.getDate() - 42);
        end.setDate(end.getDate() + 42);
        break;
      case 'month':
        start.setMonth(start.getMonth() - 3);
        end.setMonth(end.getMonth() + 3);
        break;
      case 'quarter':
        start.setMonth(start.getMonth() - 12);
        end.setMonth(end.getMonth() + 12);
        break;
    }
    
    return { start, end };
  };

  const generateTimePoints = () => {
    const { start, end } = getTimelineRange();
    const points = [];
    const current = new Date(start);
    
    while (current <= end) {
      points.push(new Date(current));
      
      switch (timeScale) {
        case 'day':
          current.setDate(current.getDate() + 1);
          break;
        case 'week':
          current.setDate(current.getDate() + 7);
          break;
        case 'month':
          current.setMonth(current.getMonth() + 1);
          break;
        case 'quarter':
          current.setMonth(current.getMonth() + 3);
          break;
      }
    }
    
    return points;
  };

  const getPositionForDate = (date, timePoints) => {
    const targetDate = new Date(date);
    const startDate = timePoints[0];
    const endDate = timePoints[timePoints.length - 1];
    const totalDuration = endDate - startDate;
    const position = ((targetDate - startDate) / totalDuration) * 100;
    return Math.max(0, Math.min(100, position));
  };

  const timePoints = generateTimePoints();

  const navigateTime = (direction) => {
    const newDate = new Date(currentDate);
    const multiplier = direction === 'prev' ? -1 : 1;
    
    switch (timeScale) {
      case 'day':
        newDate.setDate(newDate.getDate() + (7 * multiplier));
        break;
      case 'week':
        newDate.setDate(newDate.getDate() + (14 * multiplier));
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + (1 * multiplier));
        break;
      case 'quarter':
        newDate.setMonth(newDate.getMonth() + (3 * multiplier));
        break;
    }
    
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Timeline Controls */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Project Timeline</h3>
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-md">
              {['day', 'week', 'month', 'quarter'].map((scale) => (
                <button
                  key={scale}
                  onClick={() => setTimeScale(scale)}
                  className={`px-3 py-1 text-sm ${
                    timeScale === scale
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } first:rounded-l-md last:rounded-r-md border-r last:border-r-0 border-gray-300 dark:border-gray-600`}
                >
                  {scale.charAt(0).toUpperCase() + scale.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTime('prev')}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400 min-w-32 text-center">
              {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
            <button
              onClick={() => navigateTime('next')}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronRight size={16} />
            </button>
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
              <Filter size={16} />
            </button>
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
              <Download size={16} />
            </button>
          </div>
        </div>
      </Card>

      {/* Timeline Chart */}
      <Card className="p-6">
        <div className="overflow-x-auto" ref={timelineRef}>
          <div className="min-w-[800px]">
            {/* Time Scale Header */}
            <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              <div className="w-48 flex-shrink-0"></div>
              <div className="flex-1 flex">
                {timePoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 text-xs text-gray-500 dark:text-gray-400 text-center border-l border-gray-200 dark:border-gray-700 px-1"
                  >
                    {timeScale === 'day' && point.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    {timeScale === 'week' && `W${Math.ceil(point.getDate() / 7)}`}
                    {timeScale === 'month' && point.toLocaleDateString('en-US', { month: 'short' })}
                    {timeScale === 'quarter' && `Q${Math.ceil((point.getMonth() + 1) / 3)}`}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Rows */}
            {projects.map((project) => (
              <div key={project.id} className="mb-6">
                {/* Project Header */}
                <div className="flex items-center mb-2">
                  <div className="w-48 flex-shrink-0 pr-4">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${project.color} mr-2`}></div>
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {project.name}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {project.progress}% complete
                    </div>
                  </div>
                  <div className="flex-1 relative h-8">
                    <div className="absolute inset-0 flex items-center">
                      <div
                        className={`h-4 ${project.color} rounded-md relative flex items-center`}
                        style={{
                          left: `${getPositionForDate(project.startDate, timePoints)}%`,
                          width: `${getPositionForDate(project.endDate, timePoints) - getPositionForDate(project.startDate, timePoints)}%`
                        }}
                      >
                        <div
                          className="h-full bg-white/30 rounded-md"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Task Rows */}
                {project.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center mb-1 ml-4">
                    <div className="w-44 flex-shrink-0 pr-4">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {task.name}
                      </span>
                    </div>
                    <div className="flex-1 relative h-4">
                      <div className="absolute inset-0 flex items-center">
                        <div
                          className="h-2 bg-gray-300 dark:bg-gray-600 rounded-sm relative"
                          style={{
                            left: `${getPositionForDate(task.start, timePoints)}%`,
                            width: `${getPositionForDate(task.end, timePoints) - getPositionForDate(task.start, timePoints)}%`
                          }}
                        >
                          <div
                            className={`h-full ${project.color} rounded-sm`}
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectTimeline;
