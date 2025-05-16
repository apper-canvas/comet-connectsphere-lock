import * as Icons from 'lucide-react';

export const getIcon = (iconName) => {
  // Check if the icon exists in Lucide, return it if found
  return Icons[iconName] 
    ? Icons[iconName]
    : Icons.Smile;
};