import React from 'react'
// Placeholder for user data - you might fetch this from context or an API
const userData = {
  name: 'Welcome to Srinishtha',
  role: 'Human Resources Manager',
  imageUrl: 'https://i.pinimg.com/736x/21/0c/c2/210cc2b19dd04434009cf6df985647f3.jpg', // Replace with actual image URL
};

// Placeholder for announcements data - you might fetch this from an API
const announcements = [
  {
    id: 1,
    title: 'May Company Meeting',
    content: 'Join us for our monthly all-hands meeting on May 15th at 10:00 AM.',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'New Performance Review Process',
    content: 'HR has released details about our new quarterly performance review process.',
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Office Updates',
    content: 'The 3rd floor kitchen will be closed for renovations from May 20-25.',
    posted: '1 week ago',
  },
];

const WelcomeSection = ({ user }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center mb-6">
    <img src={user.imageUrl} alt={user.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
    <div>
      <h2 className="text-2xl font-semibold text-blue-600">Hi, {user.name}</h2>
      <p className="text-sm text-gray-500">{user.role}</p>
    </div>
  </div>
);

const AnnouncementsSection = ({ items }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Announcements</h3>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 pb-3 last:border-b-0">
          <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.content}</p>
          <p className="text-xs text-gray-400 mt-1">Posted {item.posted}</p>
        </div>
      ))}
    </div>
  </div>
);

 function Dashboard() {
  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <WelcomeSection user={userData} />
      <AnnouncementsSection items={announcements} />
    </div>

  
  
);  
}
export default Dashboard;