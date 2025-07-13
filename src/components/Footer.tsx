import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">Davenford</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Experience the charm and beauty of staying in our cozy getaways with luxurious bedrooms, 
              amazing scenery and artisan architecture. We have blended the feeling of relaxation of a holiday with the comfort of home.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Rooms</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-800 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-xs sm:text-sm">
                  Davenford Cotswolds<br />
                  Stow-on-the-Wold, Gloucestershire
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-800 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">+44 (0) 1234 567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-800 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">info@davenford.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © 2025 Davenford. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors text-center">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors text-center">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors text-center">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;