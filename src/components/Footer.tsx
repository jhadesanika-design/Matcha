import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#F7EFDA] text-[#4F6815] pt-20 pb-12 px-6 md:px-12 border-t border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Top Section: Wordmark + Morning Journal Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-secondary text-[44px] md:text-[56px] font-bold lowercase tracking-tight block leading-none text-[#4F6815]">
              matchaa
            </span>
            <p className="font-primary text-[14px] text-[#6B7455] max-w-md leading-relaxed">
              India’s premier house for 100% authentic Japanese matcha. Farm-direct from Kyoto, stone-ground on traditional granite, and air-freighted fresh to Mumbai, Bengaluru, Delhi NCR, and 500+ Indian cities.
            </p>
          </div>

          <div className="lg:col-span-6">
            <span className="font-secondary text-[12px] uppercase font-bold tracking-wider text-[#6B7455] block mb-2">
              GET 10% OFF YOUR FIRST MATCHA ORDER
            </span>
            {subscribed ? (
              <div className="h-12 px-6 rounded-full border border-[#4F6815] bg-[#EFE6CE] flex items-center text-[13px] font-primary font-medium text-[#4F6815]">
                ✓ Welcome to Matchaa! Your 10% discount code has been sent to {email}.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-6 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] placeholder-[#91997F] font-primary text-[14px] focus:outline-none focus:border-[#4F6815]"
                />
                <button
                  type="submit"
                  className="h-12 px-8 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[13px] font-bold uppercase tracking-[0.6px] hover:opacity-90 active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  CLAIM 10% OFF
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Metadata Grid (India Specific) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#E2DAC4] font-primary text-[13px] text-[#6B7455]">
          <div>
            <span className="font-secondary uppercase text-[#4F6815] font-bold block mb-1.5 text-[12px]">
              ORIGIN & FARM
            </span>
            <p>Uji, Kyoto, Japan</p>
            <p>Yame, Fukuoka, Japan</p>
            <p className="text-[#4F6815] font-medium mt-1">First Harvest · 35-Day Shaded</p>
          </div>

          <div>
            <span className="font-secondary uppercase text-[#4F6815] font-bold block mb-1.5 text-[12px]">
              FULFILLMENT HUBS
            </span>
            <p>Mumbai (Bandra Hub)</p>
            <p>Bengaluru (Indiranagar Hub)</p>
            <p className="mt-1">Delhi NCR (Gurugram Hub)</p>
          </div>

          <div>
            <span className="font-secondary uppercase text-[#4F6815] font-bold block mb-1.5 text-[12px]">
              SAFETY & CERTIFICATION
            </span>
            <p>FSSAI Lic. 11524999000182</p>
            <p>Radiation Tested: 0 Bq/kg</p>
            <p className="mt-1">NABL Heavy Metals Certified</p>
          </div>

          <div>
            <span className="font-secondary uppercase text-[#4F6815] font-bold block mb-1.5 text-[12px]">
              PAYMENT & DELIVERY
            </span>
            <p>Instant UPI (Extra 5% Off)</p>
            <p>Blue Dart Air Express (2-3 Days)</p>
            <p className="mt-1">Free Shipping Above ₹1,499</p>
          </div>
        </div>

        {/* Bottom Hairline & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-primary text-[12px] text-[#8E947C]">
          <p>© {new Date().getFullYear()} MATCHAA INDIA PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 font-medium">
            <span className="hover:text-[#4F6815] cursor-pointer">FSSAI License</span>
            <span className="hover:text-[#4F6815] cursor-pointer">Shipping Policy</span>
            <span className="hover:text-[#4F6815] cursor-pointer">Cafe Wholesale</span>
            <span className="hover:text-[#4F6815] cursor-pointer">Privacy & Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
