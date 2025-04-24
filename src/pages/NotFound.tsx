
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EFE4E4]">
      <div className="text-center">
        <h1 className="text-[#9C8B58] text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-[#2C3E57]">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-[#9C8B58] underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
