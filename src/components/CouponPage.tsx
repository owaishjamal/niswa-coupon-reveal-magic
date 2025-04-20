import React, { useState } from 'react';
import ScratchCard from './ScratchCard';
import Footer from './Footer';

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
        src="/lovable-uploads/9bd0c7ce-be68-44e4-a743-4af22ab47d28.png"
        alt="Niswa Couture Logo"
        className="w-48 mb-8"
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
        <p className="text-[#2C3E57] mb-6 max-w-md">
          Thank you for choosing Niswa Couture. Your support means the world to us. To redeem your 10% discount, simply share a photo of this coupon card during checkout along with your unique code.
        </p>
        
        <img
          src="/lovable-uploads/9bd0c7ce-be68-44e4-a743-4af22ab47d28.png"
          alt="Niswa Couture Logo"
          className="w-32 mx-auto mb-8"
          aria-label="Niswa Couture company logo"
        />
      </div>

      <Footer />
    </div>
  );
};

export default CouponPage;
