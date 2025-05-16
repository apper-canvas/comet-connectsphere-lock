import { useState, useEffect } from 'react';
import { getTotalContacts, getRecentAdditions, getUpcomingBirthdays } from '../utils/statsData';

/**
 * Hook to fetch and format dashboard statistics
 * @returns {Object} Stats data and loading state
 */
const useStatsData = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const totalContacts = getTotalContacts();
        const recentAdditions = getRecentAdditions(30);
        const upcomingBirthdays = getUpcomingBirthdays(7);
        
        setStats({
          totalContacts: { value: totalContacts, trend: '+12%' },
          recentAdditions,
          upcomingBirthdays
        });
      } catch (err) {
        setError('Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { stats, loading, error };
};

export default useStatsData;