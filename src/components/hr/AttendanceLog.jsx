
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';

const AttendanceLog = () => {
  const attendanceLogs = [
    { date: 'May 7, 2025', checkIn: '09:05 AM', checkOut: '06:12 PM', status: 'Present' },
    { date: 'May 6, 2025', checkIn: '08:55 AM', checkOut: '06:03 PM', status: 'Present' },
    { date: 'May 5, 2025', checkIn: '09:15 AM', checkOut: '06:30 PM', status: 'Present' },
    { date: 'May 4, 2025', checkIn: '-', checkOut: '-', status: 'Weekend' },
    { date: 'May 3, 2025', checkIn: '-', checkOut: '-', status: 'Weekend' },
    { date: 'May 2, 2025', checkIn: '09:00 AM', checkOut: '05:45 PM', status: 'Present' },
  ];

  return (
    <GlassContainer className="p-6">
      <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
        Attendance Logs
      </GradientText>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-primary-700">
          <thead className="bg-primary-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Check In
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Check Out
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary-900/20 divide-y divide-primary-800">
            {attendanceLogs.map((log, index) => (
              <tr 
                key={index}
                className="hover:bg-primary-800/30"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-100">
                  {log.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {log.checkIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {log.checkOut}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full ${
                    log.status === 'Present' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                      : log.status === 'Absent'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                  } text-xs`}>
                    {log.status}
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

export default AttendanceLog;
