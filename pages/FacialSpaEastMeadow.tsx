import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { SOCIAL_LINKS } from '../constants';

const FacialSpaEastMeadow: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-stone-50">
      <Seo
        title="Facial Spa in East Meadow, NY | Luxe Aesthetic Lab"
        description="Looking for a facial spa in East Meadow, NY? Luxe Aesthetic Lab offers customized facials, glow detox treatments, and advanced skin care in a luxury studio."
        canonical="https://www.luxeaestheticlab.com/facial-spa-east-meadow"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-gold-600 font-bold mb-4">East Meadow Facial Spa</p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Luxury facial spa treatments in East Meadow, NY</h1>
            <p className="text-stone-600 leading-relaxed font-light mb-6">
              Luxe Aesthetic Lab is a private skin care spa in East Meadow focused on customized facials, corrective treatments, and results-driven skin health.
              If you are searching for a facial spa near East Meadow with a calm luxury feel and a strong clinical approach, this is exactly what we do.
            </p>
            <p className="text-stone-600 leading-relaxed font-light mb-8">
              We help clients address congestion, dullness, dehydration, uneven texture, acne-prone skin, and early signs of aging with treatments tailored to real skin concerns, not one-size-fits-all protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL_LINKS.vagaro}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors text-center"
              >
                Book A Facial
              </a>
              <Link
                to="/services"
                className="border border-stone-300 px-8 py-3 uppercase tracking-widest text-sm hover:border-gold-500 hover:text-gold-600 transition-colors text-center"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-lg bg-white">
            <img src="/images/customizing-facial.png" alt="Customized facial treatment in East Meadow" className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Customized Facials</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">Personalized facial treatments for acne, dryness, sensitivity, uneven tone, and texture concerns.</p>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Glow Detox Treatments</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">Deep cleansing and pore-focused treatments designed to refresh congested, tired-looking skin.</p>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl mb-3">Advanced Skin Revision</h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed">Corrective care using advanced methods like DMK enzyme therapy to support long-term skin health.</p>
          </div>
        </section>

        <section className="bg-white p-10 md:p-12 shadow-sm mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-6">Why East Meadow clients choose Luxe Aesthetic Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 font-light leading-relaxed">
            <p>
              We combine a luxury studio experience with practical treatment planning. That means we take the time to understand your skin goals,
              explain your options clearly, and recommend treatments that fit your current skin condition.
            </p>
            <p>
              Our approach is especially helpful for clients looking for more than a relaxing spa facial. We focus on visible improvement,
              consistency, and treatments that support healthier skin over time.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-8">Popular facial services in East Meadow</h2>
          <div className="space-y-4">
            <Link to="/services/custom-facial" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">Customized Facial</h3>
              <p className="text-stone-600 font-light">A smart skin reset facial for all skin types, ideal for first-time clients and ongoing maintenance.</p>
            </Link>
            <Link to="/services/glow-detox-facial" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">Glow Detox Facial</h3>
              <p className="text-stone-600 font-light">Deep cleansing and pore detox support for congested skin that needs clarity and hydration.</p>
            </Link>
            <Link to="/services/dmk-skin-revision" className="block bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">DMK Skin Revision</h3>
              <p className="text-stone-600 font-light">A professional corrective treatment for acne, pigmentation, texture, and age-management concerns.</p>
            </Link>
          </div>
        </section>

        <section className="text-center bg-stone-900 text-white p-10 md:p-12 rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Looking for a facial spa near East Meadow?</h2>
          <p className="text-stone-300 font-light max-w-2xl mx-auto mb-8">
            Book your visit at Luxe Aesthetic Lab and get a treatment plan tailored to your skin goals.
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

export default FacialSpaEastMeadow;
