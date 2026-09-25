import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onOpenShop: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenShop,
  onOpenCart,
  cartCount,
}) => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.85) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = !scrolledPastHero;
  const textColor = isLight ? 'text-[#F7EFDA]' : 'text-[#4F6815]';

  return (
    <>
      {/* Top Pan-India Ticker Banner */}
      <div className={`w-full py-2 px-4 text-center font-primary text-[11px] md:text-[12px] uppercase font-medium tracking-wide transition-colors duration-300 z-50 fixed top-0 left-0 right-0 ${
        scrolledPastHero ? 'bg-[#4F6815] text-[#F7EFDA]' : 'bg-[#2D3D0C] text-[#F7EFDA]/95'
      }`}>
        <span>AIR-FREIGHTED FROM KYOTO · FREE PAN-INDIA EXPRESS DELIVERY OVER ₹1,499 · UPI (5% OFF) & COD</span>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-40 px-6 md:px-12 py-3.5 transition-colors duration-300 flex items-center justify-between ${
          scrolledPastHero ? 'bg-[#F7EFDA]/95 backdrop-blur-sm border-b border-[#E2DAC4]' : 'bg-transparent'
        }`}
      >
        {/* Zone 1: Left Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <button
            onClick={onOpenShop}
            className={`font-secondary font-semibold text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity cursor-pointer focus:outline-none`}
          >
            SHOP
          </button>

          <a
            href="#products"
            className={`hidden sm:inline-block font-secondary font-medium text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity`}
          >
            OUR MATCHA
          </a>

          <a
            href="#journey"
            className={`hidden md:inline-block font-secondary font-medium text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity`}
          >
            HOW IT'S MADE
          </a>

          <a
            href="#wellness"
            className={`hidden lg:inline-block font-secondary font-medium text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity`}
          >
            BENEFITS
          </a>

          <a
            href="#faqs"
            className={`hidden xl:inline-block font-secondary font-medium text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity`}
          >
            FAQS
          </a>
        </div>

        {/* Zone 2: Centered Wordmark — matchaa */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="#"
            className={`font-secondary text-[26px] md:text-[30px] font-bold lowercase tracking-tight ${textColor} hover:opacity-85 transition-opacity`}
          >
            matchaa
          </a>
        </div>

        {/* Zone 3: Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#products"
            className={`hidden sm:inline-block font-secondary font-semibold text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity`}
          >
            EXPLORE TINS
          </a>

          <button
            onClick={onOpenCart}
            className={`font-secondary font-semibold text-[13px] uppercase tracking-[0.5px] ${textColor} hover:opacity-75 transition-opacity flex items-center gap-2 cursor-pointer focus:outline-none py-1.5 px-3 rounded-full border border-current`}
            aria-label="View shopping bag"
          >
            <span>BAG</span>
            <span className="font-primary text-[12px] font-bold tabular-nums">({cartCount})</span>
          </button>
        </div>
      </header>
    </>
  );
};
