import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  Phone,
  Code,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  Users,
  TrendingUp,
  Lock,
  BarChart3
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const services = [
    { id: 'devops-consulting', name: 'DevOps Consulting', icon: Settings },
    { id: 'app-development', name: 'App Development', icon: Smartphone },
    { id: 'web-development', name: 'Web Development', icon: Globe },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: TrendingUp },
    { id: 'hosting-deployment', name: 'Hosting & Deployment', icon: Cloud },
    { id: 'erp-cms', name: 'ERP & CMS Solutions', icon: Database },
    { id: 'custom-software', name: 'Custom Software', icon: Code },
    { id: 'it-support', name: 'IT Support & Managed Services', icon: Users }
  ];

  const consultancies = [
    { id: 'aws-cloud', name: 'AWS Cloud Consultancy', icon: Cloud },
    { id: 'devsecops', name: 'DevSecOps Advisory', icon: Lock },
    { id: 'cybersecurity-risk', name: 'Cybersecurity Risk & Compliance', icon: Shield },
    { id: 'business-strategy', name: 'Business Strategy & Growth', icon: BarChart3 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    if (!isMobile && window.innerWidth >= 1024) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-pink to-azure rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">
                Codigohunt
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-electric-pink ${
                isActive('/') ? 'text-electric-pink' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <IconComponent className="w-5 h-5 text-electric-pink" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {service.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Consultancies Dropdown */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('consultancies')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => handleDropdownToggle('consultancies')}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink transition-colors"
              >
                <span>Consultancies</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'consultancies' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'consultancies' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {consultancies.map((consultancy) => {
                        const IconComponent = consultancy.icon;
                        return (
                          <Link
                            key={consultancy.id}
                            to={`/consultancies/${consultancy.id}`}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <IconComponent className="w-5 h-5 text-azure" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {consultancy.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-electric-pink ${
                isActive('/about') ? 'text-electric-pink' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-electric-pink ${
                isActive('/contact') ? 'text-electric-pink' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Call Button */}
            <motion.a
              href="tel:+919461232921"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-electric-pink transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4 h-full">
              <Link
                to="/"
                className="block px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="dropdown-container">
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="flex items-center space-x-3 px-4 py-3 text-base text-gray-600 dark:text-gray-400 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <IconComponent className="w-5 h-5 text-electric-pink" />
                            <span>{service.name}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Consultancies Dropdown */}
              <div className="dropdown-container">
                <button
                  onClick={() => handleDropdownToggle('consultancies')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <span>Consultancies</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'consultancies' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'consultancies' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {consultancies.map((consultancy) => {
                        const IconComponent = consultancy.icon;
                        return (
                          <Link
                            key={consultancy.id}
                            to={`/consultancies/${consultancy.id}`}
                            className="flex items-center space-x-3 px-4 py-3 text-base text-gray-600 dark:text-gray-400 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <IconComponent className="w-5 h-5 text-azure" />
                            <span>{consultancy.name}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="block px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-electric-pink hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Call Button */}
              <a
                href="tel:+919461232921"
                className="flex items-center justify-center space-x-2 mx-4 mt-6 bg-gradient-to-r from-electric-pink to-azure text-white px-6 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 9461232921</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;