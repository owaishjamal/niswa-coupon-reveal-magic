
import React, { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  couponCode: string;
  onReveal: () => void;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ couponCode, onReveal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratched, setScratched] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#9C8B58');
    gradient.addColorStop(1, '#8A7A47');

    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add pattern effect
    ctx.strokeStyle = '#B09C69';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width + canvas.height; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(i, 0);
      ctx.stroke();
    }
  }, []);

  const calculateScratched = (ctx: CanvasRenderingContext2D) => {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) transparent++;
    }
    return (transparent / (pixels.length / 4)) * 100;
  };

  const handleScratch = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    const scratched = calculateScratched(ctx);
    setScratched(scratched);

    if (scratched > 45 && !isRevealed) {
      setIsRevealed(true);
      onReveal();
    }
  };

  return (
    <div className="relative w-[320px] h-[160px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center bg-[#2C3E57] rounded-lg">
        <p className="text-[#EFE4E4] text-xl font-semibold text-center px-4">
          Use code {couponCode} for 10% OFF your next purchase!
        </p>
      </div>
      <canvas
        ref={canvasRef}
        width={320}
        height={160}
        className={`absolute inset-0 cursor-grab active:cursor-grabbing rounded-lg transition-opacity duration-500 ${
          isRevealed ? 'opacity-0' : 'opacity-100'
        }`}
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => setIsDrawing(false)}
        onMouseMove={(e) => isDrawing && handleScratch(e)}
        onTouchStart={() => setIsDrawing(true)}
        onTouchEnd={() => setIsDrawing(false)}
        onTouchMove={handleScratch}
        aria-label="Scratch card overlay. Scratch to reveal your discount code."
      />
    </div>
  );
};

export default ScratchCard;
