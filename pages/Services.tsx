import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Our Services</h1>
          <p className="text-stone-600 font-light text-lg">
            We offer a range of specialized treatments designed to rejuvenate, correct, and enhance. 
            Explore our menu to find the perfect treatment for your skin goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col h-full bg-white group hover:shadow-lg transition-all duration-500 rounded-sm">
              <Link to={`/services/${service.id}`} className="block overflow-hidden relative aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </Link>
              <div className="p-8 flex-1 flex flex-col border border-t-0 border-stone-100">
                <h2 className="font-serif text-2xl text-stone-800 mb-2">
                  <Link to={`/services/${service.id}`} className="hover:text-gold-600 transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
                <p className="text-stone-500 font-light mb-6 flex-1">
                  {service.shortDescription}
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-stone-100">
                  <span className="font-serif text-lg text-stone-800">{service.price}</span>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-xs uppercase tracking-widest font-bold text-gold-600 hover:text-gold-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;