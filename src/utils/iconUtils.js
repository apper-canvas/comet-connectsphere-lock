import React from 'react';
import { 
  Home, 
  User, 
  Users,
  UserPlus,
  UserX,
  Settings, 
  Bell, 
  Calendar, 
  Mail, 
  Phone, 
  Star, 
  Plus, 
  Minus, 
  Check, 
  X, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Clock,
  Loader2, 
  Search, 
  Trash, 
  Edit, 
  Eye, 
  Download, 
  Upload, 
  Save, 
  FileText, 
  Image, 
  Link, 
  Share, 
  Heart, 
  MessageSquare, 
  Send, 
  MoreHorizontal, 
  Menu, 
  RefreshCw,
  LayoutDashboard,
  Grid,
  List,
  CheckSquare } from 'lucide-react';

// Helper function to render icons with className
const renderIcon = (Icon, className = "") => {
  return <Icon className={className} />;
};

// Define the Icons object with all available icons
const Icons = {
  Home: (className) => renderIcon(Home, className),
  User: (className) => renderIcon(User, className),
  Users: (className) => renderIcon(Users, className),
  UserPlus: (className) => renderIcon(UserPlus, className),
  UserX: (className) => renderIcon(UserX, className),
  Settings: (className) => renderIcon(Settings, className),
  Calendar: (className) => renderIcon(Calendar, className),
  Loader2: (className) => renderIcon(Loader2, className),
  RefreshCw: (className) => renderIcon(RefreshCw, className),
  LayoutDashboard: (className) => renderIcon(LayoutDashboard, className),
  Grid: (className) => renderIcon(Grid, className),
  List: (className) => renderIcon(List, className),
  CheckSquare: (className) => renderIcon(CheckSquare, className)
};

export const getIcon = (iconName, className) => {
  // Check if the icon exists in Lucide, return it if found
  return Icons[iconName] ? Icons[iconName](className) : renderIcon(User, className);
};