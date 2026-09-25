import React, { useState } from 'react';

interface TasteProfile {
  name: string;
  badge: string;
  origin: string;
  shadingDays: number;
  sweetness: number; // 1-5
  smoothness: number; // 1-5
  richness: number; // 1-5
  bitterness: number; // 1-5 (low is better)
  character: string;
  bestServed: string;
}

const PROFILES: TasteProfile[] = [
  {
    name: 'Pure Ceremonial (Gold Tin)',
    badge: '100% Zero Bitterness',
    origin: 'Kyoto (Uji), Japan',
    shadingDays: 35,
    sweetness: 5,
    smoothness: 5,
    richness: 4,
    bitterness: 1, // very low
    character: 'Vibrant emerald green with a melt-in-the-mouth silky texture, sweet pea notes, and a soothing savory aftertaste. Never bitter.',
    bestServed: 'Whisked with warm water as a morning meditation or pure focus drink before work.',
  },
  {
    name: 'Daily Morning (Green Tin)',
    badge: 'Everyday Energy & Glow',
    origin: 'Kyoto, Japan',
    shadingDays: 30,
    sweetness: 4,
    smoothness: 4,
    richness: 4,
    bitterness: 1,
    character: 'Light, fresh, and gently sweet with floral undertones. Incredibly smooth and easy to drink every single day.',
    bestServed: 'Whisked warm with water, or poured over ice cubes with cold water and a squeeze of fresh lemon.',
  },
  {
    name: 'Cafe Latte Blend (100g)',
    badge: 'Best for Milk & Lattes',
    origin: 'Fukuoka (Yame), Japan',
    shadingDays: 25,
    sweetness: 3,
    smoothness: 4,
    richness: 5,
    bitterness: 2,
    character: 'Punchy, bold green tea character designed to stay deep green, aromatic, and rich even when blended with oat, almond, or dairy milk.',
    bestServed: 'Hot or iced matcha lattes with oat milk, almond milk, or regular milk and a drizzle of honey.',
  },
];

export const CultivarTasteProfile: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = PROFILES[selectedIdx];

  return (
    <section className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            TASTE & FLAVOUR COMPARISON
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            FIND YOUR PERFECT MATCH
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-xl mx-auto leading-relaxed">
            Wondering which tin suits you best? Compare their sweetness, smoothness, and how you prefer to drink them.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {PROFILES.map((p, index) => {
            const isSelected = selectedIdx === index;
            return (
              <button
                key={p.name}
                onClick={() => setSelectedIdx(index)}
                className={`py-3 px-6 rounded-full border-[1.5px] font-secondary text-[13px] uppercase tracking-[0.5px] font-semibold transition-all cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'border-[#4F6815] bg-[#4F6815] text-[#F7EFDA]'
                    : 'border-[#4F6815]/40 text-[#4F6815] hover:border-[#4F6815]'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Profile Card Details */}
        <div className="bg-[#F7EFDA] rounded-[14px] border border-[#4F6815] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-secondary text-[11px] font-bold uppercase tracking-wider text-[#4F6815] bg-[#EFE6CE] px-3 py-1 rounded-full border border-[#E2DAC4] inline-block mb-3">
                  {current.badge}
                </span>
                <h3 className="font-secondary text-[26px] md:text-[30px] font-bold text-[#4F6815]">
                  {current.name}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[12px] font-primary text-[#6B7455]">
                <span>Origin: {current.origin}</span>
                <span>•</span>
                <span>{current.shadingDays} Days Shaded</span>
                <span>•</span>
                <span>Stone Milled on Granite</span>
              </div>

              <p className="font-primary text-[16px] text-[#4F6815] leading-relaxed">
                "{current.character}"
              </p>

              <div className="p-4 rounded-[12px] bg-[#EFE6CE] border border-[#E2DAC4]">
                <span className="font-secondary text-[11px] font-bold uppercase tracking-wider text-[#6B7455] block mb-1">
                  BEST WAY TO ENJOY:
                </span>
                <p className="font-primary text-[13px] text-[#4F6815] leading-relaxed">
                  {current.bestServed}
                </p>
              </div>
            </div>

            {/* Right Column: Sensory Metrics */}
            <div className="lg:col-span-6 space-y-5 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#E2DAC4] pt-6 lg:pt-0">
              <span className="font-secondary text-[12px] uppercase font-bold tracking-[1px] text-[#6B7455] block mb-2">
                TASTE BREAKDOWN MATRIX
              </span>

              {/* Sweetness */}
              <div>
                <div className="flex justify-between font-primary text-[13px] font-medium mb-1">
                  <span>Natural Sweetness</span>
                  <span className="text-[#4F6815] font-bold">{current.sweetness} / 5</span>
                </div>
                <div className="w-full h-2.5 bg-[#E2DAC4] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4F6815] rounded-full transition-all duration-500"
                    style={{ width: `${(current.sweetness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Smoothness */}
              <div>
                <div className="flex justify-between font-primary text-[13px] font-medium mb-1">
                  <span>Smoothness & Crema</span>
                  <span className="text-[#4F6815] font-bold">{current.smoothness} / 5</span>
                </div>
                <div className="w-full h-2.5 bg-[#E2DAC4] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4F6815] rounded-full transition-all duration-500"
                    style={{ width: `${(current.smoothness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Richness in Milk */}
              <div>
                <div className="flex justify-between font-primary text-[13px] font-medium mb-1">
                  <span>Body & Richness</span>
                  <span className="text-[#4F6815] font-bold">{current.richness} / 5</span>
                </div>
                <div className="w-full h-2.5 bg-[#E2DAC4] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4F6815] rounded-full transition-all duration-500"
                    style={{ width: `${(current.richness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Bitterness Level */}
              <div>
                <div className="flex justify-between font-primary text-[13px] font-medium mb-1">
                  <span>Bitterness (Lower is Sweeter)</span>
                  <span className="text-[#4F6815] font-bold">
                    {current.bitterness === 1 ? 'Zero (1/5)' : 'Mild & Balanced (2/5)'}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#E2DAC4] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4F6815] rounded-full transition-all duration-500"
                    style={{ width: `${(current.bitterness / 5) * 100}%` }}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
