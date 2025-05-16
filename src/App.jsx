import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/calendar" element={<NotFound />} />
            <Route path="/tasks" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-16"
      />
    </>
  );
}

export default App;