import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { getIcon } from '../utils/iconUtils';

const MainFeature = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); 
  const [demoMode, setDemoMode] = useState('search'); // 'search' or 'create'
  const [nextId, setNextId] = useState(6); // Starting ID for new contacts
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  
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
  const PlusIcon = getIcon('Plus');
  const PhoneIcon = getIcon('Phone');
  const UploadIcon = getIcon('Upload');
  const DownloadIcon = getIcon('Download');
  const FileSpreadsheetIcon = getIcon('FileSpreadsheet');
  
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

  // Export CSV function
  const exportContacts = () => {
    // Create CSV header
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Role', 'Category'];
    
    // Transform data to CSV format
    const dataToExport = demoContacts.map(contact => [
      contact.name || '',
      contact.email || '',
      contact.phone || '',
      contact.company || '',
      contact.role || '',
      contact.category || ''
    ]);
    
    // Combine header and data
    const csvContent = [
      headers.join(','),
      ...dataToExport.map(row => row.join(','))
    ].join('\n');
    
    // Create a Blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'connectsphere_contacts.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Contacts exported successfully!');
  };

  // Import/Export Demo Component
  const ImportExportDemo = () => {
    const [csvFile, setCsvFile] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [csvHeaders, setCsvHeaders] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isMapping, setIsMapping] = useState(false);
    const [columnMapping, setColumnMapping] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      category: ''
    });
    const [importedContacts, setImportedContacts] = useState([]);
    
    // Sample CSV data for demonstration
    const sampleCsvContent = `Name,Email,Phone,Company,Position,Group
John Smith,john.smith@company.com,555-123-4567,Acme Corp,Marketing Director,work
Jane Doe,jane.doe@gmail.com,555-987-6543,Family,Sister,family
Alex Johnson,alex@designstudio.co,555-234-5678,Design Studio,Lead Designer,work
Michael Wong,mike@personal.com,555-876-5432,City Hospital,Doctor,personal`;
    
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
    
    const handleDragLeave = () => {
      setIsDragging(false);
    };
    
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      
      const files = e.dataTransfer.files;
      if (files.length) {
        handleFile(files[0]);
      }
    };
    
    const handleFileInput = (e) => {
      if (e.target.files.length) {
        handleFile(e.target.files[0]);
      }
    };
    
    const handleFile = (file) => {
      if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
        toast.error('Please upload a CSV file');
        return;
      }
      
      setCsvFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        parseCSV(content);
      };
      reader.readAsText(file);
    };
    
    const parseCSV = (content) => {
      // Simple CSV parsing (in a real app, use a CSV parsing library)
      const lines = content.split('\n');
      if (lines.length > 0) {
        const headers = lines[0].split(',').map(h => h.trim());
        setCsvHeaders(headers);
        
        const data = [];
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = lines[i].split(',').map(v => v.trim());
            const row = {};
            headers.forEach((header, index) => {
              row[header] = values[index] || '';
            });
            data.push(row);
          }
        }
        setCsvData(data);
        setIsMapping(true);
        
        // Auto-map columns if headers match expected fields
        const mapping = { ...columnMapping };
        headers.forEach(header => {
          const lowerHeader = header.toLowerCase();
          if (lowerHeader.includes('name')) mapping.name = header;
          else if (lowerHeader.includes('email')) mapping.email = header;
          else if (lowerHeader.includes('phone')) mapping.phone = header;
          else if (lowerHeader.includes('company')) mapping.company = header;
          else if (lowerHeader.includes('position') || lowerHeader.includes('role') || lowerHeader.includes('title')) mapping.role = header;
          else if (lowerHeader.includes('group') || lowerHeader.includes('category') || lowerHeader.includes('type')) mapping.category = header;
        });
        setColumnMapping(mapping);
      }
    };
    
    const handleUseSampleData = () => {
      parseCSV(sampleCsvContent);
      setCsvFile({ name: 'sample_contacts.csv', size: sampleCsvContent.length });
    };
    
    return (
      <div className="py-4">
        {!isMapping ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface-50 dark:bg-surface-800/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Import Contacts from CSV</h3>
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                Upload a CSV file containing your contacts data. We'll help you map the columns to the right fields.
              </p>
              
              <div 
                className={`border-2 border-dashed p-8 rounded-lg text-center mb-6 ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-surface-300 dark:border-surface-700'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <FileSpreadsheetIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="mb-4 text-surface-700 dark:text-surface-300">
                  Drag & drop your CSV file here, or click to browse
                </p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileInput}
                  className="hidden"
                  id="csv-file-input"
                />
                <button
                  onClick={() => document.getElementById('csv-file-input').click()}
                  className="btn btn-primary mb-4"
                >
                  Select CSV File
                </button>
                <p className="text-xs text-surface-500">
                  Supported format: CSV
                </p>
              </div>
              
              <div className="text-center">
                <p className="mb-3 text-surface-600 dark:text-surface-400">
                  Don't have a CSV file ready?
                </p>
                <button
                  onClick={handleUseSampleData}
                  className="btn btn-secondary"
                >
                  Use Sample Data
                </button>
              </div>
              
              <div className="mt-8 border-t border-surface-200 dark:border-surface-700 pt-6">
                <h4 className="font-medium mb-2">Export Your Contacts</h4>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  Download your contacts data in CSV format for backup or to use in other applications.
                </p>
                <button
                  onClick={exportContacts}
                  className="btn btn-secondary"
                >
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface-50 dark:bg-surface-800/50 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Map CSV Columns</h3>
                <div className="text-sm text-surface-600 dark:text-surface-400">
                  File: {csvFile.name} ({Math.round(csvFile.size / 1024)} KB)
                </div>
              </div>
              
              <p className="text-surface-600 dark:text-surface-400 mb-6">
                We've detected {csvData.length} contacts in your CSV file. Please map the columns to the right fields:
              </p>
              
              <div className="space-y-4 mb-6">
                {['name', 'email', 'phone', 'company', 'role', 'category'].map((field) => (
                  <div key={field} className="grid grid-cols-5 gap-4 items-center">
                    <label className="font-medium text-right capitalize col-span-1">
                      {field === 'role' ? 'Role/Position' : field}
                      {field === 'name' || field === 'email' ? ' *' : ''}
                    </label>
                    <div className="col-span-4">
                      <select
                        value={columnMapping[field]}
                        onChange={(e) => setColumnMapping({...columnMapping, [field]: e.target.value})}
                        className="w-full px-3 py-2 border border-surface-300 dark:border-surface-700 rounded-md dark:bg-surface-800"
                      >
                        <option value="">-- Not Mapped --</option>
                        {csvHeaders.map((header, i) => (
                          <option key={i} value={header}>{header}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">Preview (First 3 Rows)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-surface-200 dark:border-surface-700">
                    <thead>
                      <tr className="bg-surface-100 dark:bg-surface-800">
                        {csvHeaders.map((header, i) => (
                          <th key={i} className="px-4 py-2 text-left text-xs font-medium text-surface-600 dark:text-surface-400 uppercase tracking-wider border-b border-surface-200 dark:border-surface-700">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {csvData.slice(0, 3).map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-surface-900' : 'bg-surface-50 dark:bg-surface-800'}>
                          {csvHeaders.map((header, j) => (
                            <td key={j} className="px-4 py-2 text-sm border-b border-surface-200 dark:border-surface-700">
                              {row[header]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setCsvFile(null);
                    setCsvData([]);
                    setCsvHeaders([]);
                    setIsMapping(false);
                  }}
                >
                  Back
                </button>
                
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    // Validate required fields
                    if (!columnMapping.name || !columnMapping.email) {
                      toast.error('Name and Email fields are required');
                      return;
                    }
                    
                    // Import the contacts
                    const newContacts = csvData.map((row, index) => ({
                      id: nextId + index,
                      name: row[columnMapping.name] || '',
                      email: row[columnMapping.email] || '',
                      phone: columnMapping.phone ? row[columnMapping.phone] || '' : '',
                      company: columnMapping.company ? row[columnMapping.company] || '' : '',
                      role: columnMapping.role ? row[columnMapping.role] || '' : '',
                      category: columnMapping.category ? row[columnMapping.category].toLowerCase() || 'work' : 'work'
                    }));
                    
                    // Add to demo contacts
                    demoContacts.push(...newContacts);
                    setNextId(nextId + newContacts.length);
                    
                    // Set search results to show imported contacts
                    setSearchResults(newContacts);
                    setImportedContacts(newContacts);
                    
                    // Reset import state
                    setCsvFile(null);
                    setCsvData([]);
                    setCsvHeaders([]);
                    setIsMapping(false);
                    
                    // Show success message
                    toast.success(`Successfully imported ${newContacts.length} contacts!`);
                    
                    // Switch to search mode
                    setDemoMode('search');
                  }}
                >
                  Import {csvData.length} Contacts
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Contact Create Demo Component
  const ContactCreateDemo = () => {
    const [newContact, setNewContact] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      category: 'work'
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewContact({
        ...newContact,
        [name]: value
      });
      
      // Clear error for this field when user types
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    };

    const validateForm = () => {
      const newErrors = {};
      
      if (!newContact.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!newContact.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(newContact.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!newContact.company.trim()) {
        newErrors.company = 'Company is required';
      }
      
      if (!newContact.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        toast.error("Please fix the errors in the form");
        return;
      }
      
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        const newContactWithId = { 
          ...newContact, 
          id: nextId 
        };
        
        // Add to demo contacts
        demoContacts.push(newContactWithId);
        setNextId(nextId + 1);
        
        // Set this contact as current for viewing
        setCurrentContact(newContactWithId);
        
        // Reset form
        setNewContact({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          category: 'work'
        });
        
        setIsSubmitting(false);
        toast.success("Contact added successfully!");
        
        // Switch to search mode to see the contact
        setDemoMode('search');
        setSearchQuery(newContactWithId.name);
        
        // Trigger search for the new contact
        const filtered = demoContacts.filter(contact => {
          const matchesSearch = 
            contact.name.toLowerCase().includes(newContactWithId.name.toLowerCase());
          const matchesCategory = activeTab === 'all' || contact.category === activeTab;
          return matchesSearch && matchesCategory;
        });
        
        setSearchResults(filtered);
      }, 800);
    };

    return (
      <div className="py-4">
        {/* Contact creation form implemented below */}
        {currentContact ? (
          <div className="mb-8">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 text-green-700">
                    Contact {currentContact.name} was added successfully! You can search for it above.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentContact(null)}
              className="btn btn-primary"
            >
              Add Another Contact
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500 bg-red-50' : 'border-surface-300 dark:border-surface-700'} dark:bg-surface-800`}
                  placeholder="John Doe"
                  value={newContact.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500 bg-red-50' : 'border-surface-300 dark:border-surface-700'} dark:bg-surface-800`}
                  placeholder="john@example.com"
                  value={newContact.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500 bg-red-50' : 'border-surface-300 dark:border-surface-700'} dark:bg-surface-800`}
                  placeholder="(123) 456-7890"
                  value={newContact.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Company *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${errors.company ? 'border-red-500 bg-red-50' : 'border-surface-300 dark:border-surface-700'} dark:bg-surface-800`}
                  placeholder="Acme Inc."
                  value={newContact.company}
                  onChange={handleInputChange}
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full px-3 py-2 border border-surface-300 dark:border-surface-700 rounded-md dark:bg-surface-800"
                  placeholder="Marketing Manager"
                  value={newContact.role}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 border border-surface-300 dark:border-surface-700 rounded-md dark:bg-surface-800"
                  value={newContact.category}
                  onChange={handleInputChange}
                >
                  <option value="work">Work</option>
                  <option value="family">Family</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Contact..." : "Add Contact"}
              </button>
            </div>
          </form>
        )}
      </div>
    );
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
                className={`btn ${demoMode === 'search' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setDemoMode('search')}
              >
                <SearchIcon className="w-4 h-4 mr-2" />
                Find Contacts
              </button>
              <button 
                className={`btn ${demoMode === 'create' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setDemoMode('create')}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Create Contact
              </button>
              <button 
                className={`btn ${demoMode === 'import' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setDemoMode('import')}
              >
                <UploadIcon className="w-4 h-4 mr-2" />
                Import/Export
              </button>
            </div>
          </div>
          
          {demoMode === 'search' ? (
            <>
              <div className="flex space-x-2 mb-6">
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
                              {contact.phone && (
                                <div className="mt-2 flex items-center text-sm text-surface-600 dark:text-surface-400">
                                  <PhoneIcon className="w-4 h-4 mr-1" />
                                  <span>{contact.phone}</span>
                                </div>
                              )}
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
            </>
          ) : (
            <div className="mt-6">
              <div className="max-w-3xl mx-auto">
                <div className="bg-surface-50 dark:bg-surface-800/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Create New Contact</h3>
                  <p className="text-surface-600 dark:text-surface-400 mb-4">
                    Fill in the form below to add a new contact to your demo contact list.
                  </p>
                  <ContactCreateDemo />
                </div>
              </div>
          ) : demoMode === 'import' ? (
            <ImportExportDemo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainFeature;