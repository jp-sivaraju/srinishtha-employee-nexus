
import React, { useState, useEffect } from 'react';
import { Card } from '../../ui/Card';
import { 
  Users, 
  MessageCircle, 
  Bell, 
  Video, 
  Share2, 
  Eye, 
  Clock,
  Send,
  Paperclip,
  Smile
} from 'lucide-react';

const CollaborationPanel = ({ isOpen, onClose, taskId }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [notifications, setNotifications] = useState([]);

  // Simulate real-time collaboration
  useEffect(() => {
    const mockActiveUsers = [
      { id: 1, name: 'John Doe', avatar: 'JD', color: 'bg-blue-500', status: 'viewing' },
      { id: 2, name: 'Jane Smith', avatar: 'JS', color: 'bg-purple-500', status: 'editing' },
      { id: 3, name: 'Mike Johnson', avatar: 'MJ', color: 'bg-green-500', status: 'commenting' }
    ];

    const mockComments = [
      {
        id: 1,
        user: { name: 'Sarah Wilson', avatar: 'SW', color: 'bg-pink-500' },
        message: 'The design looks great! Just a few minor adjustments needed.',
        timestamp: '2 minutes ago',
        mentions: [],
        attachments: []
      },
      {
        id: 2,
        user: { name: 'Alex Brown', avatar: 'AB', color: 'bg-indigo-500' },
        message: '@JohnDoe can you review the backend implementation?',
        timestamp: '5 minutes ago',
        mentions: ['JohnDoe'],
        attachments: ['api-docs.pdf']
      },
      {
        id: 3,
        user: { name: 'Lisa Davis', avatar: 'LD', color: 'bg-orange-500' },
        message: 'Updated the requirements document with the latest changes.',
        timestamp: '1 hour ago',
        mentions: [],
        attachments: ['requirements-v2.docx']
      }
    ];

    const mockNotifications = [
      { id: 1, type: 'mention', message: 'You were mentioned in a comment', time: '1m ago' },
      { id: 2, type: 'assignment', message: 'New task assigned to you', time: '5m ago' },
      { id: 3, type: 'update', message: 'Task status changed to In Progress', time: '10m ago' }
    ];

    setActiveUsers(mockActiveUsers);
    setComments(mockComments);
    setNotifications(mockNotifications);
  }, [taskId]);

  const handleSendComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: { name: 'You', avatar: 'ME', color: 'bg-gray-500' },
      message: newComment,
      timestamp: 'Just now',
      mentions: [],
      attachments: []
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'viewing':
        return <Eye size={12} className="text-blue-500" />;
      case 'editing':
        return <Clock size={12} className="text-orange-500" />;
      case 'commenting':
        return <MessageCircle size={12} className="text-green-500" />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900 dark:text-white">Collaboration</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ×
          </button>
        </div>
        
        {/* Active Users */}
        <div className="mt-3">
          <div className="flex items-center gap-2 mb-2">
            <Users size={14} className="text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {activeUsers.length} active users
            </span>
          </div>
          <div className="flex -space-x-2">
            {activeUsers.map((user) => (
              <div key={user.id} className="relative">
                <div className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-gray-900`}>
                  {user.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1">
                  {getStatusIcon(user.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <Bell size={14} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Activity</span>
        </div>
        <div className="space-y-2 max-h-24 overflow-y-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded p-2">
              <div>{notification.message}</div>
              <div className="text-gray-500 mt-1">{notification.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <MessageCircle size={14} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Comments</span>
          </div>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className={`w-8 h-8 rounded-full ${comment.user.color} flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}>
                {comment.user.avatar}
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {comment.user.name}
                    </span>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {comment.message}
                  </p>
                  {comment.attachments.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {comment.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                          <Paperclip size={10} />
                          {attachment}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800"
              onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
            />
            <button
              onClick={handleSendComment}
              disabled={!newComment.trim()}
              className="px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={14} />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <Paperclip size={14} />
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <Smile size={14} />
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <Video size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPanel;
