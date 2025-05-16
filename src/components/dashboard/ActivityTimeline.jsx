import { useState } from 'react';
import { getIcon } from '../../utils/iconUtils';

// Sample activity data
const activities = [
  { 
    id: 1, 
    type: 'email', 
    icon: 'Mail', 
    contact: 'Sarah Johnson', 
    description: 'Sent follow-up email about project proposal', 
    time: '2 hours ago',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
  },
  { 
    id: 2, 
    type: 'call', 
    icon: 'Phone', 
    contact: 'Michael Chen', 
    description: 'Discussed contract renewal terms (15m call)', 
    time: '4 hours ago',
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
  },
  { 
    id: 3, 
    type: 'meeting', 
    icon: 'Calendar', 
    contact: 'Team Meeting', 
    description: 'Weekly sync with Design Studio team', 
    time: 'Yesterday at 2:30 PM',
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
  },
  { 
    id: 4, 
    type: 'note', 
    icon: 'FileEdit', 
    contact: 'James Wilson', 
    description: 'Added notes about investment opportunities', 
    time: 'Yesterday at 11:15 AM',
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
  },
  { 
    id: 5, 
    type: 'task', 
    icon: 'CheckCircle', 
    contact: 'Project X', 
    description: 'Completed milestone 2 deliverables', 
    time: '2 days ago',
    color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400'
  }
];

function ActivityTimeline({ className = '' }) {
  return (
    <div className={`card ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map(activity => {
          const Icon = getIcon(activity.icon);
          return (
            <div key={activity.id} className="flex items-start">
              <div className={`flex-shrink-0 rounded-full p-2 ${activity.color}`}>
                {Icon && <Icon className="w-4 h-4" />}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">{activity.contact}</p>
                  <span className="text-xs text-surface-500">{activity.time}</span>
                </div>
                <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityTimeline;