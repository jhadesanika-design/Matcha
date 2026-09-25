import React from 'react';

interface Benefit {
  metric: string;
  label: string;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    metric: '4-6 HRS',
    label: 'SUSTAINED FOCUS',
    title: 'Clean Energy Without The Crash',
    description: 'Natural L-Theanine releases caffeine slowly into your bloodstream over 6 hours. Say goodbye to coffee jitters, anxiety, and afternoon fatigue.',
  },
  {
    metric: '137X',
    label: 'MORE ANTIOXIDANTS',
    title: 'Stronger Than 10 Steeped Tea Bags',
    description: 'Because you drink the entire ground leaf rather than water filtered through a bag, your body absorbs 100% of the catechins and EGCG for radiant skin and immunity.',
  },
  {
    metric: '0% ACIDITY',
    label: 'GUT-FRIENDLY & ALKALINE',
    title: 'No Stomach Burn Or Gas',
    description: 'Boiled milk chai and coffee can trigger acid reflux, burning, and bloating. Matcha is alkaline and gentle on your gut microbiome, even on an empty stomach.',
  },
  {
    metric: '100%',
    label: 'PURE JAPANESE LEAVES',
    title: 'Zero Sugar, Zero Fillers',
    description: 'Single-origin Japanese green tea. No artificial flavoring, no dairy powder, no added sugars, and zero plastic tea bag microplastics.',
  },
];

export const WellnessBenefitsSection: React.FC = () => {
  return (
    <section id="wellness" className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            HEALTH & DAILY WELLNESS
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            WHY UPGRADE YOUR MORNING TO MATCHA?
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-xl mx-auto leading-relaxed">
            More than just tea—a 1000-year-old mindful habit that fuels clean productivity, sharp focus, and long-term health.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.label}
              className="bg-[#F7EFDA] rounded-[14px] border border-[#E2DAC4] p-6 flex flex-col justify-between hover:border-[#4F6815]/60 transition-colors duration-300"
            >
              <div>
                <div className="font-secondary text-[32px] md:text-[36px] font-bold text-[#4F6815] mb-1">
                  {item.metric}
                </div>
                <span className="font-secondary text-[11px] uppercase font-bold tracking-wider text-[#6B7455] block mb-4">
                  {item.label}
                </span>

                <h3 className="font-secondary text-[18px] text-[#4F6815] font-bold mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="font-primary text-[13px] text-[#6B7455] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2DAC4]/60">
                <span className="font-secondary text-[11px] uppercase font-semibold text-[#4F6815]">
                  ✓ LAB VERIFIED IN INDIA
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
