
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TeamWorkloadChart = () => {
  const data = [
    { name: 'Jane D.', tasks: 12, availability: 80 },
    { name: 'Mike S.', tasks: 9, availability: 65 },
    { name: 'Alex W.', tasks: 15, availability: 40 },
    { name: 'Sam T.', tasks: 7, availability: 90 },
    { name: 'Lisa M.', tasks: 11, availability: 70 },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={60} />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" name="Tasks Assigned" fill="#6366F1" radius={[0, 4, 4, 0]} barSize={12} />
          <Bar dataKey="availability" name="Availability %" fill="#10B981" radius={[0, 4, 4, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamWorkloadChart;
