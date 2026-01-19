import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">About Us</h1>
          <p className="text-stone-600 font-light text-lg">
            Where luxury meets clinical results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <img 
              src="https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/6e89beaa2e00699eb608b53f31c2c2382042c213/components/Layout/About%20US%20page.png" 
              alt="Luxe Aesthetic Lab Treatment Room" 
              className="w-full h-auto rounded-sm shadow-md"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-stone-800 mb-6">Our Philosophy</h2>
            <p className="text-stone-600 leading-relaxed mb-4 font-light">
              Luxe Aesthetic Lab is a boutique skincare studio specializing in advanced, personalized facial treatments. We are not a traditional spa; we are a results-oriented aesthetic lab.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 font-light">
              We focus on skin revision for concerns such as acne, reactive pigmentation, and age management. With professional-grade techniques, state-of-the-art modalities, and a deep understanding of skin physiology, we guide our clients toward lasting skin health.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-light">
              Led by Sophia, our skilled esthetician with over a decade of experience, we craft customized skincare solutions tailored to your unique needs.
            </p>
            <Link 
              to="/services" 
              className="text-gold-600 font-serif border-b border-gold-200 hover:text-gold-700 hover:border-gold-600 transition-colors"
            >
              Explore Our Treatments
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="bg-stone-50 p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl text-stone-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-700 font-serif italic text-xl">1</div>
              <h3 className="font-serif text-xl mb-2">Customized Care</h3>
              <p className="text-stone-500 text-sm">No two faces are alike. Every treatment is tailored to your specific skin condition.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-700 font-serif italic text-xl">2</div>
              <h3 className="font-serif text-xl mb-2">Advanced Modalities</h3>
              <p className="text-stone-500 text-sm">We use clinical-grade technology and world-class products like DMK to achieve real change.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-700 font-serif italic text-xl">3</div>
              <h3 className="font-serif text-xl mb-2">Luxurious Environment</h3>
              <p className="text-stone-500 text-sm">Relax and unwind in a clean, modern, and serene space designed for your comfort.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;