import * as Icons from 'lucide-react';

export const getIcon = (iconName) => {
  // Check if the icon exists in Lucide, return it if found
  if (LucideIcons[iconName]) {
    return LucideIcons[iconName];
  }
  // Return a fallback function that renders nothing if icon not found
  return null;
    ? Icons[iconName] 
    : Icons.Smile;
};