import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Video, MapPin, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-white">Luxe Aesthetic Lab</h2>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Experience the ultimate in personalized care. Advanced skincare specializing in corrective treatments and natural enhancements.
            </p>
            <div className="flex space-x-6 pt-4">
               <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
               <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Video size={20} /></a>
               <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
             <h3 className="font-serif text-lg text-gold-400">Reach Out</h3>
             <div className="space-y-3 text-sm text-stone-300">
               <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-white transition-colors">
                 <Mail size={16} className="mr-3" />
                 {CONTACT_INFO.email}
               </a>
               <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center hover:text-white transition-colors">
                 <Phone size={16} className="mr-3" />
                 {CONTACT_INFO.phone}
               </a>
               <div className="flex items-start">
                 <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                 <span className="max-w-xs">{CONTACT_INFO.address}</span>
               </div>
             </div>
          </div>

          {/* Hours Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-gold-400">Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-stone-300">
              {CONTACT_INFO.hours.map((item) => (
                <React.Fragment key={item.day}>
                  <span>{item.day}</span>
                  <span className="text-right">{item.time}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Luxe Aesthetic Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;