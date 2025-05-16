import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../utils/iconUtils';
import MainFeature from '../components/MainFeature';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const SearchIcon = getIcon('Search');
  const TagsIcon = getIcon('Tags');
  const ClockIcon = getIcon('Clock');
  const LayersIcon = getIcon('Layers');
  const BellIcon = getIcon('Bell');
  const ChevronRightIcon = getIcon('ChevronRight');
  const SunIcon = getIcon('Sun');
  const MoonIcon = getIcon('Moon');
  const MenuIcon = getIcon('Menu');
  const XIcon = getIcon('X');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && prefersDark));
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const features = [
    {
      title: "Contact Organization",
      description: "Store all your contacts in one place with comprehensive profile information including custom fields and tags.",
      icon: "Users"
    },
    {
      title: "Smart Categorization",
      description: "Organize contacts with custom tags, groups, and relationship types for better segmentation.",
      icon: "Tags"
    },
    {
      title: "Powerful Search",
      description: "Find any contact instantly with our advanced search capabilities across all contact attributes.",
      icon: "Search"
    },
    {
      title: "Interaction History",
      description: "Track all your interactions with each contact, including calls, emails, and meetings.",
      icon: "Clock"
    },
    {
      title: "Smart Integration",
      description: "Seamlessly integrates with your email, calendar, and other productivity tools.",
      icon: "Layers"
    },
    {
      title: "Reminders & Alerts",
      description: "Set follow-up reminders and never miss an important contact touchpoint.",
      icon: "Bell"
    }
  ];
  
  const testimonials = [
    {
      quote: "ConnectSphere has transformed how I manage my business relationships. I can easily find and keep track of everyone in my network.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp"
    },
    {
      quote: "As a sales professional, my contact list is my lifeline. ConnectSphere helps me stay organized and never miss a follow-up.",
      author: "Michael Chen",
      position: "Sales Executive",
      company: "Global Solutions"
    },
    {
      quote: "The categorization features are brilliant! I can separate my professional contacts from personal ones while keeping everything in one place.",
      author: "Emma Rodriguez",
      position: "Freelance Designer",
      company: "Self-employed"
    }
  ];
  
  const stats = [
    { value: "5,000+", label: "Contacts Storage" },
    { value: "Unlimited", label: "Custom Fields" },
    { value: "50+", label: "Smart Integrations" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-surface-900/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-primary text-white font-bold text-xl rounded-lg w-10 h-10 flex items-center justify-center mr-2">
                  C
                </div>
                <span className="font-bold text-xl dark:text-white">ConnectSphere</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#testimonials" className="font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#demo" className="font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white transition-colors">
                Try Demo
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-surface-600 hover:text-primary hover:bg-surface-100 dark:text-surface-400 dark:hover:text-white dark:hover:bg-surface-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              
              <div className="hidden md:flex space-x-2">
                <button className="btn btn-secondary">
                  Log In
                </button>
                <button className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              
              <button 
                className="md:hidden p-2 rounded-md text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-800"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white dark:bg-surface-900 shadow-lg"
            >
              <div className="container-custom py-4 space-y-4">
                <a 
                  href="#features" 
                  className="block py-2 font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#testimonials" 
                  className="block py-2 font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a 
                  href="#demo" 
                  className="block py-2 font-medium text-surface-700 hover:text-primary dark:text-surface-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try Demo
                </a>
                
                <div className="pt-4 border-t border-surface-200 dark:border-surface-700 flex space-x-3">
                  <button className="btn btn-secondary flex-1">
                    Log In
                  </button>
                  <button className="btn btn-primary flex-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/5 dark:from-primary/5 dark:to-secondary/10"></div>
          
          <div className="container-custom relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Organize Your Network, 
                    <span className="text-primary"> Effortlessly</span>
                  </h1>
                  
                  <p className="text-xl text-surface-700 dark:text-surface-300 mb-8 max-w-xl">
                    ConnectSphere helps you manage all your contacts in one place with powerful organization tools, detailed profiles, and interaction tracking.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#demo" className="btn btn-primary text-lg py-3 px-8">
                      Try Demo
                    </a>
                    <button className="btn btn-secondary text-lg py-3 px-8">
                      Sign Up Free
                    </button>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10 bg-white dark:bg-surface-800 rounded-2xl shadow-soft overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="ConnectSphere Dashboard" 
                      className="w-full rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                      <p className="text-surface-700 dark:text-surface-300">ConnectSphere Contact Dashboard</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-surface-50 dark:bg-surface-900">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything You Need to Manage Your Contacts
              </h2>
              <p className="text-xl text-surface-600 dark:text-surface-400">
                ConnectSphere provides powerful tools to help you organize, find, and stay in touch with your network.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const FeatureIcon = getIcon(feature.icon);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <FeatureIcon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      
                      <p className="text-surface-600 dark:text-surface-400 mb-6">
                        {feature.description}
                      </p>
                      
                      <div className="mt-auto">
                        <a href="#demo" className="inline-flex items-center font-medium text-primary hover:text-primary-dark">
                          Learn more
                          <ChevronRightIcon className="ml-1 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-surface-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Trusted by Professionals Worldwide
              </h2>
              <p className="text-xl text-surface-600 dark:text-surface-400">
                Here's what our users say about ConnectSphere
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="mb-6 text-surface-700 dark:text-surface-300">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="bg-surface-200 dark:bg-surface-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold">{testimonial.author.charAt(0)}</span>
                    </div>
                    
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-surface-600 dark:text-surface-400">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Getting Started Steps */}
        <section className="py-16 md:py-24 bg-surface-50 dark:bg-surface-900">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-surface-600 dark:text-surface-400">
                Three simple steps to organize your network
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: 1, title: "Create Your Account", desc: "Sign up for free and set up your profile in just seconds." },
                { step: 2, title: "Import Your Contacts", desc: "Easily import contacts from email, spreadsheets, or other services." },
                { step: 3, title: "Organize & Categorize", desc: "Group your contacts and start managing your network effortlessly." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-card p-8 relative z-10">
                    <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 mt-4">{item.title}</h3>
                    <p className="text-surface-600 dark:text-surface-400">{item.desc}</p>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-0">
                      <ChevronRightIcon className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn btn-primary text-lg py-3 px-8">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section id="demo" className="py-16 md:py-24 bg-white dark:bg-surface-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Try ConnectSphere Demo
              </h2>
              <p className="text-xl text-surface-600 dark:text-surface-400">
                Experience how easy it is to search and manage your contacts
              </p>
            </div>
            
            <MainFeature />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-900 text-surface-300 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link to="/" className="flex items-center mb-6">
                <div className="bg-primary text-white font-bold text-xl rounded-lg w-10 h-10 flex items-center justify-center mr-2">
                  C
                </div>
                <span className="font-bold text-xl text-white">ConnectSphere</span>
              </Link>
              
              <p className="mb-6">
                Organize your network, effortlessly track interactions, and build stronger relationships.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", icon: "Twitter" },
                  { name: "Facebook", icon: "Facebook" },
                  { name: "Instagram", icon: "Instagram" },
                  { name: "LinkedIn", icon: "Linkedin" }
                ].map((social, index) => {
                  const SocialIcon = getIcon(social.icon) || (() => <span>{social.name[0]}</span>);
                  return (
                  <a 
                    key={index}
                    href="#" className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="sr-only">{social.name}</span>
                    <SocialIcon className="w-5 h-5" />
                  </a>
                )})}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                {["Features", "Pricing", "Integrations", "Enterprise", "Security"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                {["Documentation", "Guides", "API Reference", "Blog", "Community"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {["About Us", "Careers", "Partners", "Contact", "Legal"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-surface-800 text-sm text-surface-500">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2023 ConnectSphere. All rights reserved.</p>
              
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;