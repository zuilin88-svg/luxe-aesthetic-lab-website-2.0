import React from 'react';
import { REVIEWS, SOCIAL_LINKS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Client Love</h1>
          <p className="text-stone-600 font-light text-lg">
            See what our beautiful clients have to say about their journey with Luxe Aesthetic Lab.
          </p>
          <div className="mt-8">
            <a 
               href="https://www.google.com/search?q=luxe+aesthetic+lab+reviews" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gold-600 hover:text-gold-700"
            >
              Read all Google Reviews
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-stone-50 p-8 md:p-10 rounded-sm relative">
              <Quote className="text-gold-200 absolute top-6 right-6 w-12 h-12 opacity-50" />
              <div className="flex text-gold-500 mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                <span className="font-serif font-bold text-stone-900">{review.author}</span>
                <span className="text-xs text-stone-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-stone-900 text-white p-12 text-center rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to start your skin journey?</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">Join our happy clients and experience the difference of personalized, advanced skincare.</p>
          <a href={SOCIAL_LINKS.vagaro} className="bg-white text-stone-900 px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-white transition-colors">
            Book Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;