
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';

const HolidaysCalendar = () => {
  const holidays = [
    { date: 'January 1, 2025', name: 'New Year\'s Day', type: 'Public Holiday' },
    { date: 'January 26, 2025', name: 'Republic Day', type: 'Public Holiday' },
    { date: 'April 18, 2025', name: 'Good Friday', type: 'Public Holiday' },
    
    { date: 'May 1, 2025', name: 'May Day', type: 'Public Holiday' },
    { date: 'August 15, 2025', name: 'Independence Day', type: 'Public Holiday' },
    { date: 'August 27, 2025', name: 'Ganesh Chaturthi', type: 'Public Holiday' },
    { date: 'September 5, 2025',name: 'Eid Milad', type: 'Public Holiday' },
    { date: 'October 1, 2025', name: 'Vijayadashami', type: 'Public Holiday' },
    { date: 'October 2, 2025', name: 'Gandhi Jayanti', type: 'Public Holiday' },
    { date: 'October 22, 2025', name: 'Diwali', type: 'Public Holiday' },
    { date: 'December 25, 2025', name: 'Christmas', type: 'Public Holiday' },
  ];

  return (
    <GlassContainer className="p-6">
      <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
        Holiday Calendar 2025
      </GradientText>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-primary-800">
          <thead className="bg-primary-500/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Holiday
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary-900/20 divide-y divide-primary-800">
            {holidays.map((holiday, index) => (
              <tr 
                key={index}
                className="hover:bg-primary-800/30 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-100">
                  {holiday.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {holiday.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs">
                    {holiday.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassContainer>
  );
};

export default HolidaysCalendar;
