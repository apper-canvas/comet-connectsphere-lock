import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { getIcon } from '../utils/iconUtils';

const MainFeature = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data
  const demoContacts = [
    { id: 1, name: "Sarah Johnson", company: "TechHub", role: "Marketing Director", email: "sarah@techhub.com", category: "work" },
    { id: 2, name: "Michael Chen", company: "GlobalFinance", role: "Investment Analyst", email: "michael@globalfinance.com", category: "work" },
    { id: 3, name: "Emma Rodriguez", company: "Design Co", role: "UX Designer", email: "emma@designco.io", category: "work" },
    { id: 4, name: "James Wilson", company: "Family", role: "Brother", email: "james@gmail.com", category: "family" },
    { id: 5, name: "Alex Taylor", company: "City Hospital", role: "Doctor", email: "alex@cityhospital.org", category: "personal" },
  ];
  
  // Get icons as components (not function calls)
  const SearchIcon = getIcon('Search');
  const UsersIcon = getIcon('Users');
  const BriefcaseIcon = getIcon('Briefcase');
  const HeartIcon = getIcon('Heart');
  const HomeIcon = getIcon('Home');
  const UserIcon = getIcon('User');
  const BuildingIcon = getIcon('Building');
  const MailIcon = getIcon('Mail');
  const XIcon = getIcon('X');
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search with timeout
    setTimeout(() => {
      const filtered = demoContacts.filter(contact => {
        const matchesSearch = 
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase());
          
        const matchesCategory = activeTab === 'all' || contact.category === activeTab;
        
        return matchesSearch && matchesCategory;
      });
      
      setSearchResults(filtered);
      setIsSearching(false);
      
      if (filtered.length === 0) {
        toast.info("No contacts found matching your search");
      } else {
        toast.success(`Found ${filtered.length} contact${filtered.length === 1 ? '' : 's'}`);
      }
    }, 800);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (searchQuery.trim()) {
      // Re-filter results if there's a search query
      const filtered = demoContacts.filter(contact => {
        const matchesSearch = 
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase());
          
        const matchesCategory = tab === 'all' || contact.category === tab;
        
        return matchesSearch && matchesCategory;
      });
      
      setSearchResults(filtered);
    }
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 w-full">
      <div className="container-custom">
        <div className="card max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-6 border-b border-surface-200 dark:border-surface-700">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0">
              Contact Explorer
            </h2>
            <div className="flex space-x-2">
              <button 
                className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleTabChange('all')}
              >
                <UsersIcon className="w-4 h-4 mr-2" />
                All
              </button>
              <button 
                className={`btn ${activeTab === 'work' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleTabChange('work')}
              >
                <BriefcaseIcon className="w-4 h-4 mr-2" />
                Work
              </button>
              <button 
                className={`btn ${activeTab === 'family' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleTabChange('family')}
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                Family
              </button>
              <button 
                className={`btn ${activeTab === 'personal' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleTabChange('personal')}
              >
                <HeartIcon className="w-4 h-4 mr-2" />
                Personal
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSearch} className="mb-8 relative">
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search contacts by name, company, or email..."
                  className="w-full pl-10 pr-10 py-3 rounded-lg border border-surface-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-surface-800 dark:border-surface-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-500 w-5 h-5" />
                
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-surface-500 hover:text-surface-700"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary ml-2"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </button>
            </div>
          </form>
          
          {/* Results Section */}
          <div className="mt-6">
            {isSearching ? (
              <div className="py-12 text-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mx-auto mb-4 text-primary"
                >
                  <SearchIcon className="w-8 h-8" />
                </motion.div>
                <p>Searching contacts...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-4">{searchResults.length} contacts found</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map(contact => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border border-surface-200 dark:border-surface-700 rounded-lg p-4 hover:shadow-soft transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="bg-primary/10 rounded-full p-3 mr-4">
                          <UserIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold">{contact.name}</h4>
                          <div className="flex items-center mt-2 text-sm text-surface-600 dark:text-surface-400">
                            <BuildingIcon className="w-4 h-4 mr-1" />
                            <span className="mr-3">{contact.company}</span>
                            <span className="border-l border-surface-300 dark:border-surface-600 pl-3">{contact.role}</span>
                          </div>
                          <div className="mt-3 flex items-center text-sm text-surface-600 dark:text-surface-400">
                            <MailIcon className="w-4 h-4 mr-1" />
                            <a href={`mailto:${contact.email}`} className="text-primary underline hover:text-primary-dark">
                              {contact.email}
                            </a>
                          </div>
                          <div className="mt-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              contact.category === 'work' ? 'bg-blue-100 text-blue-800' :
                              contact.category === 'family' ? 'bg-green-100 text-green-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {contact.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : searchQuery ? (
              <p className="text-center py-8 text-surface-600 dark:text-surface-400">
                No contacts found matching your search criteria.
              </p>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto mb-4 bg-primary/10 rounded-full p-4 inline-block">
                  <SearchIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Try the Demo Search</h3>
                <p className="text-surface-600 dark:text-surface-400">
                  Search through our sample contacts by typing a name, company or email.
                </p>
                <p className="mt-4 text-sm text-surface-500 dark:text-surface-500">
                  Hint: Try searching for "tech", "design", or filter by category using the tabs above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeature;