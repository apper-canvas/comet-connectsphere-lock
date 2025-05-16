import { useState } from 'react';
import { ChevronRight, Star, StarOff, Mail, Phone } from 'lucide-react';
import { getIcon } from '../../utils/iconUtils';

// Sample data
const recentContacts = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 (555) 123-4567', company: 'Acme Inc.', tags: ['Client', 'VIP'] },
  { id: 2, name: 'Michael Chen', email: 'mchen@techcorp.com', phone: '+1 (555) 987-6543', company: 'TechCorp', tags: ['Supplier'] },
  { id: 3, name: 'Emma Rodriguez', email: 'emma.r@designstudio.co', phone: '+1 (555) 456-7890', company: 'Design Studio', tags: ['Partner', 'Creative'] },
  { id: 4, name: 'James Wilson', email: 'jwilson@finance.org', phone: '+1 (555) 789-0123', company: 'Finance Group', tags: ['Client'] },
  { id: 5, name: 'Olivia Park', email: 'opark@healthcare.med', phone: '+1 (555) 234-5678', company: 'Healthcare Solutions', tags: ['Prospect'] }
];

const pinnedContacts = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 (555) 123-4567', company: 'Acme Inc.', tags: ['Client', 'VIP'] },
  { id: 2, name: 'Michael Chen', email: 'mchen@techcorp.com', phone: '+1 (555) 987-6543', company: 'TechCorp', tags: ['Supplier'] },
  { id: 3, name: 'Emma Rodriguez', email: 'emma.r@designstudio.co', phone: '+1 (555) 456-7890', company: 'Design Studio', tags: ['Partner', 'Creative'] }
];

function ContactList({ title, type, className = '' }) {
  const [pinnedStatus, setPinnedStatus] = useState({});
  
  const contacts = type === 'recent' ? recentContacts : pinnedContacts;
  
  const togglePinned = (id) => {
    setPinnedStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {type === 'recent' && (
          <button className="text-sm text-primary font-medium flex items-center">
            View all 
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {contacts.map(contact => (
          <div key={contact.id} className="p-3 bg-surface-50 dark:bg-surface-700 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors">
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">{contact.name}</h3>
                  <button 
                    onClick={() => togglePinned(contact.id)} 
                    className="text-surface-400 hover:text-yellow-500"
                  >
                    {pinnedStatus[contact.id] || type === 'pinned' ? (
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ) : (
                      <StarOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-surface-500 mt-1">{contact.company}</p>
                
                <div className="mt-2 flex items-center text-sm text-surface-600 dark:text-surface-400">
                  <Mail className="w-4 h-4 mr-1" />
                  {contact.email}
                </div>
                
                {contact.phone && (
                  <div className="mt-2 flex items-center text-sm text-surface-600 dark:text-surface-400">
                    <Phone className="w-4 h-4 mr-1" />
                    {contact.phone}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {contact.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary-light/20 text-primary-dark">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;