import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { SOCIAL_LINKS } from '../constants';

const DmkEnzymeTherapyEastMeadow: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-stone-50">
      <Seo
        title="DMK Enzyme Therapy in East Meadow, NY | Luxe Aesthetic Lab"
        description="Searching for DMK enzyme therapy in East Meadow? Luxe Aesthetic Lab offers DMK skin revision treatments for acne, pigmentation, texture, and age-management concerns."
        canonical="https://www.luxeaestheticlab.com/dmk-enzyme-therapy-east-meadow"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-gold-600 font-bold mb-4">DMK Enzyme Therapy East Meadow</p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">DMK enzyme therapy and skin revision in East Meadow</h1>
            <p className="text-stone-600 leading-relaxed font-light mb-6">
              DMK enzyme therapy is one of our signature corrective treatments at Luxe Aesthetic Lab. It is designed to support skin function,
              improve circulation, and help address concerns such as acne, pigmentation, uneven texture, reactive skin, and signs of aging.
            </p>
            <p className="text-stone-600 leading-relaxed font-light mb-8">
              If you are looking for DMK skin revision in East Meadow, we offer graduated treatment levels based on your skin condition and goals.
            </p>
            <a
              href={SOCIAL_LINKS.vagaro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
          <div className="overflow-hidden rounded-sm shadow-lg bg-white">
            <img src="/images/dmk-skin-revision.png" alt="DMK enzyme therapy treatment in East Meadow" className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="bg-white p-10 md:p-12 shadow-sm mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-6">What DMK enzyme therapy helps with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-600 font-light">
            <div className="border border-stone-200 p-6">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">Acne and congestion</h3>
              <p>Supports clearer skin by helping address buildup, congestion, and imbalanced skin function.</p>
            </div>
            <div className="border border-stone-200 p-6">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">Pigmentation and uneven tone</h3>
              <p>Useful for clients working on post-acne marks, dullness, or uneven-looking skin tone.</p>
            </div>
            <div className="border border-stone-200 p-6">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">Texture and resilience</h3>
              <p>Can help skin feel stronger, smoother, and more balanced over time when done consistently.</p>
            </div>
            <div className="border border-stone-200 p-6">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">Age-management support</h3>
              <p>Often chosen by clients who want a more advanced corrective option than a standard relaxing facial.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-serif text-3xl text-stone-900 mb-8">Treatment levels</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 shadow-sm border-l-4 border-gold-400">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-serif text-2xl text-stone-900">Introduction Level</h3>
                <span className="text-gold-600 font-serif text-xl">$275</span>
              </div>
              <p className="text-stone-600 font-light">Ideal for clients starting DMK enzyme therapy and looking to begin corrective skin revision.</p>
            </div>
            <div className="bg-white p-8 shadow-sm border-l-4 border-gold-500">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-serif text-2xl text-stone-900">Advanced Level</h3>
                <span className="text-gold-600 font-serif text-xl">$315</span>
              </div>
              <p className="text-stone-600 font-light">Designed for clients who are ready for more targeted revision and stronger corrective support.</p>
            </div>
            <div className="bg-stone-900 p-8 shadow-lg border-l-4 border-gold-500">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-serif text-2xl text-gold-200">Elite Level</h3>
                <span className="text-gold-200 font-serif text-xl">$350</span>
              </div>
              <p className="text-stone-300 font-light">Our most advanced DMK treatment level, customized for deeper skin revision goals.</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Who this is best for</h2>
            <ul className="space-y-3 text-stone-600 font-light list-disc pl-5">
              <li>Clients with acne-prone or congested skin</li>
              <li>People working on skin texture or post-inflammatory marks</li>
              <li>Clients wanting a more corrective option than a basic facial</li>
              <li>Anyone seeking guided long-term skin revision</li>
            </ul>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Explore related pages</h2>
            <div className="space-y-3">
              <Link to="/facial-spa-east-meadow" className="block text-gold-600 hover:text-gold-700">Facial Spa in East Meadow</Link>
              <Link to="/skin-care-spa-long-island" className="block text-gold-600 hover:text-gold-700">Skin Care Spa on Long Island</Link>
              <Link to="/services/dmk-skin-revision" className="block text-gold-600 hover:text-gold-700">DMK Skin Revision Service Details</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DmkEnzymeTherapyEastMeadow;
