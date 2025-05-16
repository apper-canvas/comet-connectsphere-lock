import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getIcon } from '../utils/iconUtils';

const NotFound = () => {
  const HomeIcon = getIcon('Home');
  const ArrowLeft = getIcon('ArrowLeft');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-8 text-9xl font-bold text-primary"
        >
          404
        </motion.div>
        
        <h1 className="mb-4 text-3xl font-bold text-surface-800 dark:text-surface-100">
          Page Not Found
        </h1>
        
        <p className="mb-8 text-surface-600 dark:text-surface-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/"
          className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 text-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;