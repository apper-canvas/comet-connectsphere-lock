import { format, isBefore, addDays, parseISO, differenceInDays } from 'date-fns';
import { dummyContacts } from './dummyData';

/**
 * Gets the total number of contacts
 * @returns {number} Total contact count
 */
export const getTotalContacts = () => {
  return dummyContacts.length;
};

/**
 * Gets the number of contacts added in the last X days
 * @param {number} days Number of days to look back
 * @returns {Object} Object containing count and percentage change
 */
export const getRecentAdditions = (days = 30) => {
  const today = new Date();
  const cutoffDate = addDays(today, -days);
  
  const recentContacts = dummyContacts.filter(contact => {
    const addedDate = parseISO(contact.addedDate);
    return isBefore(cutoffDate, addedDate);
  });

  // Calculate trend (simulate previous period)
  const previousPeriodCutoff = addDays(cutoffDate, -days);
  const previousPeriodContacts = dummyContacts.filter(contact => {
    const addedDate = parseISO(contact.addedDate);
    return isBefore(previousPeriodCutoff, addedDate) && isBefore(addedDate, cutoffDate);
  });

  const percentChange = previousPeriodContacts.length > 0 
    ? Math.round((recentContacts.length - previousPeriodContacts.length) / previousPeriodContacts.length * 100)
    : 0;

  return {
    count: recentContacts.length,
    trend: percentChange >= 0 ? `+${percentChange}%` : `${percentChange}%`,
    description: `Last ${days} days`
  };
};

/**
 * Gets upcoming birthdays within the next X days
 * @param {number} days Number of days to look ahead
 * @returns {Object} Object containing count and list of contacts
 */
export const getUpcomingBirthdays = (days = 7) => {
  const today = new Date();
  const endDate = addDays(today, days);
  
  const upcomingBirthdays = dummyContacts.filter(contact => {
    if (!contact.birthday) return false;
    
    const birthdayDate = parseISO(contact.birthday);
    const thisYearBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    
    // If birthday has passed this year, check for next year
    if (isBefore(thisYearBirthday, today)) {
      thisYearBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    return !isBefore(thisYearBirthday, today) && isBefore(thisYearBirthday, endDate);
  });

  return { count: upcomingBirthdays.length, description: `Next ${days} days` };
};