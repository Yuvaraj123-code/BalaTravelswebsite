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
import localImg from './Assets/cityride.jpg';
import outstationImg from './Assets/longride.jpeg';
import airportImg from './Assets/airport.jpg';
import rentalImg from './Assets/dayrental.png';
import Ertiga01 from './Assets/ertiga.png';
import Ertiga from './Assets/ertiga1.png';
import Maruti from './Assets/Maruti.webp'
import Maruti1 from './Assets/maruti-suzuki-dzire-500x500.webp'
import Maruti2 from './Assets/New-Suzuki-Dzire.jpg'
import AboutHeroBg from '../src/Assets/About.png'
import ContactHeaderBg from './Assets/Bala Travels (1).png';
import Rainy from './Assets/rainy.jpg'
import Kerala from './Assets/monsoon-kerala.jpg'
import CabBokking from './Assets/cabbooking.png'
import Topspot from './Assets/kerala.jpg'
import corporative from './Assets/corperative.jpg'
import Airport from './Assets/Airport.png'
import Rajapalyam from './Assets/rajapalayam.png'

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





// PageHeader component (if you don't already have one)

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust Bala Travels for safe, reliable, and comfortable rides across Rajapalayam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2">
                <MdDownload className="w-5 h-5" />
                <span>Download App</span>
              </button>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
                  <div className="text-blue-100 font-medium">Happy Riders</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">5K+</div>
                  <div className="text-blue-100 font-medium">Verified Drivers</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
                  <div className="text-blue-100 font-medium">Cities</div>
                </div>
                <div>
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
      location: 'Rajapalayam',
      rating: 5,
      comment: 'Excellent service! Clean cars, punctual drivers, and very reasonable rates. Highly recommended for airport transfers.',
      image: 'https://media.istockphoto.com/id/1333001232/photo/portrait-of-indian-man-face-outdoors-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Ne-OChwAEFF5U7yxOwUUqA8ELrJ1WCYho4RkW9v360I='
    },
    {
      name: 'Priya',
      location: 'Tenkasi',
      rating: 5,
      comment: 'Used Bala Travels for my family trip. The driver was courteous and the vehicle was spotless. Will definitely book again!',
      image: 'https://momtomam.in/wp-content/uploads/2024/09/Ritu.jpg'
    },
    {
      name: 'Arjun',
      location: 'Virudhunagar',
      rating: 4,
      comment: 'Great experience with outstation travel. Good pricing and reliable service. The GPS tracking feature gives peace of mind.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-fo-uKE7Pkn6HuFsDz8xyZkWu6p-xCkgPA&s'
    },
    {
      name: 'Meera Nair',
      location: 'Madurai',
      rating: 5,
      comment: 'Professional service with 24/7 support. Booked last minute for an emergency and they arranged everything quickly.',
      image: 'https://img.freepik.com/premium-photo/young-indian-woman-happy-restaurant_81396-153.jpg'
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
      image: localImg
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
      image: outstationImg 
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
      image: airportImg 
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
      image: rentalImg 
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
                <div className="mb-4 flex justify-center">
<img
  src={plan.image}
  alt={plan.title}
  className="h-42 w-42 md:h-46 md:w-46 lg:h-50 lg:w-50 object-contain mx-auto mb-4"
/>

</div>
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
      buttonText: 'Book Now',
      popular: false,
      price: 'Starting at ₹12/km'
    },
    {
      icon: RoundTripIcon,
      title: 'Round Trip',
      description: 'Complete round trip service with waiting time included. Ideal for business meetings and day trips.',
      features: ['Return journey included', 'Free waiting time', 'Driver allowance included'],
      buttonText: 'Book Now',
      popular: true, // Marked as popular
      price: 'Starting at ₹10/km'
    },
    {
      icon: AirportIcon,
      title: 'Airport Transfers',
      description: 'Hassle-free airport pickup and drop services. Never miss a flight with our punctual service.',
      features: ['Flight tracking', 'Meet & greet service', '24/7 availability'],
      buttonText: 'Book Now',
      popular: false,
      price: 'Flat rates available'
    },
    {
      icon: RentalIcon,
      title: 'Hourly Rentals',
      description: 'Rent a cab by the hour for local sightseeing, shopping, or multiple stops within the city.',
      features: ['Minimum 4 hours', 'Multiple stops allowed', 'AC vehicles'],
      buttonText: 'Book Now',
      popular: false,
      price: '₹150/hour onwards'
    },
    {
      icon: CorporateIcon,
      title: 'Corporate Services',
      description: 'Dedicated corporate cab services for employee transportation and business meetings.',
      features: ['Corporate billing', 'Monthly packages', 'Professional drivers'],
      buttonText: 'Contact Sales',
      popular: false,
      price: 'Custom packages'
    },
    {
      icon: SightseeingIcon,
      title: 'Local Sightseeing',
      description: 'Explore local attractions with our guided sightseeing packages and experienced drivers.',
      features: ['Local guide available', 'Tourist packages', 'Customizable itinerary'],
      buttonText: 'Book Now',
      popular: true, // Marked as popular
      price: 'Packages from ₹999'
    }
  ];

  // State for filtering services
  const [filter, setFilter] = useState('all');
  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => filter === 'popular' ? service.popular : true);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive cab services for all your travel needs"
        backgroundImage={ServiceBg}
      />
      
      {/* Additional Services Header with Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 text-center md:text-left">
              Choose Your Ride
            </h2>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setFilter('all')}
              >
                All Services
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setFilter('popular')}
              >
                Most Popular
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 relative"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
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
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                {/* Pricing */}
                <div className="text-center mb-4">
                  <span className="text-blue-600 font-semibold">{service.price}</span>
                </div>
                
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
      
      {/* Additional CTA Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We offer tailored transportation packages for special events, weddings, and corporate needs.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking at least 2-3 hours in advance for city rides and 24 hours for outstation trips.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, UPI, credit/debit cards, and digital wallets for your convenience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Can I cancel my booking?</h3>
              <p className="text-gray-600">Yes, cancellations are free up to 30 minutes before pickup for city rides and 2 hours for airport transfers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Do you provide child seats?</h3>
              <p className="text-gray-600">Child seats are available on request for an additional charge. Please mention this during booking.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Vehicles Page Component
const BookingFormPage = ({ vehicle, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    passengers: 1,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `New Booking Request from Bala Travels Website:%0A%0A
*Vehicle Details:*%0A
Type: ${vehicle.type}%0A
Model: ${vehicle.model}%0A
Price: ${vehicle.priceRange}%0A%0A
*Customer Details:*%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A%0A
*Trip Details:*%0A
Pickup: ${formData.pickupLocation}%0A
Destination: ${formData.destination}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Passengers: ${formData.passengers}%0A%0A
*Message:*%0A${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919150508183?text=${message}`, '_blank');
    
    // Go back to vehicles page
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with back button */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vehicles
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Your Vehicle</h1>
          <p className="text-lg text-gray-600">Complete your booking details below</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vehicle Details Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div 
              className="relative h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url(${vehicle.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{vehicle.type}</h2>
                <p className="text-xl text-gray-200">{vehicle.model}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="text-sm text-gray-600 font-medium">Capacity</div>
                  <div className="text-lg font-bold text-gray-800">{vehicle.capacity}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🧳</div>
                  <div className="text-sm text-gray-600 font-medium">Luggage</div>
                  <div className="text-lg font-bold text-gray-800">{vehicle.luggage}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Vehicle Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-center">
                <div className="text-sm opacity-90">Starting from</div>
                <div className="text-2xl font-bold">{vehicle.priceRange}</div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trip Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Trip Information</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter pickup location"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Destination *
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter destination"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Passengers
                      </label>
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        {[...Array(parseInt(vehicle.capacity))].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} Passenger{i+1 > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Instructions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Any special requests, stops, or additional instructions..."
                  ></textarea>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg shadow-lg"
                >
                  Confirm Booking via WhatsApp
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  You'll be redirected to WhatsApp to complete your booking
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const VehiclesPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
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
      type: 'Ertiga',
      model: ' Ertiga / Maruti Ertiga',
      capacity: '6-7 Passengers',
      luggage: '4 Bags',
      image: Ertiga01,
      features: ['AC', 'Music System', 'GPS Tracking', 'Extra Space'],
      priceRange: '₹14-16/km'
    },
    {
      type: 'Ertiga',
      model: 'Ertiga/ Maruti Ertiga',
      capacity: '6 -7 Passengers',
      luggage: '4 Bags',
      image: Ertiga,
      features: ['AC', 'Music System', 'Fuel Efficient'],
      priceRange: '₹10-14/km'
    },
    {
      type: 'Maruti Suzuki',
      model: 'Maruti Suzuki Dzire / Dzire',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      image: Maruti,
      features: ['Premium AC', 'Leather Seats', 'Premium Sound', 'WiFi'],
      priceRange: '₹10-25/km'
    },
    {
      type: 'Maruti Suzuki',
      model: 'Maruti Suzuki Dzire / Dzire',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      image: Maruti1,
      features: ['AC', 'Push Back Seats', 'Music System', 'Group Travel'],
      priceRange: '₹11-12/km'
    },
    {
      type: 'Maruti Suzuki',
      model: 'Maruti Suzuki Dzire / Dzire',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      image: Maruti2,
      features: ['AC', 'Comfortable Seats', 'Large Group', 'Entertainment'],
      priceRange: '₹11-12/km'
    }
  ];

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowBookingForm(true);
  };

  const handleBackToVehicles = () => {
    setShowBookingForm(false);
    setSelectedVehicle(null);
  };

  // If booking form is shown, render the full page form
  if (showBookingForm && selectedVehicle) {
    return (
      <BookingFormPage 
        vehicle={selectedVehicle} 
        onBack={handleBackToVehicles} 
      />
    );
  }

  // Otherwise render the vehicles page
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
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
                    <button 
                      onClick={() => handleBookNow(vehicle)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
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
    <div className="min-h-screen">
      {/* Hero Section */}
     <div className="relative text-white py-24 md:py-32 lg:py-40 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src={AboutHeroBg} 
      alt="Bala Travels Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
  </div>
  
  {/* Optional decorative elements */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent opacity-20"></div>
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-20"></div>
  
  <div className="container mx-auto px-4 relative z-10-mt-8">
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4">
        <div className="inline-block bg-yellow-400 bg-opacity-20 px-4 py-2 rounded-full mb-4">
          <span className="text-yellow-300 text-sm font-semibold">TRUSTED SINCE 2010</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
        About <span className="text-yellow-400">Bala Travels</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
        Your trusted travel companion for over a decade
      </p>
      
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
      
      <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
For over a decade, Bala Travels has been more than just a travel service—we’ve been a trusted companion on countless journeys. With a strong commitment to reliability, comfort, and exceptional service, we’ve built lasting relationships with our customers, making every trip safe, seamless, and memorable. Our dedication to excellence is the reason travelers continue to choose us, year after year.      </p>
      
      {/* Call to Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
          Book Your Ride
        </button>
        <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://api.formulaindia.com/upload/media//89b1bfa11e7602fa0fb07ddd09c773c9.jpg" 
                  alt="Bala Travels Fleet" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2010, Bala Travels began as a small family business with just three vehicles. Today, we've grown into one of the most trusted transportation services in India, with a fleet of over 200 vehicles serving 25+ cities.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our growth has been driven by an unwavering commitment to safety, punctuality, and customer satisfaction. We've built our reputation one ride at a time, ensuring that every journey with us is comfortable, reliable, and memorable.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                As we continue to expand, we remain true to our core values while embracing innovation to serve our customers better.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 rounded-lg px-4 py-2">
                  <div className="text-blue-600 font-bold">50,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-blue-50 rounded-lg px-4 py-2">
                  <div className="text-blue-600 font-bold">200+</div>
                  <div className="text-sm text-gray-600">Vehicles</div>
                </div>
                <div className="bg-blue-50 rounded-lg px-4 py-2">
                  <div className="text-blue-600 font-bold">25+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Philosophy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Guided by our mission and vision, we strive to deliver exceptional transportation services that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, reliable, and affordable transportation services that exceed customer expectations through innovation and exceptional service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be India's most trusted transportation service provider, known for innovation, reliability, and customer-centric approach.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Safety first, customer satisfaction, transparency, innovation, and continuous improvement in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Bala Travels?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We go the extra mile to ensure your journey is safe, comfortable, and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Verified Drivers</h4>
                <p className="text-gray-600">All our drivers undergo rigorous background checks and regular training to ensure your safety.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Punctuality Guaranteed</h4>
                <p className="text-gray-600">We understand the value of your time. Our on-time performance record is consistently above 98%.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Real-time GPS Tracking</h4>
                <p className="text-gray-600">Track your ride in real-time, share your journey with loved ones, and enjoy complete peace of mind.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">24/7 Customer Support</h4>
                <p className="text-gray-600">Our dedicated support team is available round the clock to assist you with any queries or concerns.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Transparent Pricing</h4>
                <p className="text-gray-600">No hidden charges or surprise fees. Our pricing is clear, competitive, and upfront.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Well-Maintained Fleet</h4>
                <p className="text-gray-600">Our vehicles undergo regular maintenance and cleanliness checks to ensure your comfort and safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Bala Travels Difference</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Book Your Ride Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
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
    <div className="min-h-screen">
    

<div className="text-center py-12 bg-blue-50">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Contact Us
    </h1>
    <h4 className="text-lg md:text-xl text-gray-600">
      Get in touch with us for any queries or bookings
    </h4>
  </div>
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
         
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-blue-600">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our customer support team 
                  is available 24/7 to assist you with your travel requirements.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Travel Street,<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 text-green-600 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 text-purple-600 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@balatravels.com</p>
                    <p className="text-gray-600">support@balatravels.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 text-orange-600 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                    <p className="text-gray-600">Office: 9 AM - 9 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>


           <div className="text-center max-w-3xl mx-auto mb-8 mt-9" >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">We'd Love to Hear From You</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Have questions about our services or need assistance with a booking? 
              Our team is here to help you with all your travel needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <div className="container mx-auto px-4 pb-16 max-w-6xl">
  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
    {/* Responsive Google Map */}
    <div className="h-64 md:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125938.0318003126!2d77.55641765!3d9.459618700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e9d3a85aca8f%3A0x552789e33f3b0b11!2sRajapalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1757097151708!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    </div>

    {/* Button Section */}
    <div className="p-6 text-center bg-gray-50">
      <a
        href="https://maps.google.com/?q=Bala+Travels+Mumbai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        View Larger Map
      </a>
    </div>
  </div>
</div>

    </div>
  );
};
// Blog Page Component

