import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { MessageCircle, User, Plus, Send, Smile, ThumbsUp, Clock } from 'lucide-react';

const PerformanceFeedback = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [newFeedback, setNewFeedback] = useState('');
  
  const receivedFeedback = [
    {
      id: 1,
      from: {
        name: 'Sarah Johnson',
        role: 'Project Manager',
        avatar: 'SJ'
      },
      content: 'Your leadership during the last sprint was exceptional. The way you guided the team through the technical challenges made a significant difference to our delivery timeline.',
      type: 'praise',
      date: '2025-05-10',
      project: 'Website Redesign'
    },
    {
      id: 2,
      from: {
        name: 'Michael Chen',
        role: 'Tech Lead',
        avatar: 'MC'
      },
      content: 'Great job on optimizing the database queries. Consider documenting your approach so others can learn from it. Also, I think there\'s an opportunity to improve the caching strategy based on what you\'ve learned.',
      type: 'constructive',
      date: '2025-04-25',
      project: 'Performance Optimization'
    },
    {
      id: 3,
      from: {
        name: 'Emma Williams',
        role: 'Product Owner',
        avatar: 'EW'
      },
      content: 'Thank you for going above and beyond in communicating with the client. Your detailed updates kept everyone informed and prevented any surprises during the demo.',
      type: 'praise',
      date: '2025-04-18',
      project: 'Client Portal'
    }
  ];
  
  const givenFeedback = [
    {
      id: 1,
      to: {
        name: 'David Lopez',
        role: 'Frontend Developer',
        avatar: 'DL'
      },
      content: 'Your attention to detail on the UI components is impressive. The animations are smooth and the accessibility improvements are noticeable.',
      type: 'praise',
      date: '2025-05-05',
      project: 'Mobile App Development'
    },
    {
      id: 2,
      to: {
        name: 'Alisha Patel',
        role: 'QA Engineer',
        avatar: 'AP'
      },
      content: 'I appreciate the thoroughness of your test plans. One suggestion would be to automate some of the repetitive test cases to improve efficiency.',
      type: 'constructive',
      date: '2025-04-20',
      project: 'Website Redesign'
    }
  ];
  
  const pendingFeedback = [
    {
      id: 1,
      for: {
        name: 'Robert Garcia',
        role: 'Backend Developer',
        avatar: 'RG'
      },
      dueDate: '2025-05-30',
      project: 'API Integration'
    },
    {
      id: 2,
      for: {
        name: 'Jennifer Kim',
        role: 'UI/UX Designer',
        avatar: 'JK'
      },
      dueDate: '2025-05-25',
      project: 'Mobile App Development'
    }
  ];
  
  const peers = [
    { id: 1, name: 'David Lopez', role: 'Frontend Developer', avatar: 'DL' },
    { id: 2, name: 'Alisha Patel', role: 'QA Engineer', avatar: 'AP' },
    { id: 3, name: 'Robert Garcia', role: 'Backend Developer', avatar: 'RG' },
    { id: 4, name: 'Jennifer Kim', role: 'UI/UX Designer', avatar: 'JK' }
  ];
  
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [feedbackType, setFeedbackType] = useState('praise');
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };
  
  const handleSendFeedback = () => {
    console.log('Sending feedback to:', selectedPeer);
    console.log('Feedback type:', feedbackType);
    console.log('Feedback content:', newFeedback);
    
    // Reset form after submission
    setNewFeedback('');
    setSelectedPeer(null);
    setFeedbackType('praise');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-2/3">
          <Card title="Feedback">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('received')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'received'
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Received
                </button>
                <button
                  onClick={() => setActiveTab('given')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'given'
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Given
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'pending'
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Pending
                </button>
              </nav>
            </div>
            
            <div className="p-2">
              {activeTab === 'received' && (
                <div className="space-y-4">
                  {receivedFeedback.map((feedback) => (
                    <div 
                      key={feedback.id} 
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start mb-3">
                        <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-sm font-medium text-primary-700 dark:text-primary-300 mr-3">
                          {feedback.from.avatar}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {feedback.from.name}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {feedback.from.role}
                          </p>
                        </div>
                        <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(feedback.date)}
                        </div>
                      </div>
                      
                      <div className="pl-13 ml-13">
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {feedback.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            feedback.type === 'praise' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                            {feedback.type === 'praise' ? 'Praise' : 'Constructive Feedback'}
                          </span>
                          
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Project: {feedback.project}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'given' && (
                <div className="space-y-4">
                  {givenFeedback.map((feedback) => (
                    <div 
                      key={feedback.id} 
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start mb-3">
                        <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
                          <User size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              To: {feedback.to.name}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(feedback.date)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {feedback.to.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="pl-13 ml-13">
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {feedback.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            feedback.type === 'praise' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                            {feedback.type === 'praise' ? 'Praise' : 'Constructive Feedback'}
                          </span>
                          
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Project: {feedback.project}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'pending' && (
                <div className="space-y-4">
                  {pendingFeedback.map((feedback) => (
                    <div 
                      key={feedback.id} 
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-sm font-medium text-primary-700 dark:text-primary-300 mr-3">
                            {feedback.for.avatar}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {feedback.for.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {feedback.for.role}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-sm text-amber-600 dark:text-amber-400 flex items-center">
                          <Clock size={16} className="mr-1" />
                          <span>Due by {formatDate(feedback.dueDate)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Project: {feedback.project}
                        </span>
                        
                        <button className="px-3 py-1.5 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
                          Provide Feedback
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
        
        <div className="w-full md:w-1/3">
          <Card title="Give Feedback">
            <div className="space-y-4 p-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Team Member
                </label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2.5 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={selectedPeer ? selectedPeer.id : ''}
                    onChange={(e) => {
                      const peerId = parseInt(e.target.value);
                      const peer = peers.find(p => p.id === peerId);
                      setSelectedPeer(peer || null);
                    }}
                  >
                    <option value="" disabled>Select a team member...</option>
                    {peers.map((peer) => (
                      <option key={peer.id} value={peer.id}>{peer.name} - {peer.role}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Feedback Type
                </label>
                <div className="flex space-x-2">
                  <label className={`flex-1 flex items-center justify-center p-2.5 border rounded-md cursor-pointer ${
                    feedbackType === 'praise' 
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' 
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      value="praise" 
                      checked={feedbackType === 'praise'} 
                      onChange={() => setFeedbackType('praise')} 
                      className="sr-only" 
                    />
                    <ThumbsUp size={18} className="mr-2" />
                    <span>Praise</span>
                  </label>
                  
                  <label className={`flex-1 flex items-center justify-center p-2.5 border rounded-md cursor-pointer ${
                    feedbackType === 'constructive' 
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' 
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      value="constructive" 
                      checked={feedbackType === 'constructive'} 
                      onChange={() => setFeedbackType('constructive')} 
                      className="sr-only" 
                    />
                    <MessageCircle size={18} className="mr-2" />
                    <span>Constructive</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Feedback
                </label>
                <textarea
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[120px]"
                  placeholder={`Write your ${feedbackType === 'praise' ? 'praise' : 'constructive feedback'} here...`}
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                />
              </div>
              
              <button
                className="w-full flex items-center justify-center gap-2 p-2.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={!selectedPeer || !newFeedback.trim()}
                onClick={handleSendFeedback}
              >
                <Send size={16} />
                <span>Send Feedback</span>
              </button>
            </div>
          </Card>
          
          <div className="mt-6">
            <Card title="Feedback Stats">
              <div className="space-y-4 p-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <MessageCircle size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Received</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{receivedFeedback.length}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Send size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Given</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{givenFeedback.length}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Clock size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Pending</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{pendingFeedback.length}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceFeedback;
