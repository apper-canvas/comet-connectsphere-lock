export const dummyContacts = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Inc.',
    position: 'Sales Manager',
    tags: ['client', 'sales'],
    addedDate: '2023-05-15T10:30:00Z',
    lastContact: '2023-07-01T14:45:00Z',
    birthday: '1985-03-12T00:00:00Z',
    notes: 'Key decision maker for the Smith project',
    favorite: true
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Tech Solutions',
    position: 'CTO',
    tags: ['client', 'tech', 'vip'],
    addedDate: '2023-04-10T08:15:00Z',
    lastContact: '2023-07-10T11:20:00Z',
    birthday: '1990-08-24T00:00:00Z',
    notes: 'Interested in our enterprise solution',
    favorite: true
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'mike.chen@example.com',
    phone: '+1 (555) 234-5678',
    company: 'Global Partners',
    position: 'Marketing Director',
    tags: ['partner', 'marketing'],
    addedDate: '2023-06-22T13:45:00Z',
    lastContact: '2023-07-05T09:30:00Z',
    birthday: '1988-11-05T00:00:00Z',
    notes: 'Collaboration on the Q4 campaign',
    favorite: false
  },
  {
    id: 4,
    name: 'Emily Wilson',
    email: 'emily.w@example.com',
    phone: '+1 (555) 345-6789',
    company: 'Creative Design',
    position: 'Lead Designer',
    tags: ['vendor', 'design'],
    addedDate: '2023-07-08T16:20:00Z',
    lastContact: '2023-07-12T15:10:00Z',
    birthday: '1992-01-30T00:00:00Z',
    notes: 'Working on our new brand materials',
    favorite: false
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david.kim@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Financial Experts',
    position: 'Financial Advisor',
    tags: ['service', 'finance'],
    addedDate: '2023-03-30T09:15:00Z',
    lastContact: '2023-06-28T13:25:00Z',
    birthday: '1979-06-18T00:00:00Z',
    notes: 'Handles our tax planning',
    favorite: false
  },
  {
    id: 6,
    name: 'Jennifer Lee',
    email: 'jennifer.l@example.com',
    phone: '+1 (555) 567-8901',
    company: 'Legal Partners',
    position: 'Attorney',
    tags: ['service', 'legal'],
    addedDate: '2023-02-15T11:45:00Z',
    lastContact: '2023-07-07T14:30:00Z',
    birthday: '1975-09-22T00:00:00Z',
    notes: 'IP law specialist',
    favorite: true
  },
  {
    id: 7,
    name: 'Robert Garcia',
    email: 'robert.g@example.com',
    phone: '+1 (555) 678-9012',
    company: 'Supply Chain LLC',
    position: 'Operations Manager',
    tags: ['vendor', 'operations'],
    addedDate: '2023-07-11T14:10:00Z',
    lastContact: '2023-07-11T14:10:00Z',
    birthday: '1982-12-03T00:00:00Z',
    notes: 'Main contact for shipping logistics',
    favorite: false
  },
  {
    id: 8,
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    phone: '+1 (555) 789-0123',
    company: 'InnoTech',
    position: 'Product Manager',
    tags: ['client', 'tech'],
    addedDate: '2023-07-01T10:05:00Z',
    lastContact: '2023-07-10T16:45:00Z',
    birthday: '1991-04-15T00:00:00Z',
    notes: 'Working on the new product integration',
    favorite: false
  },
  {
    id: 9,
    name: 'James Anderson',
    email: 'james.a@example.com',
    phone: '+1 (555) 890-1234',
    company: 'Media Group',
    position: 'PR Specialist',
    tags: ['partner', 'media'],
    addedDate: '2023-07-03T13:30:00Z',
    lastContact: '2023-07-05T11:15:00Z',
    birthday: '1987-07-29T00:00:00Z',
    notes: 'Handles our press releases',
    favorite: false
  },
  {
    id: 10,
    name: 'Patricia Martinez',
    email: 'patricia.m@example.com',
    phone: '+1 (555) 901-2345',
    company: 'HR Solutions',
    position: 'HR Consultant',
    tags: ['service', 'hr'],
    addedDate: '2023-05-20T09:40:00Z',
    lastContact: '2023-06-25T10:30:00Z',
    birthday: '1989-02-19T00:00:00Z',
    notes: 'Advises on recruiting and HR policies',
    favorite: true
  }
];

export const dummyActivities = [
  {
    id: 1,
    type: 'call',
    contact: 'John Smith',
    description: 'Discussed project timeline and deliverables',
    date: '2023-07-12T10:30:00Z'
  },
  {
    id: 2,
    type: 'email',
    contact: 'Sarah Johnson',
    description: 'Sent proposal for the new enterprise solution',
    date: '2023-07-11T15:45:00Z'
  },
  {
    id: 3,
    type: 'meeting',
    contact: 'Lisa Wang',
    description: 'Product integration kickoff meeting',
    date: '2023-07-10T13:00:00Z'
  },
  {
    id: 4,
    type: 'note',
    contact: 'Michael Chen',
    description: 'Added notes about marketing campaign requirements',
    date: '2023-07-09T14:20:00Z'
  },
  {
    id: 5,
    type: 'task',
    contact: 'Robert Garcia',
    description: 'Follow up about shipping schedule changes',
    date: '2023-07-08T09:15:00Z',
    dueDate: '2023-07-15T00:00:00Z'
  }
];

export const dummyTags = [
  { name: 'client', count: 4, color: '#4361ee' },
  { name: 'vendor', count: 2, color: '#3f37c9' },
  { name: 'partner', count: 2, color: '#f72585' },
  { name: 'service', count: 3, color: '#4cc9f0' },
  { name: 'tech', count: 2, color: '#7209b7' },
  { name: 'sales', count: 1, color: '#4d908e' },
  { name: 'marketing', count: 1, color: '#f8961e' },
  { name: 'design', count: 1, color: '#f3722c' },
  { name: 'vip', count: 1, color: '#f94144' }
];