const TravelBlogHeader = () => {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Responsive image with different sources for mobile and desktop */}
        <picture>
          {/* Mobile image (3:4 aspect ratio) */}
          <source 
            media="(max-width: 768px)" 
            srcSet="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D" 
          />
          {/* Desktop image (16:9 aspect ratio) */}
          <source 
            media="(min-width: 769px)" 
            srcSet="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D" 
          />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Travel background" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-400/0 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-400/0"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-yellow-400 opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white opacity-10 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-green-300 opacity-15 animate-float3"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-blue-200">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ol>
          </nav>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Travel <span className="text-yellow-400">Blog</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
            Travel tips, guides, and insights from our experts
          </p>
          
          {/* Separator */}
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover the latest travel trends, destination guides, and expert advice to make your next journey unforgettable.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full py-3 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
              />
              <button className="absolute right-2 top-2 bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="text-center px-4 py-2 bg-blue-800 bg-opacity-40 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400">150+</div>
              <div className="text-sm text-blue-200">Articles</div>
            </div>
            <div className="text-center px-4 py-2 bg-blue-800 bg-opacity-40 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400">25+</div>
              <div className="text-sm text-blue-200">Destinations</div>
            </div>
            <div className="text-center px-4 py-2 bg-blue-800 bg-opacity-40 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-blue-200">Expert Writers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float1 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};



