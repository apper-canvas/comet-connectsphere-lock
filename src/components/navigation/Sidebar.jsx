import { NavLink } from 'react-router-dom';
import { getIcon } from '../../utils/iconUtils';

const Sidebar = () => {
  const navItems = [
    {
      name: 'Dashboard',
      icon: 'LayoutDashboard',
      path: '/dashboard'
    },
    {
      name: 'Contacts',
      icon: 'Users',
      path: '/contacts'
    },
    {
      name: 'Calendar',
      icon: 'Calendar',
      path: '/calendar'
    },
    {
      name: 'Tasks',
      icon: 'CheckSquare',
      path: '/tasks'
    },
    {
      name: 'Settings',
      icon: 'Settings',
      path: '/settings'
    }
  ];

  return (
    <aside className="w-64 bg-white dark:bg-surface-800 shadow-sm h-full fixed left-0 top-0 z-10 transition-all duration-300 ease-in-out">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-2xl">
            C
          </div>
          <h1 className="text-xl font-bold text-surface-900 dark:text-white">
            ConnectSphere
          </h1>
        </div>

        <nav className="space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
                }`
              }
            >
              <span className="mr-3">
                {getIcon(item.icon, 'w-5 h-5')}
              </span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;