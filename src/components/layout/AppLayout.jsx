import { Outlet } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-surface-50 dark:bg-surface-900">
      <Sidebar />
      <div className="flex-1 ml-64">
        <main className="container-custom p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

