import React, { useState } from 'react';
import { Product } from '../types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'ceremonial-matcha-gold',
    name: 'Pure Ceremonial Matcha (Gold Tin)',
    grade: 'Ceremonial Grade',
    subTitle: 'Drink pure with warm water · 100% Zero Bitterness',
    cultivar: '100% Single Origin First Harvest',
    region: 'Kyoto (Uji), Japan',
    harvest: 'Spring First Flush 2026',
    price: 2199,
    costPerCup: '₹109 / cup',
    weight: '30g Sealed Tin',
    servings: '20 Cups',
    bestFor: 'Drinking straight with water for calm focus',
    description: 'Our highest quality Japanese matcha from Kyoto. Bright electric green with a naturally sweet taste and creamy finish. Whisk with warm water for 4–6 hours of calm, jitter-free energy without the coffee crash or chai acidity.',
    notes: ['Naturally Sweet', 'Silky Smooth', 'Zero Bitterness'],
    image: '/src/assets/images/matcha_tin_ceremonial_1790248228893.jpg',
    badge: 'Top Rated · Zero Bitterness',
    category: 'ceremonial',
    inStock: true,
    lTheanineMg: 38,
    shadeDays: 35,
    grindSpeed: '30g / hour',
    deliveryDays: '2-3 Days Pan-India',
  },
  {
    id: 'daily-morning-matcha',
    name: 'Daily Morning Matcha (Green Tin)',
    grade: 'Daily Wellness',
    subTitle: 'Your daily healthy swap for morning chai & coffee',
    cultivar: 'First Harvest Blend',
    region: 'Kyoto, Japan',
    harvest: 'Spring Harvest 2026',
    price: 1699,
    costPerCup: '₹68 / cup',
    weight: '40g Sealed Tin',
    servings: '25 Cups',
    bestFor: 'Daily energy, metabolism & glowing skin',
    description: 'Designed as your daily morning wellness habit. Packed with 137x more antioxidants than ordinary green tea bags. Smooth, refreshing, and delicious hot or poured over iced water with a squeeze of lemon.',
    notes: ['Fresh & Light', 'Gentle Sweetness', 'Clean Morning Energy'],
    image: '/src/assets/images/matcha_powder_macro_1790249416783.jpg',
    badge: '#1 Bestseller in India',
    category: 'daily',
    inStock: true,
    lTheanineMg: 32,
    shadeDays: 30,
    grindSpeed: '35g / hour',
    deliveryDays: '2-3 Days Pan-India',
  },
  {
    id: 'cafe-latte-matcha-100g',
    name: 'Cafe Style Latte Matcha (100g Pack)',
    grade: 'Cafe Latte Blend',
    subTitle: 'Crafted for Oat Milk, Almond Milk & Iced Lattes',
    cultivar: 'Bold First Harvest',
    region: 'Fukuoka (Yame), Japan',
    harvest: 'Spring Harvest 2026',
    price: 2499,
    costPerCup: '₹50 / cup (50 lattes)',
    weight: '100g Fresh Pack',
    servings: '50 Cups',
    bestFor: 'Hot & iced matcha lattes at home for ₹50/cup',
    description: 'Specially crafted to pair with milk (oat, almond, cow milk) without losing its rich green colour or distinct flavour. Make cafe-quality iced or hot matcha lattes at home for just ₹50 a cup instead of ₹350 at cafes.',
    notes: ['Rich & Creamy', 'Vibrant Green in Milk', 'Roasted Nutty Finish'],
    image: '/src/assets/images/matcha_tins_collection_1790249430583.jpg',
    badge: 'Best for Milk & Lattes',
    category: 'barista',
    inStock: true,
    lTheanineMg: 28,
    shadeDays: 25,
    grindSpeed: '40g / hour',
    deliveryDays: '2-3 Days Pan-India',
  },
  {
    id: 'starter-whisk-kit',
    name: 'Complete Matcha Starter Kit (3-in-1)',
    grade: 'Starter Kit',
    subTitle: 'Bamboo Whisk + Ceramic Bowl + Bamboo Scoop',
    cultivar: 'Handcrafted Natural Bamboo & Stoneware',
    region: 'Nara, Japan',
    harvest: 'Handmade Artisan',
    price: 3899,
    costPerCup: 'Heirloom Quality',
    weight: '3-Piece Set',
    servings: 'Lifetime Use',
    bestFor: 'Making frothy, lump-free cafe matcha at home',
    description: 'Everything you need to make cafe-style frothy matcha at home in under 30 seconds. Includes a handcrafted 100-prong bamboo whisk (Chasen), ceramic mixing bowl, and traditional bamboo measuring scoop.',
    notes: ['Handcrafted Bamboo', 'Creates Rich Foam', 'Easy to Clean'],
    image: '/src/assets/images/matcha_chawan_ceremony_1790248241090.jpg',
    badge: 'Complete Starter Kit',
    category: 'teaware',
    inStock: true,
    deliveryDays: '2-4 Days Pan-India',
  },
];

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section id="products" className="w-full bg-[#F7EFDA] text-[#4F6815] py-20 px-6 md:px-12 border-b border-[#E2DAC4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-secondary text-[14px] md:text-[16px] uppercase tracking-[2px] text-[#4F6815] font-semibold block mb-3">
            DIRECT FROM JAPAN · PAN-INDIA SHIPPING
          </span>
          <h2 className="font-secondary text-[28px] md:text-[36px] uppercase tracking-[2px] font-bold text-[#4F6815] leading-[1.15]">
            CHOOSE YOUR MATCHA
          </h2>
          <p className="mt-3 font-primary text-[14px] text-[#6B7455] max-w-xl mx-auto leading-relaxed">
            100% pure shade-grown green tea powder from Kyoto. Air-freighted fresh under cold chain. Free express delivery on orders above ₹1,499.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'ceremonial', label: 'Pure Ceremonial' },
            { id: 'daily', label: 'Daily Energy' },
            { id: 'barista', label: 'Cafe Latte (100g)' },
            { id: 'teaware', label: 'Starter Kit' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`py-2 px-5 rounded-full font-secondary text-[13px] uppercase tracking-[0.5px] font-medium transition-all cursor-pointer focus:outline-none ${
                selectedFilter === cat.id
                  ? 'border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA]'
                  : 'border border-[#4F6815]/30 text-[#4F6815] hover:border-[#4F6815]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F7EFDA] rounded-[14px] border border-[#E2DAC4] flex flex-col justify-between overflow-hidden group hover:border-[#4F6815] transition-colors duration-300"
            >
              {/* Product Image */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square w-full overflow-hidden bg-[#EFE6CE] cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="font-secondary text-[11px] font-semibold tracking-wider text-[#4F6815] bg-[#F7EFDA]/95 px-3 py-1 rounded-full border border-[#4F6815]/20 shadow-xs">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-primary text-[12px] font-medium text-[#6B7455]">
                      {product.weight} · {product.servings}
                    </span>
                    <span className="font-secondary text-[18px] font-bold text-[#4F6815] tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="text-[11px] font-primary text-[#4F6815] font-semibold mb-2 bg-[#EFE6CE] px-2 py-0.5 rounded-sm inline-block">
                    {product.costPerCup}
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-secondary text-[17px] leading-snug font-bold text-[#4F6815] mb-1.5 cursor-pointer hover:underline"
                  >
                    {product.name}
                  </h3>

                  <p className="font-primary text-[12px] text-[#4F6815] font-medium mb-2 line-clamp-1">
                    {product.subTitle}
                  </p>

                  <p className="font-primary text-[12px] text-[#6B7455] line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Best for & Tasting notes */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] font-primary text-[#4F6815]">
                    {product.notes.map((note, i) => (
                      <React.Fragment key={note}>
                        <span className="bg-[#EFE6CE] px-2 py-0.5 rounded-full">{note}</span>
                        {i < product.notes.length - 1 && <span className="opacity-40">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Outlined Pill CTA */}
                <button
                  onClick={() => handleAdd(product)}
                  className="w-full py-3 px-4 rounded-full border-[1.5px] border-[#4F6815] bg-transparent text-[#4F6815] font-secondary text-[13px] font-semibold uppercase tracking-[0.6px] hover:bg-[#4F6815] hover:text-[#F7EFDA] active:scale-[0.98] transition-all cursor-pointer focus:outline-none"
                >
                  {addedId === product.id ? 'ADDED TO BAG ✓' : `ADD TO BAG — ₹${product.price.toLocaleString('en-IN')}`}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
