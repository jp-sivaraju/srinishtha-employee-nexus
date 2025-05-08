
import React, { useEffect } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Calendar, FileText, HelpCircle, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Line Chart component using Canvas API
const LineChart = ({ data, color = '#9b87f5', height = 100, width = 200 }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const points = data.map((val, i) => ({
      x: i * (width / (data.length - 1)),
      y: height - (val / Math.max(...data)) * height,
    }));

    ctx.clearRect(0, 0, width, height);
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => {
      ctx.lineTo(point.x, point.y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw area under the line
    ctx.lineTo(points[points.length - 1].x, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = `${color}20`;
    ctx.fill();
    
    // Draw dots
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }, [data, color, height, width]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  
  useEffect(() => {
    document.title = 'Dashboard | Srinishtha Hub';

    // Initialize animation for elements
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      elements.forEach((el) => observer.observe(el));
    };
    
    animateElements();
  }, []);

  const quickLinks = [
    { id: 1, title: 'Leave Application', icon: Calendar, route: '/hr-zone', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { id: 2, title: 'IT Help', icon: HelpCircle, route: '/it-helpdesk', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { id: 3, title: 'My Projects', icon: FileText, route: '/projects', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { id: 4, title: 'HR Documents', icon: Users, route: '/hr-zone', color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' },
  ];

  // Dummy data for the chart
  const projectProgress = [10, 25, 15, 30, 20, 40, 35, 55, 45, 60, 70];

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title={`Welcome, ${user.name}!`}
          description="Access all your work tools and resources in one place"
          withParallax={true}
        />

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((link) => (
            <Link to={link.route} key={link.id} className="animate-on-scroll">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-all duration-300 card-hover">
                <div className={`p-3 rounded-lg ${link.color} mr-4`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {link.title}
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                    Access <ChevronRight className="w-4 h-4 ml-1" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card title="Recent Announcements" className="animate-on-scroll">
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-white">May Company Meeting</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Join us for our monthly all-hands meeting on May 15th at 10:00 AM.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Posted 2 days ago</p>
              </div>
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-white">New Performance Review Process</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  HR has released details about our new quarterly performance review process.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Posted 1 week ago</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Office Updates</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  The 3rd floor kitchen will be closed for renovations from May 20-25.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Posted 1 week ago</p>
              </div>
            </div>
          </Card>

          <Card title="Your Goals Progress" className="animate-on-scroll">
            <div>
              <div className="mb-4">
                <LineChart data={projectProgress} width={450} height={120} />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Q2 Target Completion
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      72%
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-primary-200 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-4 border-primary-500" 
                         style={{ clipPath: 'polygon(0 0, 72% 0, 72% 100%, 0 100%)' }}>
                    </div>
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">72%</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 h-2 rounded-full">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card title="Tasks Due This Week" className="animate-on-scroll">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-800 dark:text-white">Submit quarterly report</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Due Today</span>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-800 dark:text-white">Review PRs for project Alpha</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Tomorrow</span>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-gray-800 dark:text-white">Prepare presentation for client meeting</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">May 12</span>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <span className="ml-3 line-through text-gray-500 dark:text-gray-400">Update documentation</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Completed</span>
              </li>
            </ul>
          </Card>

          <Card title="Recent Activities" className="animate-on-scroll">
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600">
                    <FileText className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    You uploaded a new document
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project_Specs_v2.pdf
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    10 minutes ago
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Meeting scheduled
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project kickoff with design team
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Yesterday at 2:30 PM
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    IT ticket #3245 resolved
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Monitor display issue fixed
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    2 days ago
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
