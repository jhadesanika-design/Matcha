import React from 'react';
import { Product } from '../types.ts';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#192207]/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#F7EFDA] text-[#4F6815] w-full max-w-2xl rounded-[14px] border border-[#4F6815] overflow-hidden z-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto h-full bg-[#EFE6CE]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className="font-secondary text-[11px] font-bold tracking-wider text-[#4F6815] bg-[#F7EFDA]/95 px-3 py-1 rounded-full border border-[#4F6815]/20 shadow-xs">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-7 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="font-secondary text-[11px] uppercase tracking-wider text-[#6B7455] font-bold">
                  {product.grade}
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full border border-[#4F6815]/30 flex items-center justify-center text-[#4F6815] hover:bg-[#4F6815]/10 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-secondary text-[22px] md:text-[24px] font-bold leading-tight text-[#4F6815] mb-1">
                {product.name}
              </h3>
              
              <p className="font-primary text-[12px] text-[#6B7455] mb-2 font-medium">
                {product.region} · {product.harvest}
              </p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-secondary text-[22px] font-bold text-[#4F6815] tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="font-primary text-[12px] text-[#6B7455]">
                  ({product.weight} · {product.costPerCup})
                </span>
              </div>

              <p className="font-primary text-[13px] text-[#4F6815] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Best for highlight */}
              <div className="mb-4 p-2.5 bg-[#EFE6CE] rounded-[8px] font-primary text-[12px] text-[#4F6815] border border-[#E2DAC4]">
                <span className="font-secondary font-bold block text-[10px] uppercase text-[#6B7455] mb-0.5">
                  RECOMMENDED FOR:
                </span>
                <span>{product.bestFor}</span>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-[#EFE6CE] rounded-[10px] border border-[#E2DAC4] font-primary text-[11px]">
                {product.shadeDays && (
                  <div>
                    <span className="text-[#6B7455] block">SHADE TIME:</span>
                    <span className="font-semibold text-[#4F6815]">{product.shadeDays} Days (Removes Bitterness)</span>
                  </div>
                )}
                {product.deliveryDays && (
                  <div>
                    <span className="text-[#6B7455] block">DISPATCH:</span>
                    <span className="font-semibold text-[#4F6815]">{product.deliveryDays}</span>
                  </div>
                )}
                {product.lTheanineMg && (
                  <div>
                    <span className="text-[#6B7455] block">L-THEANINE:</span>
                    <span className="font-semibold text-[#4F6815]">~{product.lTheanineMg}mg (Calm Focus)</span>
                  </div>
                )}
                <div>
                  <span className="text-[#6B7455] block">SAFETY:</span>
                  <span className="font-semibold text-[#4F6815]">FSSAI & NABL Lab Approved</span>
                </div>
              </div>

              {/* Tasting notes */}
              <div className="space-y-1.5 mb-6">
                <span className="font-secondary text-[11px] uppercase text-[#4F6815] font-bold block">
                  CUP FLAVOUR PROFILE:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-primary">
                  {product.notes.map((note) => (
                    <span key={note} className="px-2.5 py-0.5 rounded-full bg-[#EFE6CE] border border-[#E2DAC4] text-[#4F6815] font-medium">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full py-3.5 px-6 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[13px] font-bold uppercase tracking-[0.6px] hover:opacity-90 transition-all cursor-pointer shadow-sm"
            >
              ADD TO BAG — ₹{product.price.toLocaleString('en-IN')}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
