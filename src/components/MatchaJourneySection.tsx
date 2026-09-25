import React, { useState } from 'react';
import { JourneyStep } from '../types.ts';

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: '35 Days in the Shade',
    subtitle: 'Blocks Sunlight to Maximize Sweetness & Chlorophyll',
    timeframe: 'April — Early May (Kyoto Hills)',
    description: 'Before harvest, tea bushes in Kyoto are covered with canopies to block 98% of sunlight. Starved of direct light, the plant supercharges its leaves with rich emerald chlorophyll and L-theanine amino acids—removing bitterness and creating a sweet, savory taste.',
    whyItMatters: 'Removes bitterness & packs the leaf with calming L-Theanine',
    image: '/src/assets/images/matcha_tana_shading_1790249799436.jpg',
    alt: 'Traditional Japanese tea farm in Uji covered in black shading nets in mountain mist',
  },
  {
    step: '02',
    title: 'Hand-Picking Tender Spring Leaves',
    subtitle: 'First Harvest Only · No Tough Stems or Twigs',
    timeframe: 'Early Spring Harvest',
    description: 'Farmers gently harvest only the tender top two leaves and newly emerged bud. Leaves are steamed immediately to lock in fresh green colour, then destemmed and deveined so only pure tender leaf flakes (tencha) remain.',
    whyItMatters: 'Zero bitter stems or fibers—only soft, sweet leaf tissue',
    image: '/src/assets/images/matcha_harvest_leaves_1790249818445.jpg',
    alt: 'Hands picking tender young bright green tea leaves during first flush harvest',
  },
  {
    step: '03',
    title: 'Slow Granite Stone Grinding',
    subtitle: '1 Entire Hour to Produce Just One 30g Tin',
    timeframe: 'Hypnotic Granite Mills',
    description: 'The tender dried leaves are ground between heavy hand-cut granite stones. The stones turn at a slow, meditative pace so friction heat never scorches the delicate tea aroma. It takes 60 full minutes of patient grinding to produce a single 30-gram tin.',
    whyItMatters: 'Zero heat damage preserves natural antioxidants & aroma',
    image: '/src/assets/images/matcha_stone_mill_1790249840334.jpg',
    alt: 'Natural granite stone mill slowly grinding tencha into vibrant green matcha powder',
  },
  {
    step: '04',
    title: 'Silk-Fine Emerald Powder',
    subtitle: 'Dissolves Seamlessly in Warm Water or Cold Milk',
    timeframe: '5–10 Micron Particle Size',
    description: 'The resulting powder is so fine it feels like melted silk between your fingertips. Because you consume the whole ground leaf rather than steeping and discarding tea bags, your body absorbs 100% of the vitamins, minerals, and polyphenols.',
    whyItMatters: 'You absorb 100% of the leaf nutrients vs 10% in normal green tea bags',
    image: '/src/assets/images/matcha_powder_macro_1790249416783.jpg',
    alt: 'Macro photograph of electric jade green ceremonial matcha powder on bamboo scoop',
  },
  {
    step: '05',
    title: 'Air-Express to India & Your Morning Cup',
    subtitle: 'Cold-Chain Delivery Across 500+ Indian Cities',
    timeframe: '2–3 Days Pan-India Express',
    description: 'Flown directly from Kyoto into Mumbai and Delhi air hubs. When you whisk 1 teaspoon with warm water, it creates a thick green micro-foam crema that delivers 4 to 6 hours of clean, jitter-free energy to power your workday.',
    whyItMatters: 'Freshly arrived with zero stale warehouse storage',
    image: '/src/assets/images/matcha_chawan_ceremony_1790248241090.jpg',
    alt: 'Earthy ceramic bowl with vibrant jade frothy whisked matcha and bamboo chasen',
  },
];

export const MatchaJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = JOURNEY_STEPS[activeStep];

  return (
    <section id="journey" className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            FROM TEA GARDENS IN JAPAN TO INDIA
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            HOW REAL MATCHA IS MADE
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-xl mx-auto leading-relaxed">
            See the slow, patient craftsmanship behind authentic Japanese stone-ground matcha—and why it tastes so much better than ordinary green tea.
          </p>
        </div>

        {/* Step Indicator Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-3 mb-10">
          {JOURNEY_STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-3.5 rounded-[12px] border transition-all text-left flex flex-col justify-between cursor-pointer focus:outline-none ${
                  isCurrent
                    ? 'border-[#4F6815] bg-[#4F6815] text-[#F7EFDA]'
                    : 'border-[#E2DAC4] bg-[#F7EFDA] text-[#4F6815] hover:border-[#4F6815]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-secondary text-[12px] font-bold">
                    STEP {s.step}
                  </span>
                  <span className={`font-primary text-[11px] ${isCurrent ? 'text-[#F7EFDA]/80' : 'text-[#6B7455]'}`}>
                    0{idx + 1}/05
                  </span>
                </div>
                <span className="font-secondary text-[13px] font-semibold leading-snug line-clamp-1">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-[#F7EFDA] rounded-[14px] border border-[#4F6815] p-6 md:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="font-secondary text-[11px] uppercase font-bold tracking-wider text-[#4F6815] bg-[#EFE6CE] px-3 py-1 rounded-full border border-[#E2DAC4]">
                  PHASE {current.step} OF 05
                </span>
                <span className="font-primary text-[12px] text-[#6B7455] font-medium">
                  {current.timeframe}
                </span>
              </div>

              <div>
                <h3 className="font-secondary text-[24px] sm:text-[30px] font-bold leading-tight text-[#4F6815] mb-1">
                  {current.title}
                </h3>
                <span className="font-primary text-[14px] text-[#6B7455] font-medium">
                  {current.subtitle}
                </span>
              </div>

              <p className="font-primary text-[15px] sm:text-[16px] text-[#4F6815] leading-relaxed">
                {current.description}
              </p>

              <div>
                <div className="font-primary text-[13px] text-[#4F6815] bg-[#EFE6CE] p-4 rounded-[12px] border border-[#E2DAC4]">
                  <span className="font-secondary font-bold uppercase block text-[11px] text-[#6B7455] mb-1">
                    WHY THIS MATTERS FOR YOU:
                  </span>
                  <span>{current.whyItMatters}</span>
                </div>
              </div>

              {/* Step Navigation Pill Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : JOURNEY_STEPS.length - 1))}
                  className="py-2.5 px-5 rounded-full border border-[#4F6815]/40 text-[#4F6815] font-secondary text-[13px] font-semibold uppercase hover:border-[#4F6815] cursor-pointer"
                >
                  ← PREV STEP
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < JOURNEY_STEPS.length - 1 ? prev + 1 : 0))}
                  className="py-2.5 px-6 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[13px] font-semibold uppercase tracking-[0.5px] hover:opacity-90 cursor-pointer"
                >
                  NEXT STEP →
                </button>
              </div>

            </div>

            {/* Right Column: High-Fidelity Journey Photo */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-[14px] overflow-hidden border border-[#4F6815] bg-[#EFE6CE] relative group shadow-sm">
                <img
                  src={current.image}
                  alt={current.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-[#F7EFDA] flex justify-between items-end">
                  <span className="font-secondary text-[12px] font-bold uppercase tracking-wide">
                    {current.title}
                  </span>
                  <span className="font-primary text-[11px] opacity-90">
                    STEP 0{activeStep + 1}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
