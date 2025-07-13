import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { properties } from '../data/properties';
import { BookingData } from '../types/booking';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchData = location.state as BookingData;
  const [sortBy, setSortBy] = useState('price');
  const [filterLocation, setFilterLocation] = useState('all');

  if (!searchData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Search Data</h1>
          <Link to="/" className="text-amber-800 hover:text-amber-900">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const checkIn = new Date(searchData.checkIn);
  const checkOut = new Date(searchData.checkOut);
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

  // Filter and sort properties
  let filteredProperties = [...properties];
  
  if (filterLocation !== 'all') {
    filteredProperties = filteredProperties.filter(p => 
      p.location.toLowerCase().includes(filterLocation.toLowerCase())
    );
  }

  filteredProperties.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0">
            <Link to="/" className="flex items-center text-amber-800 hover:text-amber-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800">Davenford</h1>
            <div className="text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{searchData.checkIn} - {searchData.checkOut}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Users className="h-4 w-4" />
                <span>{searchData.guests} guest{searchData.guests > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Search Summary */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">
            Available Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold">Check-in:</span> {searchData.checkIn}
            </div>
            <div>
              <span className="font-semibold">Check-out:</span> {searchData.checkOut}
            </div>
            <div>
              <span className="font-semibold">Nights:</span> {nights}
            </div>
            <div>
              <span className="font-semibold">Guests:</span> {searchData.guests}
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filters & Sort</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
              >
                <option value="all">All Locations</option>
                <option value="stow">Stow-on-the-Wold</option>
                <option value="bourton">Bourton-on-the-Water</option>
                <option value="chipping">Chipping Campden</option>
                <option value="burford">Burford</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
              >
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 sm:gap-8">
          {filteredProperties.map((property) => {
            const totalPrice = nights * property.price;
            return (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/3">
                    <div 
                      className="h-48 sm:h-64 lg:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${property.images[0]})` }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2">
                          {property.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-400 fill-current mr-1" />
                          <span className="font-semibold">{property.rating}</span>
                          <span className="text-gray-600 text-sm ml-1">/5</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-amber-800">
                          R{totalPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          R{property.price.toLocaleString()}/night × {nights} nights
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                      {property.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                      {property.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-800 rounded-full mr-2 flex-shrink-0"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <Link 
                        to={`/property/${property.id}`}
                        state={searchData}
                        className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                      >
                        View Details & Book
                      </Link>
                      <button className="flex-1 border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                        Quick Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
            <Link to="/" className="text-amber-800 hover:text-amber-900 font-semibold">
              Start a new search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;