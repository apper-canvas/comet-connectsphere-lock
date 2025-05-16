import { useState } from 'react';
import { Tags, ChevronRight } from 'lucide-react';

// Sample tag data
const tagGroups = [
  { 
    id: 1, 
    name: 'Relationship Type', 
    tags: [
      { id: 1, name: 'Client', count: 42, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
      { id: 2, name: 'Prospect', count: 23, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
      { id: 3, name: 'Partner', count: 18, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' }
    ]
  },
  { 
    id: 2, 
    name: 'Industry', 
    tags: [
      { id: 4, name: 'Technology', count: 35, color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
      { id: 5, name: 'Healthcare', count: 27, color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
      { id: 6, name: 'Finance', count: 19, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' }
    ]
  },
  { 
    id: 3, 
    name: 'Status', 
    tags: [
      { id: 7, name: 'Active', count: 89, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
      { id: 8, name: 'Inactive', count: 12, color: 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400' }
    ]
  }
];

function TagsSummary() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <Tags className="w-5 h-5 mr-2 text-primary" />
          Tags & Categories
        </h2>
        <button className="text-sm text-primary font-medium flex items-center">
          Manage
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="space-y-4">
        {tagGroups.map(group => (
          <div key={group.id}>
            <h3 className="text-sm font-medium text-surface-500 mb-2">{group.name}</h3>
            <div className="flex flex-wrap gap-2">
              {group.tags.map(tag => (
                <div key={tag.id} className={`px-2 py-1 rounded-lg text-xs ${tag.color} flex items-center`}>
                  {tag.name} <span className="ml-1 bg-white bg-opacity-30 px-1.5 rounded-full">{tag.count}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagsSummary;