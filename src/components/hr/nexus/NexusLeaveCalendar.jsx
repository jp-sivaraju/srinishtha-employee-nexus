
import React, { useState } from 'react';
import { Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for team members and their leaves
const teamData = [
  {
    id: 1, 
    name: 'You (Current User)',
    role: 'Software Developer',
    leaves: [
      { id: 1, type: 'Annual', startDate: '2025-05-15', endDate: '2025-05-22', status: 'approved' },
      { id: 2, type: 'Sick', startDate: '2025-06-10', endDate: '2025-06-11', status: 'approved' }
    ]
  },
  {
    id: 2, 
    name: 'Alex Johnson',
    role: 'UI/UX Designer',
    leaves: [
      { id: 3, type: 'Personal', startDate: '2025-05-10', endDate: '2025-05-12', status: 'approved' },
      { id: 4, type: 'Annual', startDate: '2025-06-20', endDate: '2025-06-27', status: 'approved' }
    ]
  },
  {
    id: 3, 
    name: 'Sarah Williams',
    role: 'Project Manager',
    leaves: [
      { id: 5, type: 'Annual', startDate: '2025-05-25', endDate: '2025-05-28', status: 'approved' }
    ]
  },
  {
    id: 4, 
    name: 'Michael Brown',
    role: 'QA Engineer',
    leaves: [
      { id: 6, type: 'Sick', startDate: '2025-05-18', endDate: '2025-05-19', status: 'approved' },
      { id: 7, type: 'Parental', startDate: '2025-07-01', endDate: '2025-07-31', status: 'approved' }
    ]
  }
];

const NexusLeaveCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState('month');
  
  // Helper functions for date manipulation
  const getMonthName = (date) => date.toLocaleString('default', { month: 'long' });
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  
  // Get current month data
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Navigation functions
  const previousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  // Check if a date has any team member on leave
  const getLeavesForDate = (dateStr) => {
    const result = [];
    
    teamData.forEach(member => {
      member.leaves.forEach(leave => {
        const start = new Date(leave.startDate);
        const end = new Date(leave.endDate);
        const current = new Date(dateStr);
        
        if (current >= start && current <= end) {
          result.push({
            memberId: member.id,
            memberName: member.name,
            leaveType: leave.type
          });
        }
      });
    });
    
    return result;
  };
  
  // Generate calendar days array
  const calendarDays = [];
  const monthStart = new Date(currentYear, currentMonth, 1);
  const monthEnd = new Date(currentYear, currentMonth, daysInMonth);
  
  // Add previous month's trailing days
  const prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start
  for (let i = prevMonthDays; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, -i + 1);
    calendarDays.push({
      date: prevDate,
      isCurrentMonth: false,
      dateString: prevDate.toISOString().split('T')[0]
    });
  }
  
  // Add current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    calendarDays.push({
      date,
      isCurrentMonth: true,
      dateString: date.toISOString().split('T')[0]
    });
  }
  
  // Add next month's leading days to complete the grid (always show 6 rows = 42 cells)
  const remainingDays = 42 - calendarDays.length;
  for (let day = 1; day <= remainingDays; day++) {
    const nextDate = new Date(currentYear, currentMonth + 1, day);
    calendarDays.push({
      date: nextDate,
      isCurrentMonth: false,
      dateString: nextDate.toISOString().split('T')[0]
    });
  }
  
  const leaveTypeColors = {
    'Annual': 'bg-blue-100 text-blue-800 border-blue-300',
    'Sick': 'bg-red-100 text-red-800 border-red-300',
    'Personal': 'bg-purple-100 text-purple-800 border-purple-300',
    'Parental': 'bg-green-100 text-green-800 border-green-300',
    'Bereavement': 'bg-gray-100 text-gray-800 border-gray-300'
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-3 md:mb-0">
          <h3 className="text-lg font-medium text-[#1C2526] flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-[#6B48FF]" />
            Team Leave Calendar
          </h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={previousMonth}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <h3 className="text-lg font-medium text-[#1C2526] min-w-32 text-center">
            {getMonthName(currentDate)} {currentYear}
          </h3>
          
          <button
            onClick={nextMonth}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          
          <button
            onClick={() => setCurrentDate(new Date())}
            className="ml-2 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            Today
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="grid grid-cols-7 gap-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div 
              key={day} 
              className="p-2 text-center text-xs font-semibold text-gray-700 bg-gray-100 rounded-sm"
            >
              {day}
            </div>
          ))}
          
          {calendarDays.map((day, index) => {
            const leaves = getLeavesForDate(day.dateString);
            const isToday = new Date().toDateString() === day.date.toDateString();
            
            return (
              <div 
                key={index} 
                className={`p-1 border rounded-sm min-h-24 ${
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'
                } ${
                  isToday ? 'border-[#6B48FF]' : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-xs font-semibold ${isToday ? 'text-[#6B48FF]' : ''}`}>
                    {day.date.getDate()}
                  </span>
                  
                  {leaves.length > 0 && (
                    <span className="text-xs bg-[#6B48FF] text-white px-1 rounded-sm">
                      {leaves.length}
                    </span>
                  )}
                </div>
                
                <div className="mt-1 space-y-1">
                  {leaves.length > 0 && leaves.slice(0, 2).map((leave, idx) => (
                    <div 
                      key={idx} 
                      className={`px-1 py-0.5 text-xs truncate rounded border ${leaveTypeColors[leave.leaveType] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
                      title={`${leave.memberName} - ${leave.leaveType} Leave`}
                    >
                      {leave.memberName.split(' ')[0]}
                    </div>
                  ))}
                  
                  {leaves.length > 2 && (
                    <div className="text-xs text-center text-gray-500">
                      +{leaves.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6 border-t pt-6">
        <h4 className="text-md font-medium text-[#1C2526] mb-3 flex items-center">
          <Users className="h-5 w-5 mr-2 text-[#6B48FF]" />
          Team Members
        </h4>
        
        <div className="space-y-4">
          {teamData.map(member => (
            <div key={member.id} className="border rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h5 className="font-medium">{member.name}</h5>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                
                <div className="text-sm">
                  {member.leaves.length} {member.leaves.length === 1 ? 'leave' : 'leaves'} planned
                </div>
              </div>
              
              {member.leaves.length > 0 && (
                <div className="space-y-1">
                  {member.leaves.map(leave => (
                    <div 
                      key={leave.id} 
                      className={`flex justify-between items-center px-2 py-1 text-xs rounded ${leaveTypeColors[leave.type] || 'bg-gray-100'}`}
                    >
                      <div className="font-medium">{leave.type} Leave</div>
                      <div>
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NexusLeaveCalendar;
