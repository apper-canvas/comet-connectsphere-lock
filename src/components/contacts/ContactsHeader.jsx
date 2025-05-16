import { getIcon } from '../../utils/iconUtils';

const ContactsHeader = ({ 
  viewMode, 
  toggleViewMode, 
  searchTerm, 
  onSearchChange,
  totalContacts
}) => {
  return (
    <div className="bg-white dark:bg-surface-800 shadow-sm rounded-xl p-4 mb-6">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white mb-1">Contacts</h1>
          <p className="text-surface-500 dark:text-surface-400">
            {totalContacts} {totalContacts === 1 ? 'contact' : 'contacts'} in your network
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            className="btn btn-primary"
            onClick={() => {}}
          >
            {getIcon('UserPlus', 'w-4 h-4 mr-2')}
            Add Contact
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-surface-400">
            {getIcon('Search', 'w-5 h-5')}
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-surface-200 dark:border-surface-700 rounded-lg bg-white dark:bg-surface-700 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-3">
          <button
            className={`p-2 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 ${viewMode === 'grid' ? 'bg-surface-100 dark:bg-surface-700 text-primary' : ''}`}
            onClick={toggleViewMode}
          >
            {getIcon(viewMode === 'grid' ? 'Grid' : 'List', 'w-5 h-5')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsHeader;