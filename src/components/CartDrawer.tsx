import React, { useState } from 'react';
import { CartItem } from '../types.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 1499;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 99;
  const upiDiscount = paymentMethod === 'upi' ? Math.round(subtotal * 0.05) : 0;
  const totalAmount = subtotal + shippingFee - upiDiscount;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  const handleResetAndClose = () => {
    setOrderComplete(false);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#192207]/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7EFDA] text-[#4F6815] shadow-2xl flex flex-col justify-between border-l border-[#4F6815]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E2DAC4] flex items-center justify-between">
            <div>
              <span className="font-secondary text-[11px] uppercase font-bold tracking-wider text-[#6B7455] block">
                FREE SHIPPING OVER ₹1,499
              </span>
              <h2 className="font-secondary text-[22px] md:text-[24px] uppercase tracking-[1px] font-bold text-[#4F6815]">
                YOUR MATCHA BAG
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#4F6815] flex items-center justify-center text-[#4F6815] hover:bg-[#4F6815]/10 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full border-[2px] border-[#4F6815] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-secondary text-[22px] font-bold uppercase tracking-[1px]">
                  ORDER CONFIRMED & DISPATCHED
                </h3>
                <p className="font-primary text-[14px] text-[#6B7455] leading-relaxed">
                  Thank you, {shippingAddress.name || 'friend'}! Your freshly sealed matcha tins are being packed at our fulfillment hub. You will receive Blue Dart air tracking updates on +91 {shippingAddress.phone || '9876543210'}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetAndClose}
                    className="py-3 px-6 rounded-full border-[1.5px] border-[#4F6815] text-[#4F6815] font-secondary text-[13px] font-bold uppercase tracking-[0.6px] hover:bg-[#4F6815]/10 cursor-pointer"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="border-b border-[#E2DAC4] pb-3 mb-2">
                  <h4 className="font-secondary text-[17px] font-bold uppercase tracking-[0.5px]">
                    DELIVERY ADDRESS (INDIA)
                  </h4>
                  <p className="font-primary text-[12px] text-[#6B7455]">
                    Fast delivery via Blue Dart Air Express (2-3 Days)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Shah"
                      value={shippingAddress.name}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] font-primary text-[13px] focus:outline-none focus:border-[#4F6815]"
                    />
                  </div>

                  <div>
                    <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block mb-1">
                      Mobile (+91)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9820012345"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] font-primary text-[13px] focus:outline-none focus:border-[#4F6815]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block mb-1">
                    Flat / House, Building, Street
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="B-402, Sea View Apts, Bandra West"
                    value={shippingAddress.address}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                    className="w-full h-11 px-4 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] font-primary text-[13px] focus:outline-none focus:border-[#4F6815]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block mb-1">
                      City / District
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mumbai"
                      value={shippingAddress.city}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                      className="w-full h-11 px-4 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] font-primary text-[13px] focus:outline-none focus:border-[#4F6815]"
                    />
                  </div>

                  <div>
                    <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block mb-1">
                      6-Digit PIN Code
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="400050"
                      value={shippingAddress.pincode}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                      className="w-full h-11 px-4 rounded-full border border-[#E2DAC4] bg-[#F7EFDA] text-[#192207] font-primary text-[13px] focus:outline-none focus:border-[#4F6815]"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="space-y-2 pt-2">
                  <label className="font-primary text-[11px] uppercase font-semibold text-[#6B7455] block">
                    Choose Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'upi', label: 'UPI (5% OFF)' },
                      { id: 'card', label: 'Card / Net' },
                      { id: 'cod', label: 'Cash on Delivery' },
                    ].map((m) => (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setPaymentMethod(m.id as any)}
                        className={`py-2 px-2 rounded-full border font-secondary text-[11px] font-bold transition-all cursor-pointer ${
                          paymentMethod === m.id
                            ? 'border-[#4F6815] bg-[#4F6815] text-[#F7EFDA]'
                            : 'border-[#E2DAC4] bg-[#F7EFDA] text-[#4F6815]'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-3.5 bg-[#EFE6CE] rounded-[10px] space-y-1.5 font-primary text-[12px] text-[#6B7455]">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium text-[#4F6815]">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Air Shipping:</span>
                    <span className="font-medium text-[#4F6815]">{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  {upiDiscount > 0 && (
                    <div className="flex justify-between text-[#4F6815] font-semibold">
                      <span>UPI Instant 5% Discount:</span>
                      <span>-₹{upiDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1.5 border-t border-[#E2DAC4] font-bold text-[#4F6815] text-[14px]">
                    <span>Total Amount:</span>
                    <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="py-3 px-4 rounded-full border border-[#4F6815]/40 text-[#4F6815] font-secondary text-[12px] uppercase font-bold cursor-pointer"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[13px] font-bold uppercase tracking-[0.6px] hover:opacity-90 cursor-pointer shadow-sm"
                  >
                    PAY ₹{totalAmount.toLocaleString('en-IN')}
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-secondary text-[18px] font-bold text-[#4F6815]">
                  Your bag is empty.
                </p>
                <p className="font-primary text-[13px] text-[#6B7455]">
                  Choose from our pure Kyoto harvest tins and starter kits.
                </p>
              </div>
            ) : (
              <>
                {/* Free shipping progress */}
                <div className="p-3.5 bg-[#EFE6CE] rounded-[12px] border border-[#E2DAC4]">
                  <p className="font-primary text-[12px] font-medium text-[#4F6815] mb-1.5">
                    {amountToFreeShipping > 0
                      ? `Add ₹${amountToFreeShipping.toLocaleString('en-IN')} more to unlock FREE Pan-India delivery.`
                      : '✓ Congratulations! You have unlocked FREE Pan-India delivery.'}
                  </p>
                  <div className="w-full h-1.5 bg-[#E2DAC4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4F6815] rounded-full"
                      style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 pb-4 border-b border-[#E2DAC4]"
                    >
                      <div className="w-20 h-20 rounded-[10px] overflow-hidden bg-[#EFE6CE] shrink-0 border border-[#E2DAC4]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-secondary text-[15px] font-bold leading-tight text-[#4F6815]">
                              {item.product.name}
                            </h4>
                            <span className="font-secondary text-[14px] font-bold text-[#4F6815] tabular-nums">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                          <span className="font-primary text-[12px] text-[#6B7455]">
                            {item.product.weight} ({item.product.costPerCup})
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#4F6815]/40 rounded-full">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center font-secondary font-bold text-[12px] hover:bg-[#4F6815]/10 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 font-primary text-[12px] font-bold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center font-secondary font-bold text-[12px] hover:bg-[#4F6815]/10 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="font-primary text-[12px] text-[#6B7455] hover:text-[#4F6815] underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal and Checkout CTA */}
          {!orderComplete && items.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-[#E2DAC4] bg-[#EFE6CE] space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-secondary text-[12px] font-bold uppercase text-[#6B7455] block">
                    TOTAL SUB-AMOUNT
                  </span>
                  <span className="font-primary text-[11px] text-[#4F6815]">
                    + Extra 5% OFF if you pay via UPI
                  </span>
                </div>
                <span className="font-secondary text-[20px] font-bold text-[#4F6815] tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 px-6 rounded-full border-[1.5px] border-[#4F6815] bg-[#4F6815] text-[#F7EFDA] font-secondary text-[14px] font-bold uppercase tracking-[0.6px] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
