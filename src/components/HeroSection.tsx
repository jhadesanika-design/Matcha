import React from 'react';
import { HeroFigureIllustration } from './LineArtIllustrations.tsx';
import { CurvedTextOverlay } from './CurvedTextOverlay.tsx';

interface HeroSectionProps {
  onExploreClick: () => void;
  onShopClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onShopClick }) => {
  return (
    <section className="relative w-full min-h-screen bg-[#4F6815] text-[#F7EFDA] flex flex-col justify-between overflow-hidden pt-28 pb-8">
      
      {/* Middle Content Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 my-auto">
        
        {/* Left and Right Metadata Readouts (India Specific) */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-none select-none absolute top-1/2 -translate-y-1/2 px-4 md:px-8 z-10">
          {/* Left: Origin & Certification */}
          <div className="text-left">
            <span className="font-primary text-[12px] md:text-[13px] font-medium uppercase tracking-[0.5px] text-[#F7EFDA] opacity-95">
              KYOTO FIRST HARVEST · FSSAI COMPLIANT
            </span>
          </div>

          {/* Right: Indian Express Dispatch */}
          <div className="text-right">
            <span className="font-primary text-[12px] md:text-[13px] font-medium uppercase tracking-[0.5px] text-[#F7EFDA] opacity-95">
              PAN-INDIA AIR EXPRESS · 2-3 DAYS
            </span>
          </div>
        </div>

        {/* Central Illustration with Layered Curved Text */}
        <div className="relative flex flex-col items-center justify-center my-2">
          
          <div className="relative flex items-center justify-center">
            {/* Handcrafted continuous line art in deep tone */}
            <HeroFigureIllustration
              color="#2D3D0C"
              className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[410px] md:h-[410px] transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* The curved display text ribbon wrapping across the illustration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <CurvedTextOverlay
                text="100% PURE JAPANESE MATCHA · ZERO BITTERNESS · CLEAN FOCUS"
                color="#F7EFDA"
                className="w-[340px] sm:w-[480px] md:w-[620px] h-[140px] -mt-2"
              />
            </div>
          </div>

          {/* Value subtitle for Indian audience */}
          <div className="text-center max-w-lg mt-3 px-4 z-20">
            <p className="font-primary text-[15px] sm:text-[16px] text-[#F7EFDA]/90 leading-relaxed font-normal">
              No coffee jitters. No acidic milk chai. Just 4–6 hours of calm, jitter-free energy from stone-ground Japanese green tea leaves.
            </p>
          </div>

          {/* E-Commerce CTAs (Outlined Pill Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 z-20">
            <button
              onClick={onShopClick}
              className="py-3.5 px-8 rounded-full border-[1.5px] border-[#F7EFDA] bg-[#F7EFDA] text-[#4F6815] font-secondary text-[14px] font-bold uppercase tracking-[0.6px] hover:bg-transparent hover:text-[#F7EFDA] transition-all cursor-pointer shadow-md"
            >
              SHOP MATCHA TINS
            </button>
            <a
              href="#ritual"
              className="py-3.5 px-7 rounded-full border-[1.5px] border-[#F7EFDA]/60 bg-transparent text-[#F7EFDA] font-secondary text-[14px] font-semibold uppercase tracking-[0.6px] hover:border-[#F7EFDA] hover:bg-[#F7EFDA]/10 transition-all"
            >
              HOW TO MAKE IT (1 MIN)
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Prompt & Teaser Peek */}
      <div className="flex flex-col items-center justify-center relative z-20 mt-2">
        <button
          onClick={onExploreClick}
          className="font-primary text-[13px] text-[#F7EFDA] opacity-85 hover:opacity-100 transition-opacity flex flex-col items-center gap-2 cursor-pointer pb-4"
        >
          <span>Scroll down to see why thousands in India are switching from coffee to matcha</span>
          <svg
            className="w-4 h-4 animate-bounce opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {/* Teaser card peeking from the bottom */}
        <div className="w-[88%] max-w-[1040px] h-6 bg-[#F7EFDA] rounded-t-[14px] opacity-90 mx-auto transition-transform hover:-translate-y-1" />
      </div>
    </section>
  );
};