const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Travel Destinations in India',
      excerpt: 'Discover the most beautiful and culturally rich destinations across India that you must visit.',
      image: Topspot,
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'Travel Guide'
    },
    {
      id: 2,
      title: 'Tips for Safe Travel During Monsoon',
      excerpt: 'Essential safety tips and precautions to take while traveling during the monsoon season.',
      image: Kerala,
      date: 'March 10, 2025',
      readTime: '3 min read',
      category: 'Safety Tips'
    },
    {
      id: 3,
      title: 'How to Book the Perfect Cab for Your Trip',
      excerpt: 'A comprehensive guide to choosing the right cab service for different types of journeys.',
      image: CabBokking,
      date: 'March 5, 2025',
      readTime: '4 min read',
      category: 'Travel Tips'
    },
    {
      id: 4,
      title: 'Corporate Travel Solutions',
      excerpt: 'Streamline your business travel with our corporate cab services and management solutions.',
      image: corporative,
      date: 'February 28, 2025',
      readTime: '6 min read',
      category: 'Business'
    },
    {
      id: 5,
      title: 'Airport Transfer Guide',
      excerpt: 'Everything you need to know about hassle-free airport transfers and timings.',
      image: Airport,
      date: 'February 25, 2025',
      readTime: '4 min read',
      category: 'Airport'
    },
    {
      id: 6,
      title: 'Weekend Getaway Ideas from Rajapalyam',
      excerpt: 'Explore amazing weekend destinations near Rajapalyam that are perfect for a quick escape.',
      image: Rajapalyam,
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
      <TravelBlogHeader
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
               {/* <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center"> */}
  <div className="mb-4">
    <img 
      src={post.image} 
      alt="Post" 
      className="w-38 h-auto object-cover mx-auto rounded-lg" 
    />
  </div>
{/* </div> */}
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
    <div className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
      </div>
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-0">{title}</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 md:text-2xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
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