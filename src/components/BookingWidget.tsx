import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BookingData } from '../types/booking';

interface BookingWidgetProps {
  onSearch?: (data: BookingData) => void;
  selectedProperty?: string;
  className?: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch, selectedProperty, className = '' }) => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    property: selectedProperty || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingData.checkIn && bookingData.checkOut) {
      if (onSearch) {
        onSearch(bookingData);
      } else {
        // Navigate to search results page
        navigate('/search', { state: bookingData });
      }
    } else {
      alert('Please select both check-in and check-out dates');
    }
  };

  const handleChange = (field: keyof BookingData, value: string | number) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`bg-white bg-opacity-95 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          Check Availability & Book Direct
        </h3>
        <p className="text-gray-600">
          Select your dates to see real-time availability and our best rates
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Check-in</label>
            <input 
              type="date" 
              min={today}
              value={bookingData.checkIn}
              onChange={(e) => handleChange('checkIn', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Check-out</label>
            <input 
              type="date" 
              min={bookingData.checkIn || today}
              value={bookingData.checkOut}
              onChange={(e) => handleChange('checkOut', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Guests</label>
            <select 
              value={bookingData.guests}
              onChange={(e) => handleChange('guests', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 bg-white"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>5+ Guests</option>
            </select>
          </div>
          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <button 
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </form>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 mb-4">
          <strong className="text-gray-900">Best Rate Guarantee</strong> - Book direct for the lowest prices and exclusive perks
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Free Cancellation
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Instant Confirmation
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            No Booking Fees
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;