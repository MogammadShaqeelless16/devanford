import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Wifi, Coffee, Car, Users, Calendar, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { properties } from '../data/properties';
import { BookingData } from '../types/booking';
import BookingWidget from './BookingWidget';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link to="/" className="text-amber-800 hover:text-amber-900">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === property.images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? property.images.length - 1 : currentImageIndex - 1);
  };

  const handleBookingSearch = (data: BookingData) => {
    console.log('Booking search:', data);
    // Calculate nights and total price
    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const total = nights * property.price;
    
    alert(`Booking Details:\nProperty: ${property.name}\nCheck-in: ${data.checkIn}\nCheck-out: ${data.checkOut}\nGuests: ${data.guests}\nNights: ${nights}\nTotal: R${total.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0">
            <Link to="/" className="flex items-center text-amber-800 hover:text-amber-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Properties
            </Link>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800">Davenford</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-400 fill-current mr-1" />
                <span className="font-semibold">{property.rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 sm:h-80 lg:h-96 relative">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
                
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-amber-800 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-lg sm:text-xl">
                  R{property.price.toLocaleString()}
                  <span className="text-xs sm:text-sm font-normal">/night</span>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">{property.name}</h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">{property.detailedDescription}</p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Property Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Nearby Attractions</h3>
                <div className="space-y-2">
                  {property.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <MapPin className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Property Policies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Check-in/Check-out</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Check-in: {property.policies.checkIn}</p>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3">Check-out: {property.policies.checkOut}</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Cancellation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{property.policies.cancellation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">House Rules</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs sm:text-sm">
                        {property.policies.pets ? (
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-red-600 mr-2" />
                        )}
                        <span className="text-gray-600">Pets {property.policies.pets ? 'allowed' : 'not allowed'}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm">
                        <X className="h-4 w-4 text-red-600 mr-2" />
                        <span className="text-gray-600">No smoking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 sm:top-24">
              <BookingWidget 
                onSearch={handleBookingSearch}
                selectedProperty={property.id}
                className="mb-4 sm:mb-6"
              />
              
              {/* Quick Info */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-right">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-current mr-1" />
                      <span className="font-semibold">{property.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Price per night</span>
                    <span className="font-bold text-amber-800">R{property.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;