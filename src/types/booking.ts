export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  property?: string;
}

export interface Property {
  id: string;
  name: string;
  images: string[];
  price: number;
  location: string;
  rating: number;
  description: string;
  amenities: string[];
  detailedDescription: string;
  features: string[];
  nearbyAttractions: string[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    pets: boolean;
    smoking: boolean;
  };
}