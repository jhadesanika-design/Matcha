import React, { useState } from 'react';
import { ChawanSippingIllustration } from './LineArtIllustrations.tsx';

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  meta: string;
  caption: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: 'powder-macro',
    image: '/src/assets/images/matcha_powder_macro_1790249416783.jpg',
    alt: 'Vibrant electric jade green ceremonial matcha powder on bamboo scoop',
    title: '100% VIBRANT JADE GREEN',
    meta: 'FIRST HARVEST LEAVES · ZERO ADDED COLOR',
    caption: 'Real Japanese ceremonial matcha has a radiant emerald green glow. Low quality powder looks dull or yellow. Our rich color is 100% natural, formed by 35 days of sunlight shading in Kyoto hills.',
  },
  {
    id: 'tins-lineup',
    image: '/src/assets/images/matcha_tins_collection_1790249430583.jpg',
    alt: 'Minimalist matte green matcha tins on pedestal',
    title: 'SEALED FOR INDIAN WEATHER',
    meta: 'AIR-FREIGHTED TO INDIA · VACUUM PACKED',
    caption: "India's tropical heat can quickly spoil open tea. Every Matchaa tin is vacuum-sealed with food-grade nitrogen at source in Kyoto to lock out humidity and keep every scoop as fresh as day one.",
  },
  {
    id: 'ceremonial-chawan',
    image: '/src/assets/images/matcha_chawan_ceremony_1790248241090.jpg',
    alt: 'Earthy ceramic chawan bowl with vibrant jade frothy whisked matcha and bamboo chasen',
    title: '4–6 HOURS OF CALM FOCUS',
    meta: 'NO JITTERS · NO AFTERNOON COFFEE CRASH',
    caption: 'Unlike coffee or milky chai that cause heart flutters, acidity, and energy crashes, matcha contains L-Theanine. It gently releases energy over 6 hours, helping you stay calm and focused at work.',
  },
  {
    id: 'iced-latte',
    image: '/src/assets/images/matcha_latte_pastry_1790248203402.jpg',
    alt: 'Iced layered strawberry matcha latte on table',
    title: 'CAFE ICED LATTES AT HOME',
    meta: 'OAT MILK, ALMOND MILK OR REGULAR MILK · ₹50/CUP',
    caption: 'Love iced matcha lattes at trendy cafes? Whisk 1 teaspoon with a splash of water, pour over ice cubes, and top with chilled oat milk. Indulgent, cafe-quality taste at home for 1/6th the price.',
  },
];

export const StackedCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="w-full bg-[#F7EFDA] text-[#4F6815] py-16 md:py-24 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Layered Photo Cards with Circular Nav */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-[4/5]">
              
              {/* Layer 3 - Deepest offset card */}
              <div 
                className="absolute inset-0 bg-[#4F6815]/20 rounded-[14px] transform translate-x-4 translate-y-3 rotate-[3deg] transition-all duration-500 border border-[#4F6815]/25"
                aria-hidden="true"
              />

              {/* Layer 2 - Middle offset card */}
              <div 
                className="absolute inset-0 bg-[#E8DEBF] rounded-[14px] transform translate-x-2 translate-y-1.5 rotate-[1.5deg] transition-all duration-500 border border-[#4F6815]/30 shadow-xs"
                aria-hidden="true"
              />

              {/* Layer 1 - Active Front Photo Card with 1.5px border */}
              <div className="relative z-10 w-full h-full bg-[#F7EFDA] rounded-[14px] overflow-hidden border-[1.5px] border-[#4F6815] transition-all duration-500 flex flex-col">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle photo meta overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-[#F7EFDA] flex justify-between items-end">
                    <span className="font-primary text-[11px] font-semibold uppercase tracking-wide">
                      {currentSlide.meta}
                    </span>
                    <span className="font-secondary text-[12px] font-bold opacity-90">
                      0{currentIndex + 1} / 0{SLIDES.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Nav Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#4F6815] flex items-center justify-center text-[#4F6815] bg-transparent hover:bg-[#4F6815]/10 active:scale-95 transition-all cursor-pointer focus:outline-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#4F6815] flex items-center justify-center text-[#4F6815] bg-transparent hover:bg-[#4F6815]/10 active:scale-95 transition-all cursor-pointer focus:outline-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Hand-drawn Line Art + Uppercase Headline */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start w-full">
              <ChawanSippingIllustration
                color="#4F6815"
                strokeWidth={3}
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] transition-transform duration-500 hover:rotate-1"
              />
            </div>

            <div className="max-w-[480px]">
              <span className="font-secondary text-[12px] uppercase font-bold tracking-[1.5px] text-[#6B7455] block mb-2">
                WHAT MAKES MATCHAA DIFFERENT
              </span>
              <h2 className="font-secondary text-[20px] sm:text-[24px] uppercase tracking-[1px] leading-[1.3] text-[#4F6815] font-bold">
                {currentSlide.title}
              </h2>
            </div>

            <p className="font-primary text-[15px] text-[#6B7455] leading-relaxed max-w-[460px]">
              {currentSlide.caption}
            </p>

            <div className="pt-2">
              <a
                href="#products"
                className="inline-block py-3 px-6 rounded-full border-[1.5px] border-[#4F6815] font-secondary text-[13px] font-semibold uppercase tracking-[0.5px] text-[#4F6815] hover:bg-[#4F6815] hover:text-[#F7EFDA] transition-all"
              >
                EXPLORE ALL TINS →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
