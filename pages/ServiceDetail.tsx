import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, SOCIAL_LINKS } from '../constants';
import { ArrowLeft, Clock } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<'id'>();
  const service = id ? SERVICES.find((s) => s.id === id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[50vh]">
        <h1 className="text-3xl font-serif mb-4">Service Not Found</h1>
        <Link to="/services" className="text-gold-600 hover:underline">Back to Services</Link>
      </div>
    );
  }

  // --- Specific Layouts ---

  // 1. DMK Skin Revision Layout
  if (service.id === 'dmk-skin-revision') {
    return (
      <div className="pt-24 pb-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link to="/services" className="inline-flex items-center text-sm text-stone-500 hover:text-gold-600 mb-8"><ArrowLeft size={16} className="mr-2"/> Back to Services</Link>
           
           <div className="text-center mb-16">
              <span className="text-gold-600 uppercase tracking-widest text-sm font-bold mb-2 block">Advanced Skincare</span>
              <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">DMK Enzyme Treatment</h1>
              <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto font-light">
                A professional, corrective facial that rebuilds, restores, and strengthens your skin at a cellular level. Using a specialized enzyme system, it targets acne, pigmentation, aging, and rosacea, while following the Remove, Build, Maintain, Protect principle for long-term skin health and radiance. Unlike regular facials, DMK works deep within the skin to deliver lasting results, not just temporary glow.
              </p>
              <a 
                href={SOCIAL_LINKS.vagaro} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-stone-900 text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors"
              >
                Schedule a Consultation
              </a>
           </div>

           {/* Intro Content Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div className="h-80 md:h-96 w-full rounded-sm overflow-hidden shadow-lg bg-white">
                <img src={service.image} alt="DMK Texture" className="w-full h-full object-cover"/>
             </div>
             <div>
               <h2 className="font-serif text-3xl mb-6 text-stone-800">How DMK Enzyme Treatment Works</h2>
               <p className="text-stone-600 font-light leading-relaxed">
                 DMK Enzyme Treatment uses a specialized enzyme system to work at the cellular level, supporting your skin’s natural repair and renewal. Following the Remove, Build, Maintain, Protect principle, it clears impurities, stimulates repair, balances hydration and tone, and protects the skin from damage.
               </p>
             </div>
           </div>

           {/* Levels Section */}
           <div className="border border-gold-300 p-8 md:p-12 text-center bg-white mb-12 relative shadow-sm">
             <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-gold-300 rounded-full hidden md:block"></div>
             <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-gold-300 rounded-full hidden md:block"></div>
             
             <h2 className="font-serif text-3xl mb-4 text-stone-800">Treatment Levels</h2>
             <p className="text-stone-500 font-light max-w-2xl mx-auto italic">
               We offer graduated levels of DMK therapy to suit your skin's evolving needs.
             </p>
           </div>

           {/* The 3 Levels */}
           <div className="space-y-6">
             {/* Intro Level */}
             <div className="bg-white p-8 rounded-sm border-l-4 border-stone-200 hover:border-gold-400 transition-colors shadow-sm">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl text-stone-900">Intro Level</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The perfect introduction to DMK Enzyme Therapy. Focuses on kickstarting the skin's enzymatic activity for visible revitalization.
                </p>
             </div>

             {/* Advanced Level */}
             <div className="bg-white p-8 rounded-sm border-l-4 border-stone-300 hover:border-gold-500 transition-colors shadow-sm">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl text-stone-900">Advanced Level</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  For established clients. Incorporates more targeted exfoliation and deeper muscle banding for enhanced lifting and firming results.
                </p>
             </div>

             {/* Elite Level */}
             <div className="bg-stone-900 p-8 rounded-sm border-l-4 border-gold-500 text-white shadow-lg">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl text-gold-200">Elite Level</h3>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Our premier treatment. Fully customized with multiple exfoliants and advanced protocols for maximum skin revision and dramatic results.
                </p>
             </div>
           </div>
           
           <div className="mt-12 text-center">
             <p className="text-stone-500 mb-4 text-sm">Not sure which level is right for you?</p>
             <Link to="/about" className="text-stone-800 font-serif border-b border-stone-300 hover:text-gold-600 hover:border-gold-600 transition-colors">
               Contact us for guidance
             </Link>
           </div>
        </div>
      </div>
    );
  }

  // 2. Brows Layout
  if (service.id === 'brows') {
    return (
      <div className="pt-24 pb-20">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="inline-flex items-center text-sm text-stone-500 hover:text-gold-600 mb-8"><ArrowLeft size={16} className="mr-2"/> Back to Services</Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="h-[500px] rounded-sm overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-4xl text-stone-900 mb-4">{service.title}</h1>
                <p className="text-2xl text-gold-600 font-serif mb-6">{service.price}</p>
                <p className="text-stone-600 mb-8 font-light leading-relaxed">
                  Wake up with perfect brows every day. Our semi-permanent solutions are designed to enhance your natural shape, offering realistic, long-lasting results tailored to your bone structure and preferences.
                </p>
                <a
                  href={SOCIAL_LINKS.vagaro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-900 text-white text-center py-4 uppercase tracking-widest hover:bg-gold-500 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-stone-50 p-8 rounded-sm">
                <h3 className="font-serif text-2xl mb-4">Ombré Powder Brows</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A semi-permanent technique creating a soft, shaded pencil look. Great for all skin types, including oily skin. Heals to a powdery finish for a makeup-filled effect.
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-sm">
                 <h3 className="font-serif text-2xl mb-4">Microblading</h3>
                 <p className="text-stone-600 text-sm leading-relaxed">
                   Uses a manual handheld tool to create hair-like strokes. Best for normal to dry skin types looking for a fluffy, natural brow enhancement.
                 </p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-16">
               <h2 className="font-serif text-3xl mb-8 text-center">Important Information</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                   <h4 className="font-bold text-stone-800 uppercase tracking-wide mb-4 text-sm">Contraindications</h4>
                   <ul className="space-y-2 text-stone-600 text-sm list-disc pl-5">
                     <li>Pregnant or nursing</li>
                     <li>Diabetic (requires doctor's clearance)</li>
                     <li>Chemotherapy (consult your doctor)</li>
                     <li>Viral infections or diseases</li>
                     <li>Epilepsy</li>
                     <li>Pacemaker or major heart problems</li>
                     <li>Skin irritations or Psoriasis near the treated area</li>
                     <li>Botox in the past 2 weeks</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-bold text-stone-800 uppercase tracking-wide mb-4 text-sm">Procedure Steps</h4>
                   <ol className="space-y-4 text-stone-600 text-sm list-decimal pl-5">
                     <li><strong>Consultation:</strong> We discuss shape, color, and your desired outcome.</li>
                     <li><strong>Mapping:</strong> Precision measuring to create symmetry tailored to your face.</li>
                     <li><strong>Numbing:</strong> Topical anesthetic is applied to ensure comfort.</li>
                     <li><strong>Procedure:</strong> The pigment is applied using the chosen technique.</li>
                     <li><strong>Reveal & Aftercare:</strong> Review results and receive detailed healing instructions.</li>
                   </ol>
                 </div>
               </div>
            </div>
         </div>
      </div>
    );
  }

  // 3. Add-ons Layout
  if (service.id === 'addons') {
    return (
      <div className="pt-24 pb-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="inline-flex items-center text-sm text-stone-500 hover:text-gold-600 mb-8"><ArrowLeft size={16} className="mr-2"/> Back to Services</Link>
            
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl text-stone-900 mb-4">Add-Ons</h1>
              <p className="text-stone-600 font-light">Elevate your facial experience.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
               <div className="flex flex-col md:flex-row items-center bg-white border border-stone-100 shadow-sm p-6 rounded-sm">
                 <div className="flex-1">
                   <h3 className="font-serif text-xl mb-1">Celluma LED Therapy</h3>
                   <p className="text-stone-500 text-sm">Light energy to improve cellular health, reduce inflammation, and kill acne bacteria.</p>
                 </div>
               </div>

               <div className="flex flex-col md:flex-row items-center bg-white border border-stone-100 shadow-sm p-6 rounded-sm">
                 <div className="flex-1">
                   <h3 className="font-serif text-xl mb-1">Microcurrent</h3>
                   <p className="text-stone-500 text-sm">A "workout" for your face. Stimulates facial muscles for a lifted, toned appearance.</p>
                 </div>
               </div>

               <div className="flex flex-col md:flex-row items-center bg-white border border-stone-100 shadow-sm p-6 rounded-sm">
                 <div className="flex-1">
                   <h3 className="font-serif text-xl mb-1">Dermaplaning</h3>
                   <p className="text-stone-500 text-sm">Physical exfoliation removing dead skin and vellus hair (peach fuzz) for ultra-smooth skin.</p>
                 </div>
               </div>
            </div>
         </div>
      </div>
    );
  }

  // 4. Default Facial Layout (Hydro, Custom, Glow)
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <Link to="/services" className="inline-flex items-center text-sm text-stone-500 hover:text-gold-600 mb-8"><ArrowLeft size={16} className="mr-2"/> Back to Services</Link>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
           <div className="relative">
             <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
               <img src={service.image} alt={service.title} className="w-full h-full object-cover"/>
             </div>
             <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold-200 -z-10 hidden md:block"></div>
           </div>

           <div className="pt-8">
             <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">{service.title}</h1>
             
             <div className="flex items-center space-x-6 mb-8 text-sm">
               <span className="font-bold text-2xl text-gold-600 font-serif">{service.price}</span>
               {service.details?.duration && (
                 <span className="flex items-center text-stone-500">
                   <Clock size={16} className="mr-2" /> {service.details.duration}
                 </span>
               )}
             </div>

             <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed mb-10">
               {service.details?.fullDescription.map((paragraph, index) => (
                 <p key={index} className="mb-4">{paragraph}</p>
               ))}
             </div>

             <div className="bg-stone-50 p-8 border-l-2 border-gold-500">
               <h3 className="font-serif text-lg mb-4">Ready to glow?</h3>
               <p className="text-sm text-stone-500 mb-6">
                 Book your appointment online easily. We look forward to treating you.
               </p>
               <a 
                 href={SOCIAL_LINKS.vagaro} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors"
               >
                 Schedule Appointment
               </a>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ServiceDetail;