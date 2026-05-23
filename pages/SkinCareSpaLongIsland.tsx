import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { SOCIAL_LINKS } from '../constants';

const SkinCareSpaLongIsland: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-stone-50">
      <Seo
        title="Skin Care Spa on Long Island | Luxe Aesthetic Lab"
        description="Visit Luxe Aesthetic Lab, a luxury skin care spa on Long Island offering customized facials, DMK skin revision, hydro facials, and brow services in East Meadow."
        canonical="https://www.luxeaestheticlab.com/skin-care-spa-long-island"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-gold-600 font-bold mb-4">Long Island Skin Care Spa</p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Corrective skin care and luxury facials on Long Island</h1>
            <p className="text-stone-600 leading-relaxed font-light mb-6">
              Luxe Aesthetic Lab is a private skin care spa in East Meadow serving clients across Long Island who want customized,
              results-focused facial treatments in a calm luxury setting.
            </p>
            <p className="text-stone-600 leading-relaxed font-light mb-8">
              Our services are designed for real skin concerns, including acne, congestion, dullness, dehydration, uneven texture,
              pigmentation, and age-management goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL_LINKS.vagaro}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors text-center"
              >
                Book A Visit
              </a>
              <Link
                to="/services"
                className="border border-stone-300 px-8 py-3 uppercase tracking-widest text-sm hover:border-gold-500 hover:text-gold-600 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-lg bg-white">
            <img src="/images/hero-section.png" alt="Luxury skin care spa treatment room on Long Island" className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Personalized Skin Plans</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">Every appointment is guided by your current skin condition, goals, and treatment history.</p>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Advanced Corrective Care</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">DMK enzyme therapy and skin revision treatments support long-term improvement for complex concerns.</p>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Luxury Studio Experience</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">A private East Meadow studio with attentive service, clear guidance, and refined treatment protocols.</p>
          </div>
        </section>

        <section className="bg-white p-10 md:p-12 shadow-sm mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-6">Skin care services for Long Island clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 font-light leading-relaxed">
            <p>
              Whether you are beginning a skin care routine or looking for a more corrective approach, we help you choose treatments
              that make sense for your skin instead of guessing from a menu.
            </p>
            <p>
              Clients visit us for customized facials, hydro facials, glow detox treatments, brow enhancements, and DMK skin revision
              programs built around consistency and visible progress.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-8">Popular treatments</h2>
          <div className="space-y-4">
            <Link to="/services/custom-facial" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">Customized Facial</h3>
              <p className="text-stone-600 font-light">A personalized reset for hydration, congestion, uneven texture, and overall skin balance.</p>
            </Link>
            <Link to="/services/gold-hydro-facial" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">24K Gold Hydro Facial</h3>
              <p className="text-stone-600 font-light">A luxury multi-step facial designed for radiance, renewal, and deep hydration.</p>
            </Link>
            <Link to="/services/dmk-skin-revision" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">DMK Skin Revision</h3>
              <p className="text-stone-600 font-light">Corrective enzyme therapy for acne, pigmentation, texture, and age-management concerns.</p>
            </Link>
          </div>
        </section>

        <section className="text-center bg-stone-900 text-white p-10 md:p-12 rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to visit a skin care spa on Long Island?</h2>
          <p className="text-stone-300 font-light max-w-2xl mx-auto mb-8">
            Book your appointment at Luxe Aesthetic Lab in East Meadow and start with a treatment plan tailored to your skin.
          </p>
          <a
            href={SOCIAL_LINKS.vagaro}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors"
          >
            Book Now
          </a>
        </section>
      </div>
    </main>
  );
};

export default SkinCareSpaLongIsland;
