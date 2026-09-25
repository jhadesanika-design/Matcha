import React from 'react';
import { ChasenWhiskIllustration } from './LineArtIllustrations.tsx';

interface ContentCardPairProps {
  onShopTeaware: () => void;
}

export const ContentCardPair: React.FC<ContentCardPairProps> = ({ onShopTeaware }) => {
  return (
    <section id="ritual" className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Opener */}
        <div className="text-center mb-16">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            EASY 1-MINUTE PREPARATION
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            HOW TO MAKE YOUR MORNING CUP
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-lg mx-auto">
            You don't need to be a tea master. In under 60 seconds, you can whisk rich, frothy cafe-quality matcha right in your kitchen.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Natural-edge photography */}
          <div className="lg:col-span-7 overflow-hidden rounded-[14px] border border-[#E2DAC4]">
            <img
              src="/images/matcha_chawan_ceremony_1790248241090.jpg"
              alt="Hand-whisked bowl of vibrant green ceremonial matcha with bamboo chasen"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
            <div className="p-3 bg-[#EFE6CE] flex flex-col sm:flex-row sm:items-center justify-between font-primary text-[12px] text-[#4F6815] font-medium gap-1">
              <span>TRADITIONAL HOT BOWL OR ICED LATTE</span>
              <span className="text-[#6B7455]">75°C WARM WATER · 2G POWDER · 15 SECONDS</span>
            </div>
          </div>

          {/* Right Column: Line-art illustration + Brewing Steps */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-full flex justify-center lg:justify-start">
              <ChasenWhiskIllustration
                color="#4F6815"
                strokeWidth={2.5}
                className="w-[180px] h-[180px] transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h3 className="font-secondary text-[22px] md:text-[24px] uppercase tracking-[1px] leading-[1.2] text-[#4F6815] font-bold">
              3 SIMPLE STEPS TO FOAMY PERFECTION
            </h3>

            <div className="space-y-4 font-primary text-[13px] text-[#6B7455] text-left">
              <div className="flex gap-3 bg-[#EFE6CE] p-3 rounded-[10px]">
                <span className="font-secondary font-bold text-[#4F6815] text-[14px]">01</span>
                <div>
                  <span className="font-secondary font-bold text-[#4F6815] block">MEASURE & SIFT</span>
                  <p className="mt-0.5">Scoop 1/2 to 1 teaspoon (about 1.5g–2g) into your cup or bowl. A small mesh strainer helps eliminate any tiny clumps.</p>
                </div>
              </div>

              <div className="flex gap-3 bg-[#EFE6CE] p-3 rounded-[10px]">
                <span className="font-secondary font-bold text-[#4F6815] text-[14px]">02</span>
                <div>
                  <span className="font-secondary font-bold text-[#4F6815] block">ADD WARM WATER</span>
                  <p className="mt-0.5">Pour 50ml–60ml of warm water (75°C–80°C). Important: Never use boiling water, as high heat ruins the sweet flavor.</p>
                </div>
              </div>

              <div className="flex gap-3 bg-[#EFE6CE] p-3 rounded-[10px]">
                <span className="font-secondary font-bold text-[#4F6815] text-[14px]">03</span>
                <div>
                  <span className="font-secondary font-bold text-[#4F6815] block">WHISK IN 'W' MOTIONS</span>
                  <p className="mt-0.5">Whisk briskly back and forth for 15 seconds until a smooth emerald foam forms. Drink straight or pour over cold oat milk and ice!</p>
                </div>
              </div>
            </div>

            <div className="pt-2 w-full sm:w-auto">
              <button
                onClick={onShopTeaware}
                className="w-full sm:w-auto py-3.5 px-8 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[13px] font-bold uppercase tracking-[0.6px] hover:bg-transparent hover:text-[#4F6815] transition-all cursor-pointer focus:outline-none shadow-xs"
              >
                GET COMPLETE STARTER KIT (₹3,899)
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
