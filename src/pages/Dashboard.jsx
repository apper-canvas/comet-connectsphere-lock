import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Upload, 
  Download, 
  ChevronDown, 
  Bell
} from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import ContactList from '../components/dashboard/ContactList';
import ActivityTimeline from '../components/dashboard/ActivityTimeline';
import TagsSummary from '../components/dashboard/TagsSummary';
import { getIcon } from '../utils/iconUtils';

function Dashboard() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <div className="min-h-screen bg-surface-100 dark:bg-surface-900">
      {/* Header */}
      <header className="bg-white dark:bg-surface-800 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                ConnectSphere
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-surface-600 hover:text-primary relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-accent rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  JS
                </div>
                <span className="text-sm font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Dashboard</h1>
          
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">
              <UserPlus className="w-4 h-4 mr-1" />
              Add New Contact
            </button>
            <button className="btn btn-secondary">
              <Upload className="w-4 h-4 mr-1" />
              Import
            </button>
            <button className="btn btn-secondary">
              <Download className="w-4 h-4 mr-1" />
              Export
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative">
            <div className="flex">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search contacts..." 
                  className="w-full pl-10 pr-4 py-2 border border-surface-300 dark:border-surface-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-surface-800"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-surface-400" />
              </div>
              <button 
                className="ml-2 px-3 py-2 bg-white dark:bg-surface-800 border border-surface-300 dark:border-surface-600 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700"
                onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              >
                <Filter className="w-4 h-4 text-surface-600" />
              </button>
              <div className="ml-2 relative">
                <button className="flex items-center px-3 py-2 bg-white dark:bg-surface-800 border border-surface-300 dark:border-surface-600 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700">
                  <span className="text-sm font-medium mr-1">All Contacts</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {showAdvancedSearch && (
              <div className="mt-2 p-4 bg-white dark:bg-surface-800 rounded-lg shadow-soft grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tags</label>
                  <select className="w-full p-2 border border-surface-300 dark:border-surface-600 rounded-lg">
                    <option>All Tags</option>
                    <option>Clients</option>
                    <option>Suppliers</option>
                    <option>Partners</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Contact</label>
                  <select className="w-full p-2 border border-surface-300 dark:border-surface-600 rounded-lg">
                    <option>Any time</option>
                    <option>Today</option>
                    <option>This week</option>
                    <option>This month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select className="w-full p-2 border border-surface-300 dark:border-surface-600 rounded-lg">
                    <option>Any status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Contacts" value="248" icon="Users" trend="+12%" />
          <StatCard title="Recent Additions" value="18" icon="UserPlus" trend="+5%" description="Last 30 days" />
          <StatCard title="Upcoming Birthdays" value="3" icon="Cake" trend="" description="Next 7 days" />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ContactList title="Recently Added" type="recent" className="lg:col-span-2" />
          <div className="space-y-6">
            <ContactList title="Pinned Contacts" type="pinned" />
            <TagsSummary />
          </div>
          <ActivityTimeline className="lg:col-span-3" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;