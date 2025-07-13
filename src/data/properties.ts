import { Property } from '../types/booking';

export const properties: Property[] = [
  {
    id: 'davenford-stow-gardens',
    name: 'Davenford Stow Gardens',
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6186515/pexels-photo-6186515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 2850,
    location: 'Stow-on-the-Wold',
    rating: 4.9,
    description: 'Luxurious garden cottage with stunning views, private terrace, and beautifully landscaped grounds perfect for a romantic getaway.',
    detailedDescription: 'Nestled in the heart of Stow-on-the-Wold, Davenford Stow Gardens offers an enchanting retreat surrounded by meticulously maintained gardens. This luxury cottage features original Cotswold stone architecture combined with modern amenities, creating the perfect blend of historic charm and contemporary comfort. The property boasts panoramic views across the rolling Cotswolds countryside and provides an idyllic setting for couples seeking a romantic escape.',
    amenities: ['King Bed', 'Garden View', 'Private Terrace', 'En-suite Bath'],
    features: [
      'King-size four-poster bed with luxury linens',
      'Private landscaped garden with seating area',
      'Original exposed beams and stone walls',
      'Modern kitchen with premium appliances',
      'Spacious living area with fireplace',
      'Luxury bathroom with rainfall shower',
      'Private parking space',
      'Complimentary WiFi throughout'
    ],
    nearbyAttractions: [
      'Stow-on-the-Wold Market Square (2 min walk)',
      'Cotswold Farm Park (15 min drive)',
      'Bourton-on-the-Water (10 min drive)',
      'Chipping Campden (20 min drive)',
      'Broadway Tower (25 min drive)'
    ],
    policies: {
      checkIn: '3:00 PM - 8:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before arrival',
      pets: false,
      smoking: false
    }
  },
  {
    id: 'chestnuts-bnb',
    name: 'Chestnuts Bed & Breakfast',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6186515/pexels-photo-6186515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 2100,
    location: 'Bourton-on-the-Water',
    rating: 4.8,
    description: 'Traditional Cotswolds B&B with exceptional breakfast, warm hospitality, and authentic period features throughout.',
    detailedDescription: 'Chestnuts Bed & Breakfast is a charming Victorian property located in the picturesque village of Bourton-on-the-Water, often called the "Venice of the Cotswolds." This family-run establishment has been welcoming guests for over three generations, offering warm hospitality and exceptional service. Each room is individually decorated with period antiques and modern comforts, ensuring a memorable stay in one of England\'s most beautiful villages.',
    amenities: ['Double Bed', 'Full Breakfast', 'Period Features', 'Parking'],
    features: [
      'Traditional English breakfast included',
      'Period Victorian furnishings',
      'River views from select rooms',
      'Guest lounge with library',
      'Beautiful garden terrace',
      'Tea and coffee making facilities',
      'Free WiFi throughout',
      'On-site parking available'
    ],
    nearbyAttractions: [
      'Bourton-on-the-Water Village Center (1 min walk)',
      'Model Village (3 min walk)',
      'Cotswold Motoring Museum (5 min walk)',
      'Birdland Park & Gardens (5 min drive)',
      'The Slaughters (10 min drive)'
    ],
    policies: {
      checkIn: '2:00 PM - 7:00 PM',
      checkOut: '10:30 AM',
      cancellation: 'Free cancellation up to 24 hours before arrival',
      pets: true,
      smoking: false
    }
  },
  {
    id: 'the-farrier',
    name: 'The Farrier',
    images: [
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6186515/pexels-photo-6186515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 1850,
    location: 'Chipping Campden',
    rating: 4.7,
    description: 'Historic cottage conversion with rustic charm, exposed beams, and modern amenities in the heart of a picturesque village.',
    detailedDescription: 'The Farrier is a beautifully converted 17th-century blacksmith\'s cottage located on the historic High Street of Chipping Campden. This unique property retains its original character with exposed limestone walls, oak beams, and flagstone floors, while offering all modern conveniences. The cottage provides an authentic Cotswolds experience in one of the region\'s most well-preserved medieval market towns.',
    amenities: ['Twin/Double', 'Village Center', 'Historic Features', 'WiFi'],
    features: [
      'Original 17th-century architecture',
      'Exposed oak beams and stone walls',
      'Flexible twin or double bed configuration',
      'Compact but fully equipped kitchen',
      'Cozy sitting area with period features',
      'Modern shower room',
      'High Street location',
      'Walking distance to all amenities'
    ],
    nearbyAttractions: [
      'Chipping Campden High Street (immediate)',
      'St. James Church (2 min walk)',
      'Cotswold Way walking trail (5 min walk)',
      'Hidcote Manor Garden (10 min drive)',
      'Broadway (15 min drive)'
    ],
    policies: {
      checkIn: '4:00 PM - 9:00 PM',
      checkOut: '10:00 AM',
      cancellation: 'Free cancellation up to 72 hours before arrival',
      pets: false,
      smoking: false
    }
  },
  {
    id: 'bankview',
    name: 'Bankview',
    images: [
      'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    price: 2400,
    location: 'Burford',
    rating: 4.9,
    description: 'Elegant riverside accommodation with stunning views, luxury amenities, and easy access to Burford\'s charming high street.',
    detailedDescription: 'Bankview offers sophisticated riverside accommodation in the medieval town of Burford, known as the "Gateway to the Cotswolds." This elegant property overlooks the River Windrush and provides luxurious comfort with stunning water views. The accommodation features contemporary design elements harmoniously blended with traditional Cotswold architecture, creating a serene retreat perfect for discerning travelers.',
    amenities: ['River View', 'Luxury Finish', 'Town Center', 'Parking'],
    features: [
      'Panoramic river views from all windows',
      'Luxury king-size bed with premium linens',
      'Contemporary bathroom with spa-quality amenities',
      'Spacious living area with river-facing windows',
      'Modern kitchenette with high-end appliances',
      'Private balcony overlooking the river',
      'Secure parking space',
      'High-speed WiFi and smart TV'
    ],
    nearbyAttractions: [
      'Burford High Street (3 min walk)',
      'St. John the Baptist Church (5 min walk)',
      'Cotswold Wildlife Park (15 min drive)',
      'Minster Lovell (10 min drive)',
      'Witney (20 min drive)'
    ],
    policies: {
      checkIn: '3:00 PM - 8:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before arrival',
      pets: true,
      smoking: false
    }
  }
];