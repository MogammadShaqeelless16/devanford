import React, { useState } from 'react';
import { Calendar, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

const Rooms: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({
    0: 0, 1: 0, 2: 0, 3: 0
  });


  const nextImage = (roomIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [roomIndex]: prev[roomIndex] === properties[roomIndex].images.length - 1 ? 0 : prev[roomIndex] + 1
    }));
  };

  const prevImage = (roomIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [roomIndex]: prev[roomIndex] === 0 ? properties[roomIndex].images.length - 1 : prev[roomIndex] - 1
    }));
  };

  return (
    <section id="rooms" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Cotswolds Properties
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose from our collection of carefully selected properties, each offering 
            unique character and authentic Cotswolds charm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {properties.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-2 sm:mx-0">
              {/* Image Carousel */}
              <div className="h-48 sm:h-64 relative overflow-hidden">
                {room.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                      imageIndex === currentImageIndexes[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
                
                {/* Carousel Navigation */}
                <button
                  onClick={() => prevImage(index)}
                  className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-1 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => nextImage(index)}
                  className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-1 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {room.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => setCurrentImageIndexes(prev => ({ ...prev, [index]: imageIndex }))}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        imageIndex === currentImageIndexes[index] ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>

                {/* Overlays */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-gray-700">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-400 fill-current mr-1" />
                    {room.rating}
                  </div>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-amber-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-lg">
                  R{room.price.toLocaleString()}
                  <span className="text-xs sm:text-sm font-normal">/night</span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2">{room.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{room.location}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 sm:mb-6">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-800 rounded-full mr-2"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <Link 
                    to={`/property/${room.id}`}
                    className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    View Details & Book
                  </Link>
                  <button className="w-full border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Quick Check
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;