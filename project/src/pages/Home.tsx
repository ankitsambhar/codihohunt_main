import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Settings,
  BarChart3,
  Lock,
  MessageCircle,
  Phone,
  ChevronRight
} from 'lucide-react';

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to book a free consultation with Codigohunt Solutions."
  );

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [consultancyRef, consultancyInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    { 
      id: 'devops-consulting', 
      name: 'DevOps Consulting', 
      icon: Settings, 
      description: 'Streamline your development workflow with CI/CD, monitoring, and cloud solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'app-development', 
      name: 'App Development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'web-development', 
      name: 'Web Development', 
      icon: Code, 
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'cybersecurity', 
      name: 'Cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'from-red-500 to-orange-500'
    },
    { 
      id: 'hosting-deployment', 
      name: 'Cloud Hosting', 
      icon: Cloud, 
      description: 'Scalable cloud infrastructure and deployment solutions.',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      id: 'erp-cms', 
      name: 'ERP & CMS', 
      icon: Database, 
      description: 'Complete enterprise resource planning and content management systems.',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const consultancies = [
    { 
      id: 'aws-cloud', 
      name: 'AWS Cloud Consultancy', 
      icon: Cloud, 
      description: 'Expert guidance for AWS cloud migration and optimization.',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'devsecops', 
      name: 'DevSecOps Advisory', 
      icon: Lock, 
      description: 'Integrate security seamlessly into your development pipeline.',
      color: 'from-teal-500 to-green-500'
    },
    { 
      id: 'cybersecurity-risk', 
      name: 'Security & Compliance', 
      icon: Shield, 
      description: 'Comprehensive risk assessment and compliance frameworks.',
      color: 'from-red-500 to-pink-500'
    },
    { 
      id: 'business-strategy', 
      name: 'Business Strategy', 
      icon: BarChart3, 
      description: 'Strategic technology consulting for business growth.',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Award },
    { number: '10+', label: 'Global Clients', icon: Globe },
    { number: '20+', label: 'Industry Domains', icon: Users },
    { number: '98%', label: 'Client Retention', icon: TrendingUp }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Engineers with Enterprise Experience',
      description: 'Our team brings 5+ years of experience from leading technology companies, ensuring enterprise-grade solutions.',
      icon: Users
    },
    {
      title: 'End-to-End Product Ownership',
      description: 'We take complete responsibility for your project from conception to deployment and ongoing maintenance.',
      icon: CheckCircle
    },
    {
      title: 'Agile & Scalable Deployment',
      description: 'Using modern DevOps practices and cloud-native architectures for rapid, scalable deployments.',
      icon: TrendingUp
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-electric-pink via-azure to-powder-blue bg-clip-text text-transparent leading-tight block">
                  Empowering Digital
                </span>
                <span className="text-gray-900 dark:text-white block">
                  Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Driven by DevOps, Cloud, and Development Expertise. 
                <br className="hidden sm:block" />
                We build what your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.a
                href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </motion.a>
            </motion.div>

            {/* Floating Elements */}
            <div className="relative">
              <motion.div
                className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-r from-electric-pink to-azure rounded-full opacity-20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-10 right-1/4 w-12 h-12 bg-gradient-to-r from-azure to-powder-blue rounded-full opacity-20"
                animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Codigohunt</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={whyInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8"
          >
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-pink to-azure rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesInViewRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div ref={servicesRef} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-electric-pink hover:text-azure transition-colors group-hover:translate-x-1 transform transition-transform"
                  >
                    <span className="font-medium">Know More</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-azure text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section ref={consultancyRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={consultancyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expert <span className="bg-gradient-to-r from-electric-pink to-azure bg-clip-text text-transparent">Consultancy</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic technology consulting to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={consultancyInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8"
          >
            {consultancies.map((consultancy, index) => {
              const IconComponent = consultancy.icon;
              return (
                <motion.div
                  key={consultancy.id}
                  variants={fadeInUp}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${consultancy.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {consultancy.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {consultancy.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/consultancies/${consultancy.id}`}
                      className="inline-flex items-center justify-center space-x-2 text-electric-pink hover:text-azure transition-colors font-medium"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`https://wa.me/919461232921?text=${encodeURIComponent(`I'm interested in ${consultancy.name} services. Could you provide more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Talk to Consultant</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={consultancyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/consultancies"
              className="inline-flex items-center space-x-2 border-2 border-electric-pink text-electric-pink hover:bg-electric-pink hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              <span>View All Consultancies</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-pink via-azure to-powder-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our expertise can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919461232921"
                className="bg-white text-electric-pink px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/919461232921?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-pink px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;