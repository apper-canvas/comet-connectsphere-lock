import { useState } from 'react';
import { getIcon } from '../../utils/iconUtils';
import { format } from 'date-fns';

const ContactCard = ({ contact, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'N/A';
    }
  };

  // Random background colors for the avatar
  const getRandomBgColor = () => {
    const colors = [
      'bg-blue-100 text-blue-600',
      'bg-green-100 text-green-600',
      'bg-purple-100 text-purple-600',
      'bg-pink-100 text-pink-600',
      'bg-yellow-100 text-yellow-600',
      'bg-red-100 text-red-600',
    ];
    // Use contact id to get consistent color
    return colors[contact.id % colors.length];
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="bg-white dark:bg-surface-800 rounded-lg shadow-card p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getRandomBgColor()}`}>
            {getInitials(contact.name)}
          </div>
          <div className="ml-4">
            <h3 className="font-medium text-surface-900 dark:text-white flex items-center">
              {contact.name}
              {contact.favorite && (
                <span className="ml-2 text-yellow-500">{getIcon('Star', 'w-4 h-4 fill-current')}</span>
              )}
            </h3>
            <p className="text-sm text-surface-500 dark:text-surface-400">{contact.position} at {contact.company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-surface-500 dark:text-surface-400 hidden md:inline">{contact.email}</span>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 dark:text-surface-400">
              {getIcon('Phone', 'w-4 h-4')}
            </button>
            <button className="p-1.5 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 dark:text-surface-400">
              {getIcon('Mail', 'w-4 h-4')}
            </button>
            <button className="p-1.5 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-500 dark:text-surface-400">
              {getIcon('MoreHorizontal', 'w-4 h-4')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white dark:bg-surface-800 rounded-lg shadow-card p-5 flex flex-col hover:shadow-md transition-shadow duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRandomBgColor()}`}>
          {getInitials(contact.name)}
        </div>
        {contact.favorite && <div className="text-yellow-500">{getIcon('Star', 'w-5 h-5 fill-current')}</div>}
      </div>
      <h3 className="font-medium text-lg text-surface-900 dark:text-white">{contact.name}</h3>
      <p className="text-sm text-surface-500 dark:text-surface-400 mb-2">{contact.position} at {contact.company}</p>
      <p className="text-sm text-surface-700 dark:text-surface-300 mb-1 flex items-center">{getIcon('Mail', 'w-4 h-4 mr-2')} {contact.email}</p>
      <p className="text-sm text-surface-700 dark:text-surface-300 mb-1 flex items-center">{getIcon('Phone', 'w-4 h-4 mr-2')} {contact.phone}</p>
      <p className="text-sm text-surface-500 dark:text-surface-400 mt-4 flex items-center">{getIcon('Calendar', 'w-4 h-4 mr-2')} Added {formatDate(contact.addedDate)}</p>
    </div>
  );
};

export default ContactCard;