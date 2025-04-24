
import React from 'react';
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EFE4E4] py-8 mt-12 border-t border-[#9C8B58]">
      <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 items-center">
          <a
            href="https://instagram.com/niswacouture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C3E57] hover:text-[#9C8B58] transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:contact@niswacouture.com"
            className="text-[#2C3E57] hover:text-[#9C8B58] transition-colors"
            aria-label="Email us"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-[#2C3E57] text-sm text-center">
          © 2025 Niswa Couture. Elegance in every thread.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
