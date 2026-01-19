import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS } from '../constants';
import { Star, ChevronRight, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    if (REVIEWS.length <= 1) return;
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/6e89beaa2e00699eb608b53f31c2c2382042c213/components/Layout/Hero%20Section.png"
            alt="Luxe Aesthetic Lab Spa Interior" 
            className="w-full h-full object-cover"
          />
          {/* Lightened overlay to preserve the bright, white aesthetic of the reference image */}
          <div className="absolute inset-0 bg-stone-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in mt-16">
          <p className="text-stone-800 font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-bold">
            Advanced Clinical Skincare
          </p>
          <h1 className="text-stone-900 font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Luxe Aesthetic Lab
          </h1>
          <p className="text-stone-700 font-sans text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Your Journey, Your Skin, Our Expertise. Experience the ultimate in personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-stone-900 text-white font-sans uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors duration-300 shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" 
                alt="Esthetician treating client" 
                className="w-full h-[600px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-100 -z-10 hidden lg:block"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gold-600 font-serif text-lg mb-4 italic">Elevate Your Skin</h2>
              <h3 className="font-serif text-4xl text-stone-800 mb-6 leading-tight">
                Personalized care for <br/>radiant results
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6 font-light">
                At Luxe Aesthetic Lab, we believe every individual deserves radiant skin. 
                With over 10 years of professional experience, we focus on corrective, 
                results-driven treatments that improve skin health at a cellular level—not 
                just a surface-level glow.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8 font-light">
                Specializing in DMK Enzyme Therapy and advanced corrective treatments, 
                we focus on delivering real results in a clean, modern, and welcoming environment.
              </p>
              <Link to="/about" className="inline-flex items-center text-stone-900 border-b border-stone-300 pb-1 hover:border-gold-500 hover:text-gold-600 transition-colors">
                Get in touch <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden mb-6 h-80">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                <div className="pr-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-stone-900 group-hover:text-gold-600 transition-colors">
                      {service.title} <span className="inline-block ml-1">&rsaquo;</span>
                    </h3>
                  </div>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                  <p className="text-gold-700 font-medium text-sm">{service.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute left-0 top-0 w-64 h-full bg-gold-600 rounded-r-full opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <div className="w-16 h-1 bg-gold-500 mb-4"></div>
            <h2 className="font-serif text-4xl text-stone-800">Customer Reviews</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-xl shadow-xl overflow-hidden min-h-[400px]">
            
            {/* Left Column: Client List / Navigation */}
            <div className="lg:col-span-4 bg-stone-100 h-full p-8 lg:p-10 flex flex-col justify-center border-r border-stone-200">
               <div className="space-y-6 relative">
                 {/* Timeline Line */}
                 <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-stone-300"></div>

                 {REVIEWS.map((review, index) => (
                   <button 
                      key={review.id}
                      onClick={() => setActiveReviewIndex(index)}
                      className={`relative flex items-center w-full text-left group pl-10 transition-all duration-300`}
                   >
                     {/* Timeline Dot */}
                     <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-10 flex items-center justify-center rounded-full border-4 ${
                       activeReviewIndex === index 
                         ? 'w-8 h-8 bg-white border-gold-500' 
                         : 'w-6 h-6 bg-stone-200 border-stone-300 group-hover:border-gold-300'
                     }`}>
                       {activeReviewIndex === index && <span className="w-2 h-2 bg-gold-500 rounded-full"></span>}
                     </span>

                     <div className={`transition-opacity duration-300 ${activeReviewIndex === index ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                        <h4 className={`font-serif font-bold text-lg leading-none ${activeReviewIndex === index ? 'text-stone-900' : 'text-stone-500'}`}>
                          {review.author}
                        </h4>
                        <div className="flex text-gold-500 text-xs mt-1">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                          <span className="ml-2 text-stone-400 font-sans">{review.date}</span>
                        </div>
                     </div>
                   </button>
                 ))}
               </div>
            </div>
            
            {/* Right Column: Active Review Content */}
            <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center h-full relative">
               <Quote className="text-gold-100 absolute top-8 left-8 w-24 h-24 -z-10" />
               
               <div className="fade-in transition-opacity duration-500 ease-in-out" key={activeReviewIndex}>
                 <p className="text-stone-600 text-xl md:text-2xl leading-relaxed italic mb-8 font-light">
                   "{REVIEWS[activeReviewIndex].text}"
                 </p>
                 <div>
                   <h3 className="text-stone-900 font-bold font-serif text-lg">{REVIEWS[activeReviewIndex].author}</h3>
                   <p className="text-gold-600 text-sm uppercase tracking-widest mt-1">Verified Client • {REVIEWS[activeReviewIndex].source}</p>
                 </div>
               </div>

               <div className="absolute bottom-8 right-8 flex space-x-2">
                 {REVIEWS.map((_, idx) => (
                   <button 
                     key={idx} 
                     onClick={() => setActiveReviewIndex(idx)}
                     className={`w-2 h-2 rounded-full transition-colors ${idx === activeReviewIndex ? 'bg-gold-500' : 'bg-stone-300'}`}
                     aria-label={`Go to review ${idx + 1}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;