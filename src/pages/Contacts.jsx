import { useState, useEffect } from 'react';
import { dummyContacts } from '../utils/dummyData';
import ContactCard from '../components/contacts/ContactCard';
import ContactsHeader from '../components/contacts/ContactsHeader';
import { getIcon } from '../utils/iconUtils';

const Contacts = () => {
  // Initialize view from localStorage or default to 'grid'
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('contactsViewMode') || 'grid';
  });
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Save view mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('contactsViewMode', viewMode);
  }, [viewMode]);

  // Simulate loading contacts data
  useEffect(() => {
    const loadContacts = async () => {
      setIsLoading(true);
      // Simulate API fetch delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setContacts(dummyContacts);
      setIsLoading(false);
    };
    
    loadContacts();
  }, []);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle between grid and list view
  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  // Handle search input change
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col h-full">
      <ContactsHeader 
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        totalContacts={filteredContacts.length}
      />
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center">
            <div className="animate-spin text-primary mb-3">
              {getIcon('Loader2', 'w-10 h-10')}
            </div>
            <p className="text-surface-500">Loading contacts...</p>
          </div>
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-surface-500">
          {getIcon('UserX', 'w-16 h-16 mb-4 text-surface-300')}
          <h3 className="text-xl font-medium mb-2">No contacts found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className={`mt-6 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filteredContacts.map(contact => (
            <ContactCard 
              key={contact.id}
              contact={contact}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredContacts.length > 0 && (
        <div className="mt-8 flex justify-center">
          <p className="text-surface-500 text-sm">
            Showing {filteredContacts.length} of {contacts.length} contacts
          </p>
        </div>
      )}
    </div>
  );
};

export default Contacts;