import React, { useState } from 'react';
import { FAQItem } from '../types.ts';

const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'Taste & Bitterness',
    question: 'Does authentic Japanese matcha taste bitter like green tea bags?',
    answer: 'No! If you have only had ordinary green tea bags in India, they usually taste bitter and dry because they use low-grade leaves and tea dust. Real first-harvest ceremonial Japanese matcha is shaded from the sun for 35 days, which removes bitterness and creates a naturally sweet, silky smooth, and savory flavor.',
  },
  {
    id: 'f2',
    category: 'How to Make at Home',
    question: 'How do I make matcha if I do not own a bamboo whisk yet?',
    answer: 'You do not need special tools to start enjoying matcha! While our traditional bamboo whisk creates the thickest velvety foam, you can easily use an electric handheld coffee frother, a small kitchen whisk, or simply shake 1.5g of matcha with water in a sports shaker bottle or mason jar with ice.',
  },
  {
    id: 'f3',
    category: 'Taste & Bitterness',
    question: 'Can I add milk, ice, or natural sweeteners like honey?',
    answer: 'Yes! Our Cafe Style Latte Matcha (100g) and Daily Morning Matcha are crafted specifically to pair with chilled oat milk, almond milk, or regular milk. Simply whisk with 40ml warm water, pour over a glass of ice, top with cold milk, and add a drizzle of honey if you prefer a sweeter latte.',
  },
  {
    id: 'f4',
    category: 'Health & vs Chai',
    question: 'How does Matchaa compare to my morning chai or black coffee?',
    answer: 'Boiled milk chai and espresso trigger sharp cortisol spikes, heart flutters, stomach acidity, and afternoon energy crashes. Matcha contains natural L-Theanine along with clean caffeine. It releases energy steadily over 4 to 6 hours, giving you calm focus with zero digestive burn or mid-day fatigue.',
  },
  {
    id: 'f5',
    category: 'Shipping & UPI',
    question: 'How long does delivery take in India, and what are the payment options?',
    answer: 'We maintain temperature-controlled fulfillment hubs in Mumbai and Delhi. Orders dispatch same-day via Blue Dart Air Express. Metros (Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, Chennai) receive delivery in 1–2 days; rest of India takes 2–3 days. Shipping is FREE on orders over ₹1,499. We accept Instant UPI (Google Pay, PhonePe, Paytm with 5% off), Cards, Net Banking, and Cash on Delivery (COD).',
  },
  {
    id: 'f6',
    category: 'Taste & Bitterness',
    question: 'How should I store my matcha in India’s hot and humid weather?',
    answer: 'Our tins arrive vacuum-sealed under food-grade nitrogen to lock out moisture. Once you open the aluminum seal, always keep the lid tightly closed and store the tin in your refrigerator. Pro tip: Let the tin sit on your counter for 2–3 minutes before opening so humidity does not condense inside.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[960px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            CLEAR ANSWERS FOR INDIAN TEA LOVERS
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-lg mx-auto leading-relaxed">
            Everything you need to know about taste, making it at home, health benefits, and express shipping across India.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-[14px] border border-[#E2DAC4] bg-[#F7EFDA] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-secondary text-[17px] md:text-[19px] font-bold text-[#4F6815] leading-snug">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-[#4F6815]/30 flex items-center justify-center font-secondary font-bold text-[16px] text-[#4F6815] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#E2DAC4]/60">
                    <p className="font-primary text-[14px] text-[#6B7455] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
