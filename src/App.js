import React, { useState, useEffect } from 'react';
import logo from './Bala_Websitelogo3.png'
import bgImage from '../src/Assets/indian-city-buildings-scene.jpg';
import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaCalendarAlt,
  FaClock,
  FaPlus,
  FaSearch,
  FaRoad,       // for 🛣️ (Outstation One-Way)
  FaPlane, 
} from 'react-icons/fa';
import Guranty from './Assets/gurinete.png'
import clean from './Assets/clean.png'
import support from './Assets/service.png'
import rate from './Assets/rate.png'
import ServiceBg from './Assets/service1.png'
import Fclogo from '../src/Assets/Untitled-1-removebg-preview.png'
import OneWayIcon from './Assets/taxi-car-front-view-black-auto-icon-isolated-white-background_53562-15344.jpg';
import RoundTripIcon from './Assets/service004.png';
import AirportIcon from './Assets/service005.png';
import RentalIcon from './Assets/service001.png';
import CorporateIcon from './Assets/service006.png';
import SightseeingIcon from './Assets/parking-valet-silhouette-icon-clipart-600nw-1366518944.webp';
import sedan from './Assets/sedan.png'
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { MdNavigation, MdDownload } from 'react-icons/md';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'vehicles':
        return <VehiclesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

// Header Component
const Header = ({ currentPage, navigateTo, isMobileMenuOpen, toggleMobileMenu }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'concierge-bell' },
    { id: 'vehicles', label: 'Vehicles', icon: 'car' },
    { id: 'about', label: 'About', icon: 'info-circle' },
    { id: 'contact', label: 'Contact', icon: 'phone' },
    { id: 'blog', label: 'Blog', icon: 'newspaper' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
    <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
  <img 
    src={logo} 
    alt="Bala Travels Logo" 
    className="h-12 w-28 object-contain mr-3" 
  />
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BestPricesSection/>
      <FeaturesSection />
      
      
      {/* <AdventureCTASection/>
      <MinimalAdventureCTA/> */}
      <DarkAdventureCTA />
      <TestimonialsSection/>
      <WhyChooseUs/>
    </div>
  );
};

// Hero Section with Booking Form
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('outstation-one-way');
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    pickupTime: ''
  });

  const tabs = [
    { id: 'outstation-one-way', label: 'Outstation One-Way', icon:<FaRoad /> },
    { id: 'outstation-round-trip', label: 'Outstation Round-Trip', icon: <FaExchangeAlt /> },
    { id: 'airport-transfer', label: 'Airport Transfers', icon: <FaPlane />  },
    { id: 'hourly-rental', label: 'Hourly Rentals', icon: <FaClock />, isNew: true }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSwapLocations = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    alert('Searching for available cabs...');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) {
    return { display: "", dayName: "" }; // nothing selected yet
  }

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return { display: "", dayName: "" }; // invalid date fallback
  }
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    return { display: `${day} ${month}'${year}`, dayName };
  };

  useEffect(() => {
    setShowReturnDate(activeTab === 'outstation-round-trip');
  }, [activeTab]);

  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
      </div>

      {/* <div className="container mx-auto px-4 relative z-10"> */}
<div
  className="container mx-auto px-4 relative z-10 bg-cover bg-center min-h-screen sm:min-h-[600px]"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="text-center text-black mb-11 sm:mb-12 px-2">
    <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-lg">
      Book Your Ride
    </h1>
    <p className="text-md sm:text-lg opacity-90">
      Trusted Rides. Anytime, Anywhere.
