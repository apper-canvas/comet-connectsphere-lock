// This file contains sample data used throughout the application for demonstration purposes

export const contacts = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    phone: '+1 (555) 123-4567', 
    company: 'Acme Inc.', 
    title: 'Marketing Director',
    tags: ['Client', 'VIP'],
    lastContacted: '2023-06-15',
    notes: 'Met at industry conference. Interested in our premium plan.'
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'mchen@techcorp.com', 
    phone: '+1 (555) 987-6543', 
    company: 'TechCorp', 
    title: 'CTO',
    tags: ['Supplier'],
    lastContacted: '2023-06-10',
    notes: 'Provides cloud infrastructure services. Renewal discussion in August.'
  },
  { 
    id: 3, 
    name: 'Emma Rodriguez', 
    email: 'emma.r@designstudio.co', 
    phone: '+1 (555) 456-7890', 
    company: 'Design Studio', 
    title: 'Creative Director',
    tags: ['Partner', 'Creative'],
    lastContacted: '2023-06-05',
    notes: 'Collaborating on website redesign project.'
  },
  { 
    id: 4, 
    name: 'James Wilson', 
    email: 'jwilson@finance.org', 
    phone: '+1 (555) 789-0123', 
    company: 'Finance Group', 
    title: 'Investment Advisor',
    tags: ['Client'],
    lastContacted: '2023-05-28',
    notes: 'Looking for investment opportunities in tech sector.'
  },
  { 
    id: 5, 
    name: 'Olivia Park', 
    email: 'opark@healthcare.med', 
    phone: '+1 (555) 234-5678', 
    company: 'Healthcare Solutions', 
    title: 'Procurement Manager',
    tags: ['Prospect'],
    lastContacted: '2023-05-20',
    notes: 'Initial meeting scheduled for next month.'
  }
];

export const activities = [
  { 
    id: 1, 
    type: 'email', 
    contact: contacts[0],
    description: 'Sent follow-up email about project proposal', 
    date: '2023-06-15T14:30:00',
    notes: 'Waiting for response on pricing options.'
  },
  { 
    id: 2, 
    type: 'call', 
    contact: contacts[1],
    description: 'Discussed contract renewal terms', 
    date: '2023-06-14T10:15:00',
    duration: 15, // minutes
    notes: 'They're interested in upgrading to enterprise plan.'
  },
  { 
    id: 3, 
    type: 'meeting', 
    contact: contacts[2],
    description: 'Weekly sync with Design Studio team', 
    date: '2023-06-13T14:30:00',
    duration: 60, // minutes
    notes: 'Reviewed latest mockups. Need to follow up on timeline adjustments.'
  }
];

export const tagCategories = [
  {
    id: 1,
    name: 'Relationship Type',
    tags: ['Client', 'Prospect', 'Partner', 'Supplier', 'Competitor']
  },
  {
    id: 2,
    name: 'Industry',
    tags: ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail']
  },
  {
    id: 3,
    name: 'Status',
    tags: ['Active', 'Inactive', 'Lead', 'Former']
  },
  {
    id: 4,
    name: 'Priority',
    tags: ['High', 'Medium', 'Low']
  }
];