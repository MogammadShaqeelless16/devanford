import React from 'react';
import { Heart, Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
              Experience Davenford Cotswolds
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              The Cotswolds in winter, especially around Christmas, provides a magical setting with festive 
              decorations, traditional markets, and a warm, holiday ambiance. The charming villages adorned 
              with lights create a picturesque backdrop for a memorable seasonal getaway.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              We offer a variety of accommodations including Tea Room Cafes, Cottages and B&Bs, and even 
              Baking Workshops. Our properties include Davenford Stow Gardens, Chestnuts Bed & Breakfast, 
              The Farrier, and Bankview in Burford.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-amber-800" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Family Run</h3>
                <p className="text-xs sm:text-sm text-gray-600">Three generations of hospitality</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-amber-800" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Award Winning</h3>
                <p className="text-xs sm:text-sm text-gray-600">Excellence in hospitality</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div 
              className="h-48 sm:h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
              }}
            ></div>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-24 sm:h-32 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop)'
                }}
              ></div>
              <div 
                className="h-24 sm:h-32 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/6186515/pexels-photo-6186515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;