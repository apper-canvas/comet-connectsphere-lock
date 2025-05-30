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
  CheckSquare,
  Building,
  Briefcase,
  Tags,
  Sun,
  Moon,
  Cake,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  FileSpreadsheet,
  ArrowLeft,
  Layers
} from 'lucide-react';

// Define the Icons object with all available icons
const Icons = {
  Home: (className) => (props) => <Home className={className} {...props} />,
  User: (className) => (props) => <User className={className} {...props} />,
  Users: (className) => (props) => <Users className={className} {...props} />,
  UserPlus: (className) => (props) => <UserPlus className={className} {...props} />,
  UserX: (className) => (props) => <UserX className={className} {...props} />,
  Settings: (className) => (props) => <Settings className={className} {...props} />,
  Bell: (className) => (props) => <Bell className={className} {...props} />,
  Calendar: (className) => (props) => <Calendar className={className} {...props} />,
  Mail: (className) => (props) => <Mail className={className} {...props} />,
  Phone: (className) => (props) => <Phone className={className} {...props} />,
  Star: (className) => (props) => <Star className={className} {...props} />,
  Plus: (className) => (props) => <Plus className={className} {...props} />,
  Search: (className) => (props) => <Search className={className} {...props} />,
  Heart: (className) => (props) => <Heart className={className} {...props} />,
  ChevronRight: (className) => (props) => <ChevronRight className={className} {...props} />,
  ChevronDown: (className) => (props) => <ChevronDown className={className} {...props} />,
  X: (className) => (props) => <X className={className} {...props} />,
  Clock: (className) => (props) => <Clock className={className} {...props} />,
  Loader2: (className) => (props) => <Loader2 className={className} {...props} />,
  RefreshCw: (className) => (props) => <RefreshCw className={className} {...props} />,
  LayoutDashboard: (className) => (props) => <LayoutDashboard className={className} {...props} />,
  Grid: (className) => (props) => <Grid className={className} {...props} />,
  List: (className) => (props) => <List className={className} {...props} />,
  CheckSquare: (className) => (props) => <CheckSquare className={className} {...props} />,
  Edit: (className) => (props) => <Edit className={className} {...props} />,
  MoreHorizontal: (className) => (props) => <MoreHorizontal className={className} {...props} />,
  Menu: (className) => (props) => <Menu className={className} {...props} />,
  Download: (className) => (props) => <Download className={className} {...props} />,
  Save: (className) => (props) => <Save className={className} {...props} />,
  FileText: (className) => (props) => <FileText className={className} {...props} />,
  Image: (className) => (props) => <Image className={className} {...props} />,
  Link: (className) => (props) => <Link className={className} {...props} />,
  Share: (className) => (props) => <Share className={className} {...props} />,
  MessageSquare: (className) => (props) => <MessageSquare className={className} {...props} />,
  Send: (className) => (props) => <Send className={className} {...props} />,
  Building: (className) => (props) => <Building className={className} {...props} />,
  Briefcase: (className) => (props) => <Briefcase className={className} {...props} />,
  Tags: (className) => (props) => <Tags className={className} {...props} />,
  Sun: (className) => (props) => <Sun className={className} {...props} />,
  Moon: (className) => (props) => <Moon className={className} {...props} />,
  Minus: (className) => (props) => <Minus className={className} {...props} />,
  Check: (className) => (props) => <Check className={className} {...props} />,
  Cake: (className) => (props) => <Cake className={className} {...props} />,
  Twitter: (className) => (props) => <Twitter className={className} {...props} />,
  Facebook: (className) => (props) => <Facebook className={className} {...props} />,
  Instagram: (className) => (props) => <Instagram className={className} {...props} />,
  Linkedin: (className) => (props) => <Linkedin className={className} {...props} />,
  FileSpreadsheet: (className) => (props) => <FileSpreadsheet className={className} {...props} />,
  ArrowLeft: (className) => (props) => <ArrowLeft className={className} {...props} />,
  Layers: (className) => (props) => <Layers className={className} {...props} />
};

export const getIcon = (iconName, className = "") => {
  return Icons[iconName] ? Icons[iconName](className) : null;
};