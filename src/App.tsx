/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, CartItem } from './types.ts';
import { Navigation } from './components/Navigation.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StackedCardCarousel } from './components/StackedCardCarousel.tsx';
import { SectionIntro } from './components/SectionIntro.tsx';
import { ProductsSection, PRODUCTS } from './components/ProductsSection.tsx';
import { MatchaJourneySection } from './components/MatchaJourneySection.tsx';
import { ContentCardPair } from './components/ContentCardPair.tsx';
import { CultivarTasteProfile } from './components/CultivarTasteProfile.tsx';
import { WellnessBenefitsSection } from './components/WellnessBenefitsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ShopDrawer } from './components/ShopDrawer.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state initialized with 1 Ceremonial Reserve tin
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
    },
  ]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7EFDA] text-[#4F6815] font-primary selection:bg-[#4F6815] selection:text-[#F7EFDA]">
      {/* 3-Zone Top Navigation Contract */}
      <Navigation
        onOpenShop={() => setIsShopOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Page Flow */}
      <main>
        {/* Full-Bleed Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('stacked-carousel')}
          onShopClick={() => scrollToSection('products')}
        />

        {/* Stacked Photo Carousel with Hand-Drawn Line Art */}
        <div id="stacked-carousel">
          <StackedCardCarousel />
        </div>

        {/* Section Opener: Brand Philosophy & Shading */}
        <section className="py-24 bg-[#F7EFDA]">
          <SectionIntro
            eyebrow="FARM DIRECT · SHADE GROWN · GRANITE MILLED"
            headline="MATCHAA IS PURE CEREMONIAL GREEN TEA POWDER, OBSESSIVELY SHADED FOR 35 DAYS & STONE-MILLED ON GRANITE."
            description="Harvested exclusively during early spring first flush in Uji and Yame. Microscopic 5-10 micron silk powder that froths effortlessly with warm water into rich, naturally sweet umami crema."
          />
        </section>

        {/* Products Grid: Ceremonial Reserve, Daily Ritual, Barista Blend, Teaware */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* The Matcha Powder Journey (From Tea Garden to Bowl) */}
        <MatchaJourneySection />

        {/* The Brewing Ritual: Step-by-step preparation */}
        <ContentCardPair onShopTeaware={() => setSelectedProduct(PRODUCTS[3])} />

        {/* Cultivar Sensory Matrix: Terroir and Profiles */}
        <CultivarTasteProfile />

        {/* Science & Wellness Benefits */}
        <WellnessBenefitsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <ShopDrawer
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
