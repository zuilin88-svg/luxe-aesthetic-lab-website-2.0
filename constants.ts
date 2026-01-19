import { Service, Review, FAQItem } from './types';

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/luxeaestheticlab",
  tiktok: "https://www.tiktok.com/@luxeaestheticlab",
  facebook: "https://www.facebook.com/profile.php?id=100054359885549",
  vagaro: "https://www.vagaro.com/luxeaestheticlab",
};

export const CONTACT_INFO = {
  address: "1959 Front St Suite 206, East Meadow, Long Island, NY 11554",
  phone: "+1 (929) 272-5500",
  email: "luxeaestheticlab@gmail.com",
  hours: [
    { day: "Monday", time: "10:00am – 6:00pm" },
    { day: "Tuesday", time: "10:00am – 6:00pm" },
    { day: "Wednesday", time: "10:00am – 6:00pm" },
    { day: "Thursday", time: "10:00am – 6:00pm" },
    { day: "Friday", time: "10:00am – 6:00pm" },
    { day: "Saturday", time: "10:00am – 6:00pm" },
    { day: "Sunday", time: "Closed" },
  ]
};

export const SERVICES: Service[] = [
  {
    id: "gold-hydro-facial",
    title: "24K Gold Hydro Facial",
    price: "$265",
    category: "facial",
    // Image: Golden aesthetic / Luxury facial
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/6e89beaa2e00699eb608b53f31c2c2382042c213/components/Layout/24k%20gold%20facial.jpg",
    shortDescription: "A luxury-curated, multi-step rejuvenating facial designed to restore radiance, vitality, and overall skin balance.",
    details: {
      duration: "90 Minutes",
      fullDescription: [
        "The 24K Gold Hydro Facial is a luxury-curated, multi-step rejuvenating facial designed to restore radiance, vitality, and overall skin balance. This 90-minute professional treatment combines advanced hydro technology, gentle resurfacing acids, precision extractions, and luxury-selected active infusions to support visible skin renewal while preserving the integrity of the skin barrier.",
        "Ideal for dull, fatigued, dehydrated, or congested skin, this facial delivers immediate luminosity while promoting long-term skin health through a refined, non-invasive approach."
      ]
    }
  },
  {
    id: "custom-facial",
    title: "Customized Facial",
    price: "$185",
    category: "facial",
    // Image: Esthetician analyzing skin / Clean facial
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/6e89beaa2e00699eb608b53f31c2c2382042c213/components/Layout/Customizing%20Facial.png",
    shortDescription: "A Smart Skin Reset Facial for All Skin Types.",
    details: {
      duration: "80 Minutes",
      fullDescription: [
        "The Customized Facial is a gentle, results-driven facial designed to meet your skin exactly where it is. Ideal for first-time clients, it helps restore balance, hydration, and clarity while addressing common concerns such as acne, congestion, uneven texture, dryness, and dullness.",
        "Each session is tailored by your skin professional based on your skin’s current condition, making it suitable for all skin types, including acne-prone skin."
      ]
    }
  },
  {
    id: "glow-detox-facial",
    title: "Glow Detox Facial",
    price: "$150",
    category: "facial",
    // Image: Fresh, clear skin / Water elements
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/1c52c40222e5f411b9b73a4ecd1c97390d5943e0/components/Layout/Glow%20detox.png",
    shortDescription: "Deep Cleansing & Pore Detox Treatment.",
    details: {
      duration: "65 Minutes",
      fullDescription: [
        "The Glow Detox Facial is a targeted facial designed to deeply cleanse, detoxify, and hydrate the skin. Ideal for clients looking to clear congested pores, reduce impurities, and boost radiance, this 65-minute treatment focuses on restoring skin clarity and a healthy glow."
      ]
    }
  },
  {
    id: "dmk-skin-revision",
    title: "DMK Skin Revision",
    price: "From $265",
    category: "specialty",
    // Image: Texture / Science of skin
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/1c52c40222e5f411b9b73a4ecd1c97390d5943e0/components/Layout/DMK%20Enzyme%20Therapy%20(2).png",
    shortDescription: "A professional, corrective facial that rebuilds, restores, and strengthens your skin at a cellular level.",
    details: {
      fullDescription: [
        "DMK Enzyme Treatment: A professional, corrective facial that rebuilds, restores, and strengthens your skin at a cellular level. Using a specialized enzyme system, it targets acne, pigmentation, aging, and rosacea, while following the Remove, Build, Maintain, Protect principle for long-term skin health and radiance. Unlike regular facials, DMK works deep within the skin to deliver lasting results, not just temporary glow."
      ],
    }
  },
  {
    id: "brows",
    title: "Ombré Brow & Microblading",
    price: "$550",
    category: "brows",
    // Image: Brow focus
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/7acee758bd049f670c627c8ab194aa0acfbc86c4/components/Layout/Ombre%20brow%20%26%20Microblading2.png",
    shortDescription: "Wake up with perfect brows every day. Semi-permanent solutions tailored to you.",
    details: {
      fullDescription: ["Wake up with perfect brows every day. Our semi-permanent solutions are designed to enhance your natural shape, offering realistic, long-lasting results tailored to your bone structure and preferences."],
    }
  },
  {
    id: "addons",
    title: "Add-Ons",
    price: "Various",
    category: "addon",
    // Image: Spa tools / LED
    image: "https://raw.githubusercontent.com/zuilin88-svg/luxe-aesthetic-lab-website/6e89beaa2e00699eb608b53f31c2c2382042c213/components/Layout/Add%20ons.png",
    shortDescription: "Elevate your facial experience with Celluma LED, Microcurrent, or Dermaplaning.",
    details: {
      fullDescription: ["Enhance your treatment with specialized add-ons."],
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Jaclyn Hugh",
    rating: 5,
    source: "Google",
    date: "2 weeks ago",
    text: "Sophia was a pleasure to work with! She thoroughly explained each treatment option and used her judgement to help me determine what was best for my skin. It was so relaxing and the day of and after, I could see improvements just from one session. My skin texture, color and overall feel look and feel so much better."
  },
  {
    id: 2,
    author: "Marica Sim",
    rating: 5,
    source: "Google",
    date: "1 month ago",
    text: "The best facial I have ever had. The attention to detail and the peaceful atmosphere made it a truly luxury experience. The Hydro Facial left my skin glowing for days."
  },
  {
    id: 3,
    author: "Edward Alexander",
    rating: 5,
    source: "Google",
    date: "3 months ago",
    text: "Been working with Luxe Aesthetic Lab for a number of years now with a variety of different treatments. They have my recommendation. They are a great team."
  },
   {
    id: 4,
    author: "Sarah Jenkins",
    rating: 5,
    source: "Google",
    date: "2 months ago",
    text: "I did the DMK enzyme therapy and it completely changed my skin. The clinic is beautiful and clean, and the staff is incredibly knowledgeable."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your cancellation policy?",
    answer: "We kindly ask for at least 24 hours notice for cancellations. Late cancellations may be subject to a fee."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our Vagaro link or by clicking the 'Book A Visit' button in the menu."
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes! We believe every skin journey starts with a conversation. We offer consultations to determine the best treatment plan for your skin type."
  },
  {
    question: "Is there downtime after DMK Skin Revision?",
    answer: "There can be some 'plasmatic effect' (veiny appearance) immediately after, which subsides quickly. Some stronger treatments may result in mild peeling, but your esthetician will guide you through post-care."
  }
];