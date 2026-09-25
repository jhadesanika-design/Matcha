import React from 'react';

interface SectionIntroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  className?: string;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow = "FARM DIRECT · SHADE GROWN · STONE GROUND",
  headline = "PURE CEREMONIAL JAPANESE MATCHA. OBSESSIVELY SHADED FOR 35 DAYS & STONE-MILLED ON NATURAL GRANITE.",
  description = "Harvested exclusively during early spring first flush in Kyoto, Japan. Microscopic silk-fine powder that froths effortlessly with warm water into a rich, naturally sweet green crema with zero bitterness.",
  className = "",
}) => {
  return (
    <div className={`text-center max-w-[960px] mx-auto px-6 ${className}`}>
      {/* Eyebrow Label */}
      <span className="block font-secondary text-[14px] sm:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold mb-4">
        {eyebrow}
      </span>

      {/* Display Headline */}
      <h2 className="font-secondary text-[26px] sm:text-[34px] md:text-[38px] uppercase tracking-[1px] leading-[1.2] text-[#4F6815] font-bold">
        {headline}
      </h2>

      {description && (
        <p className="mt-5 font-primary text-[15px] md:text-[16px] text-[#6B7455] max-w-[680px] mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
