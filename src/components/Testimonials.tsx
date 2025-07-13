import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alvaro",
      location: "Booking.com",
      rating: 5,
      text: "Wonderful experience at Davenford. The location is exceptional and the accommodation exceeded all expectations. Perfect for a romantic getaway in the Cotswolds.",
      image: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Delwyn",
      location: "Booking.com",
      rating: 5,
      text: "Exceptional breakfast, location, and parking. The whole experience was outstanding. A lovely welcome and the perfect Cotswolds touch made our stay memorable.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Manuel",
      location: "Booking.com",
      rating: 5,
      text: "Excelente alojamiento en Bourton, volveré si vuelvo a la zona. La ubicación es excepcional, en pleno centro de Bourton, muy cerca de todo: lugares para comer, comprar, pasear.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "ntoy345936",
      location: "TripAdvisor",
      rating: 5,
      text: "Perfect Wedding Anniversary break made all the better with a stunning location and perfect accommodation. Breakfast was exceptionally good and the whole experience was one you'd come back for again and again!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rick",
      location: "Google Reviews",
      rating: 5,
      text: "A lovely welcome from Talia, our waitress. Nice atmosphere, good food, and a very pleasant courtyard garden. The whole experience was delightful.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Fiona",
      location: "Google Reviews", 
      rating: 5,
      text: "Exceptional service and beautiful surroundings. The attention to detail and warm hospitality made our stay truly special. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Don't just take our word for it - hear from our delighted guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative mx-2 sm:mx-0">
              <Quote className="absolute top-2 sm:top-4 left-2 sm:left-4 h-6 w-6 sm:h-8 sm:w-8 text-amber-200" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic text-xs sm:text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-cover bg-center rounded-full mr-3 flex-shrink-0"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                ></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-md space-y-2 sm:space-y-0">
            <div className="flex items-center sm:mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-xs sm:text-sm text-gray-600">Based on 127 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;