Safe, reliable, and comfortable cab services you can count on.
    </p>
  </div>

  {/* Booking Form */}
  <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    {/* Booking Tabs */}
    <div className="flex flex-wrap bg-gray-50 border-b text-xs sm:text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 min-w-0 px-2 py-3 sm:px-4 sm:py-4 text-center relative transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
          }`}
        >
          <div className="flex flex-col items-center space-y-0.5">
            <span className="text-base sm:text-lg">{tab.icon}</span>
            <span className="font-medium leading-tight">{tab.label}</span>
            {tab.isNew && (
              <span className="absolute top-1 right-1 bg-pink-500 text-white text-[9px] px-1.5 py-[2px] rounded-full">
                new
              </span>
            )}
          </div>
        </button>
      ))}
    </div>

    {/* Booking Form */}
    <form onSubmit={handleSubmit} className="p-4 sm:p-6">
      {/* From/To Row */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6 items-end">
        <div className="sm:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-sm sm:text-base"><FaMapMarkerAlt /></span>
            </div>
            <input
              type="text"
              value={formData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              className="block w-full pl-8 pr-2 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
              placeholder="Enter pickup location"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSwapLocations}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
          >
            <FaExchangeAlt size={16} />
          </button>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-sm sm:text-base"><FaMapMarkerAlt /></span>
            </div>
            <input
              type="text"
              value={formData.to}
              onChange={(e) => handleInputChange('to', e.target.value)}
              className="block w-full pl-8 pr-2 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
              placeholder="Enter destination"
              required
            />
          </div>
        </div>
      </div>

      {/* Date/Time Row */}
      <div
        className={`grid gap-3 mb-4 sm:mb-6 ${
          showReturnDate ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-sm sm:text-base"><FaCalendarAlt /></span>
            </div>
            <input
              type="date"
              value={formData.departure}
              onChange={(e) => handleInputChange('departure', e.target.value)}
              className="block w-full pl-8 pr-2 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
              required
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-right text-xs sm:text-sm">
              <div>
                <div className="font-semibold text-gray-800">{formatDate(formData.departure).display}</div>
                <div className="text-gray-500">{formatDate(formData.departure).dayName}</div>
              </div>
            </div>
          </div>
        </div>

        {showReturnDate && (
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Return
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-sm sm:text-base"><FaCalendarAlt /></span>
              </div>
              <input
                type="date"
                value={formData.return}
                onChange={(e) => handleInputChange('return', e.target.value)}
                className="block w-full pl-8 pr-2 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
              {!formData.return && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <div className="text-right text-xs text-gray-400">
                    <div>Tap to add a return date</div>
                    <div>for bigger discounts</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Pickup Time
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400 text-sm sm:text-base"><FaClock /></span>
            </div>
            <select
              value={formData.pickupTime}
              onChange={(e) => handleInputChange('pickupTime', e.target.value)}
              className="block w-full pl-8 pr-2 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-sm sm:text-base"
              required
            >
              {/* Options truncated for brevity */}
             <option value="6:00">6:00 AM</option> <option value="7:00">7:00 AM</option> <option value="8:00">8:00 AM</option> <option value="9:00">9:00 AM</option> <option value="10:00">10:00 AM</option> <option value="11:00">11:00 AM</option> <option value="12:00">12:00 PM</option> <option value="13:00">01:00 PM</option> <option value="14:00">02:00 PM</option> <option value="15:00">03:00 PM</option> <option value="16:00">04:00 PM</option> <option value="17:00">05:00 PM</option> <option value="18:00">06:00 PM</option> <option value="19:00">07:00 PM</option> <option value="20:00">08:00 PM</option> <option value="21:00">09:00 PM</option> <option value="22:00">10:00 PM</option> <option value="23:00">11:00 PM</option> <option value="24:00">12:00 AM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add Stops */}
      <div className="mb-4">
        <button
          type="button"
          className="flex items-center space-x-1.5 text-blue-600 hover:text-blue-700 font-medium relative text-sm"
        >
          <FaPlus size={16} />
          <span>Add Stops</span>
          <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-1">
            new
          </span>
        </button>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
      >
        <FaSearch size={18} />
        <span>SEARCH</span>
      </button>
    </form>

    {/* Footer Info */}
    <div className="bg-gray-50 px-6 py-3 text-center text-gray-600 text-xs sm:text-sm">
      Online Cab Booking
    </div>
  </div>
</div>

    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Guranty,
      title: 'Safe & Secure',
      description: 'Verified drivers and GPS tracking for your safety'
    },
    {
      icon: support,
      title: '24/7 Service',
      description: 'Round the clock cab booking service'
    },
    {
      icon: rate,
      title: 'Best Rates',
      description: 'Competitive pricing with no hidden charges'
    },
    {
      icon: clean,
      title: 'Clean Vehicles',
      description: 'Well-maintained and sanitized cabs'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Bala Travels?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform"
            >
             <div className="mb-4">
  <img
    src={feature.icon}
    alt={feature.title}
    className="w-12 h-12 mx-auto object-contain"
  />
</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const WhyChooseUs = () => {
  const benefits = [
    {
      icon: FaCheckCircle,
      title: 'Verified Drivers',
      description: 'All our drivers undergo background checks and training'
    },
    {
      icon: MdNavigation,
      title: 'Live Tracking',
      description: 'Track your ride in real-time for complete transparency'
    },
    {
      icon: FaCheckCircle,
      title: 'Customer Support',
      description: '24/7 dedicated support team to assist you anytime'
    },
    {
      icon: FaStar,
      title: 'Rated Service',
      description: 'Rate your experience and help us improve our service'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join millions of satisfied customers who trust RideNow for their daily commute and travel needs. 
              We're committed to providing safe, reliable, and comfortable rides every time.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2">
                <MdDownload className="w-5 h-5" />
                <span>Download App</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
    <div className="flex flex-wrap justify-between gap-6 text-center">
      {/* Stat Item */}
      <div className="flex-1 min-w-[120px]">
        <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
        <div className="text-blue-100 font-medium">Happy Riders</div>
      </div>

      <div className="flex-1 min-w-[120px]">
        <div className="text-3xl md:text-4xl font-bold mb-1">5K+</div>
        <div className="text-blue-100 font-medium">Verified Drivers</div>
      </div>

      <div className="flex-1 min-w-[120px]">
        <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
        <div className="text-blue-100 font-medium">Cities</div>
      </div>

      <div className="flex-1 min-w-[120px]">
        <div className="text-3xl md:text-4xl font-bold mb-1">4.8★</div>
        <div className="text-blue-100 font-medium">App Rating</div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};




const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Chennai',
      rating: 5,
      comment: 'Excellent service! Clean cars, punctual drivers, and very reasonable rates. Highly recommended for airport transfers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Used Bala Travels for my family trip. The driver was courteous and the vehicle was spotless. Will definitely book again!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      rating: 4,
      comment: 'Great experience with outstation travel. Good pricing and reliable service. The GPS tracking feature gives peace of mind.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Meera Nair',
      location: 'Bangalore',
      rating: 5,
      comment: 'Professional service with 24/7 support. Booked last minute for an emergency and they arranged everything quickly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about our service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform"
            >
              <StarRating rating={testimonial.rating} />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestPricesSection = () => {
  const pricingPlans = [
    {
      type: 'Local',
      title: 'City Rides',
      price: '₹12',
      unit: 'per km',
      features: [
        'AC Sedan Cars',
        'Experienced Drivers',
        'GPS Tracking',
        'No Hidden Charges',
        'Flexible Timing'
      ],
      popular: false,
      icon: '🏙️'
    },
    {
      type: 'Outstation',
      title: 'Long Distance',
      price: '₹10',
      unit: 'per km',
      features: [
        'Premium Vehicles',
        'Driver Allowance Included',
        'Toll & Parking Free',
        '24/7 Support',
        'Multiple Payment Options'
      ],
      popular: true,
      icon: '🛣️'
    },
    {
      type: 'Airport',
      title: 'Airport Transfer',
      price: '₹599',
      unit: 'fixed rate',
      features: [
        'On-Time Pickup',
        'Flight Tracking',
        'Meet & Greet Service',
        'Luggage Assistance',
        'Professional Drivers'
      ],
      popular: false,
      icon: '✈️'
    },
    {
      type: 'Rental',
      title: 'Full Day Rental',
      price: '₹2,499',
      unit: 'per day',
      features: [
        '8 Hours / 80 KM',
        'AC Vehicle',
        'Fuel Included',
        'Driver Charges Included',
        'Extra KM: ₹12/km'
      ],
      popular: false,
      icon: '📅'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Best Prices in Town
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Transparent pricing with no hidden charges. Choose the plan that suits your travel needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{plan.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.unit}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const AdventureCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <div className="w-4 h-4 bg-white rounded-full opacity-30"></div>
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <div className="w-6 h-6 bg-yellow-300 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-white rounded-full opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready for Your Next
            <span className="block text-yellow-300">Adventure?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let us help you create unforgettable memories with our expertly crafted tour packages
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
              <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us Now
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 flex items-center">
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
              </svg>
              Get Brochure
            </button>
          </div>
          
          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
              <div className="text-orange-100">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-orange-100">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-white opacity-20"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

// Alternative Minimal Adventure CTA Section
const MinimalAdventureCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8">
            <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready for Your Next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Adventure?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let us help you create unforgettable memories with our expertly crafted tour packages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Contact Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-800 transition-all duration-300">
              Get Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dark Theme Adventure CTA
const DarkAdventureCTA = () => {
  return (
    <section className="py-24 bg-gray-700 text-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
            <span className="text-sm font-semibold">Adventure Awaits</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready for Your Next
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Ride?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let us help you create unforgettable memories with our expertly crafted with Best Cab Services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group border-2 border-gray-600 text-gray-300 px-10 py-5 rounded-full font-bold text-lg hover:border-white hover:text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center">
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get Brochure
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">30+</div>
              <div className="text-gray-400 text-sm">Cab Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">10K+</div>
              <div className="text-gray-400 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


















// Services Page Component
const ServicesPage = () => {
  const services = [
    {
      icon: OneWayIcon,
      title: 'Outstation One-Way',
      description: 'Travel to your destination with our reliable one-way cab service. Perfect for business trips or relocations.',
      features: ['No return fare', 'Flexible timing', 'All major cities covered'],
      buttonText: 'Book Now'
    },
    {
      icon: RoundTripIcon ,
      title: 'Round Trip',
      description: 'Complete round trip service with waiting time included. Ideal for business meetings and day trips.',
      features: ['Return journey included', 'Free waiting time', 'Driver allowance included'],
      buttonText: 'Book Now'
    },
    {
      icon: AirportIcon ,
      title: 'Airport Transfers',
      description: 'Hassle-free airport pickup and drop services. Never miss a flight with our punctual service.',
      features: ['Flight tracking', 'Meet & greet service', '24/7 availability'],
      buttonText: 'Book Now'
    },
    {
      icon: RentalIcon ,
      title: 'Hourly Rentals',
      description: 'Rent a cab by the hour for local sightseeing, shopping, or multiple stops within the city.',
      features: ['Minimum 4 hours', 'Multiple stops allowed', 'AC vehicles'],
      buttonText: 'Book Now'
    },
    {
      icon: CorporateIcon ,
      title: 'Corporate Services',
      description: 'Dedicated corporate cab services for employee transportation and business meetings.',
      features: ['Corporate billing', 'Monthly packages', 'Professional drivers'],
      buttonText: 'Book Now'
    },
    {
      icon: SightseeingIcon ,
      title: 'Local Sightseeing',
      description: 'Explore local attractions with our guided sightseeing packages and experienced drivers.',
      features: ['Local guide available', 'Tourist packages', 'Customizable itinerary'],
      buttonText: 'Book Now'
    }
  ];

  return (
    <div>
      <PageHeader
  title="Our Services"
  subtitle="Comprehensive cab services for all your travel needs"
  backgroundImage= {ServiceBg}
/>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
              >
                <div className="mb-6 text-center">
  <img 
    src={service.icon} 
    alt={service.title} 
    className="mx-auto w-16 h-16 object-contain"
  />
</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Vehicles Page Component
const VehiclesPage = () => {
  const vehicles = [
    {
      type: 'Sedan',
      model: 'Maruti Dzire / Honda Amaze',
      capacity: '4 Passengers',
      luggage: '2 Bags',
      image: sedan,
      features: ['AC', 'Music System', 'GPS Tracking'],
      priceRange: '₹10-12/km'
    },
    {
      type: 'SUV',
      model: 'Mahindra Scorpio / Tata Safari',
      capacity: '6-7 Passengers',
      luggage: '4 Bags',
      image: '🚙',
      features: ['AC', 'Music System', 'GPS Tracking', 'Extra Space'],
      priceRange: '₹14-16/km'
    },
    {
      type: 'Hatchback',
      model: 'Maruti Swift / Hyundai i20',
      capacity: '4 Passengers',
      luggage: '2 Bags',
      image: '🚘',
      features: ['AC', 'Music System', 'Fuel Efficient'],
      priceRange: '₹8-10/km'
    },
    {
      type: 'Luxury',
      model: 'Toyota Camry / Honda Accord',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      image: '🏎️',
      features: ['Premium AC', 'Leather Seats', 'Premium Sound', 'WiFi'],
      priceRange: '₹20-25/km'
    },
    {
      type: 'Tempo Traveller',
      model: 'Force Traveller / Mahindra Bolero',
      capacity: '12-17 Passengers',
      luggage: '10 Bags',
      image: '🚐',
      features: ['AC', 'Push Back Seats', 'Music System', 'Group Travel'],
      priceRange: '₹18-22/km'
    },
    {
      type: 'Mini Bus',
      model: 'Tata Winger / Ashok Leyland',
      capacity: '20-35 Passengers',
      luggage: '20 Bags',
      image: '🚌',
      features: ['AC', 'Comfortable Seats', 'Large Group', 'Entertainment'],
      priceRange: '₹25-30/km'
    }
  ];

  return (
    <div>
     <div className="bg-white h-64 flex flex-col justify-center items-center">
  <h1 className="text-4xl font-bold">Our Vehicle Fleet</h1>
  <p className="text-lg text-center">Choose from our extensive fleet of well-maintained vehicles at Bala Travels.</p>
</div>
      <section className="py-8">
        
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
               <div 
  className="relative rounded-xl overflow-hidden shadow-lg text-center p-8 h-64 flex flex-col justify-center"
  style={{
    backgroundImage: `url(${vehicle.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* overlay for text readability */}

  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-white mt-44">
      {vehicle.type}
    </h3>
    <p className="text-gray-200">{vehicle.model}</p>
  </div>
</div>

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <div className="text-2xl mb-1">👥</div>
                      <div className="text-sm text-gray-600">{vehicle.capacity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🧳</div>
                      <div className="text-sm text-gray-600">{vehicle.luggage}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Starting from</div>
                      <div className="text-xl font-bold text-blue-600">
                        {vehicle.priceRange}
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title="About Bala Travels"
        subtitle="Your trusted travel companion since 2010"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2010, Bala Travels has been serving customers with reliable and comfortable cab services across India. What started as a small family business has grown into one of the most trusted names in the transportation industry.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We pride ourselves on our commitment to safety, punctuality, and customer satisfaction. Our team of experienced drivers and well-maintained fleet ensures that every journey with us is smooth and memorable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve thousands of customers annually, providing services ranging from airport transfers to outstation trips, corporate transportation, and local sightseeing tours.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="text-6xl mb-4">🚗</div>
                  <h3 className="text-2xl font-bold mb-2">15+ Years</h3>
                  <p>of Excellence in Service</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide safe, reliable, and affordable transportation services that exceed customer expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading cab service provider in India, known for innovation and customer-centric approach.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Safety first, customer satisfaction, transparency, and continuous improvement in all we do.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Verified Drivers</h4>
                    <p className="text-gray-600 text-sm">All our drivers are background verified and trained professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">GPS Tracking</h4>
                    <p className="text-gray-600 text-sm">Real-time tracking for safety and peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock customer support for any assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden charges, clear and upfront pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for any queries or bookings"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Travel Street,<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@balatravels.com</p>
                    <p className="text-gray-600">support@balatravels.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                    <p className="text-gray-600">Office: 9 AM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Travel Destinations in India',
      excerpt: 'Discover the most beautiful and culturally rich destinations across India that you must visit.',
      image: '🏛️',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'Travel Guide'
    },
    {
      id: 2,
      title: 'Tips for Safe Travel During Monsoon',
      excerpt: 'Essential safety tips and precautions to take while traveling during the monsoon season.',
      image: '🌧️',
      date: 'March 10, 2025',
      readTime: '3 min read',
      category: 'Safety Tips'
    },
    {
      id: 3,
      title: 'How to Book the Perfect Cab for Your Trip',
      excerpt: 'A comprehensive guide to choosing the right cab service for different types of journeys.',
      image: '🚗',
      date: 'March 5, 2025',
      readTime: '4 min read',
      category: 'Travel Tips'
    },
    {
      id: 4,
      title: 'Corporate Travel Solutions',
      excerpt: 'Streamline your business travel with our corporate cab services and management solutions.',
      image: '💼',
      date: 'February 28, 2025',
      readTime: '6 min read',
      category: 'Business'
    },
    {
      id: 5,
      title: 'Airport Transfer Guide',
      excerpt: 'Everything you need to know about hassle-free airport transfers and timings.',
      image: '✈️',
      date: 'February 25, 2025',
      readTime: '4 min read',
      category: 'Airport'
    },
    {
      id: 6,
      title: 'Weekend Getaway Ideas from Mumbai',
      excerpt: 'Explore amazing weekend destinations near Mumbai that are perfect for a quick escape.',
      image: '🏖️',
      date: 'February 20, 2025',
      readTime: '7 min read',
      category: 'Weekend Trips'
    }
  ];

  const categories = ['All', 'Travel Guide', 'Safety Tips', 'Travel Tips', 'Business', 'Airport', 'Weekend Trips'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <PageHeader
        title="Travel Blog"
        subtitle="Travel tips, guides, and insights from our experts"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
                  <div className="text-6xl mb-4">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Page Header Component
const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-28 px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};


// Footer Component
const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-white-800 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div> */}
              <div>
                <div className="text-lg font-bold">

                  <img src={logo} alt="Bala Travels" className="h-6" />
                </div>
                <div className="text-lg font-bold mb-4">Your Travel Partner</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
             Bala Travels is your trusted partner for safe, reliable, and comfortable cab and rental services in Rajapalayam and across India.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('vehicles')}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Vehicles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Outstation Cabs</li>
              <li>Airport Transfer</li>
              <li>Local Sightseeing</li>
              <li>Corporate Travel</li>
              <li>Hourly Rentals</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">info@balatravels.com</span>
              </div>
              <div className="flex items-center space-x-3">
                 <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">Rajapalayam, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-700">
            &copy; 2025 Bala Travels. All rights reserved. | 
            <span className="text-blue-400"> Privacy Policy</span> | 
            <span className="text-blue-400"> Terms of Service</span>
          </p>
        </div>


<div className="text-center text-sm text-gray-500 mt-3">
  <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
    <span>Website designed by</span>
    <a
      href="https://freelancerx.in"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
    >
      <img
        src={Fclogo}
        alt="FreelancerX Logo"
        className="w-4 h-4 sm:w-5 sm:h-5"
      />
      <span className="font-semibold">FreelancerX</span>
    </a>
  </p>
</div>


      </div>
    </footer>
  );
};

export default App;