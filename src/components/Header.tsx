import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-amber-800">
              Davenford
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
            <a href="#rooms" className="text-gray-700 hover:text-amber-800 transition-colors">Rooms</a>
            <a href="#testimonials" className="text-gray-700 hover:text-amber-800 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>01234 567890</span>
            </div>
            <button className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors">
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
              <a href="#rooms" className="text-gray-700 hover:text-amber-800 transition-colors">Rooms</a>
              <a href="#testimonials" className="text-gray-700 hover:text-amber-800 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contact</a>
              <div className="flex items-center text-sm text-gray-600 pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>01234 567890</span>
              </div>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors w-full">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;