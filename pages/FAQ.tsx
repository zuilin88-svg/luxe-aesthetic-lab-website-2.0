import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-stone-600 font-light">
            Common questions about our services and policies.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white border border-stone-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl text-stone-800 mb-3">{faq.question}</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-4">Still have questions?</p>
          <a href="mailto:luxeaestheticlab@gmail.com" className="text-gold-600 border-b border-gold-200 hover:text-gold-700">Contact Us Directly</a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;