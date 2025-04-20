
import React, { useState, useEffect } from 'react';
import ScratchCard from './ScratchCard';

const generateCouponCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'NISWA';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const CouponPage = () => {
  const [couponCode] = useState(generateCouponCode());
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-[#EFE4E4] flex flex-col items-center px-4 py-8">
      <img
        src="/placeholder.svg"
        alt="Niswa Couture Logo"
        className="w-40 mb-8"
        aria-label="Niswa Couture company logo"
      />
      
      <h1 className="text-[#9C8B58] text-4xl font-bold mb-4 animate-scale-in text-center">
        Congratulations!
      </h1>
      
      <p className="text-[#2C3E57] text-lg mb-8 text-center">
        You have won a coupon! Scratch below to reveal your discount.
      </p>

      <ScratchCard couponCode={couponCode} onReveal={() => setIsRevealed(true)} />

      <div className={`mt-8 text-center transition-opacity duration-500 ${
        isRevealed ? 'opacity-100' : 'opacity-0'
      }`}>
        <p className="text-[#2C3E57] mb-4">
          Thank you for choosing Niswa Couture. Redeem this code at your next purchase for a 10% discount.
        </p>
        
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9C8B58] hover:underline"
          aria-label="Follow us on Instagram"
        >
          Follow us on Instagram
        </a>
      </div>

      <img
        src="/placeholder.svg"
        alt="Niswa Couture Logo"
        className="w-32 mt-12"
        aria-label="Niswa Couture company logo"
      />
    </div>
  );
};

export default CouponPage;
