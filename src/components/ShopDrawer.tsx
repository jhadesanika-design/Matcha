import React from 'react';
import { Product } from '../types.ts';
import { PRODUCTS } from './ProductsSection.tsx';

interface ShopDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ShopDrawer: React.FC<ShopDrawerProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#192207]/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-[#F7EFDA] text-[#4F6815] shadow-2xl flex flex-col justify-between border-l border-[#4F6815]">
          
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-[#E2DAC4] flex items-center justify-between">
            <div>
              <span className="font-secondary text-[11px] uppercase font-bold tracking-wider text-[#6B7455] block">
                FARM DIRECT KYOTO · AIR EXPRESS TO INDIA
              </span>
              <h2 className="font-secondary text-[24px] md:text-[26px] uppercase tracking-[1px] font-bold text-[#4F6815]">
                ALL MATCHA TINS
              </h2>
            </div>
            
            <button
              onClick={onClose}
              aria-label="Close catalog"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#4F6815] flex items-center justify-center text-[#4F6815] hover:bg-[#4F6815]/10 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Product Items */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="pb-6 border-b border-[#E2DAC4] flex gap-4 items-center justify-between group"
              >
                <div 
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="w-20 h-20 rounded-[10px] overflow-hidden bg-[#EFE6CE] shrink-0 border border-[#E2DAC4] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-2">
                  <span className="font-secondary text-[10px] uppercase font-bold tracking-wider text-[#6B7455] block">
                    {product.weight} · {product.costPerCup}
                  </span>
                  <h4 
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="font-secondary text-[16px] text-[#4F6815] font-bold truncate cursor-pointer hover:underline"
                  >
                    {product.name}
                  </h4>
                  <p className="font-primary text-[12px] text-[#6B7455] truncate">
                    {product.subTitle}
                  </p>
                  <span className="font-secondary text-[15px] font-bold text-[#4F6815] tabular-nums block mt-1">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="py-2.5 px-4 rounded-full border-[1.5px] border-[#4F6815] text-[#4F6815] font-secondary text-[12px] uppercase font-bold tracking-[0.5px] hover:bg-[#4F6815] hover:text-[#F7EFDA] transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  + ADD
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Bar Info */}
          <div className="p-6 border-t border-[#E2DAC4] bg-[#EFE6CE] space-y-1 font-primary text-[12px] text-[#6B7455]">
            <p className="text-[#4F6815] font-semibold">
              ✓ FREE PAN-INDIA DELIVERY ON ORDERS OVER ₹1,499
            </p>
            <p>
              Pay via UPI for an extra 5% instant discount at checkout.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
