import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaxSealEnvelopeProps {
  onOpen: () => void;
}

export const WaxSealEnvelope: React.FC<WaxSealEnvelopeProps> = ({ onOpen }) => {
  const handleEnvelopeClick = (e: React.MouseEvent) => {
    // Burst soft pink heart confetti
    confetti({
      particleCount: 35,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3'],
      shapes: ['circle'],
    });

    onOpen();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center select-none">
      {/* Gentle Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-semibold mb-4 tracking-wide shadow-xs"
      >
        <Sparkles className="w-4 h-4 text-rose-500 animate-sparkle" />
        <span>Món quà bất ngờ gửi tặng Trúc Hải</span>
        <Sparkles className="w-4 h-4 text-rose-500 animate-sparkle" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-5xl font-serif font-bold text-slate-800 mb-3 tracking-tight"
      >
        Bức Thư Tình Gửi Em
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-slate-600 text-sm sm:text-base max-w-md mb-10 font-handwriting text-2xl leading-relaxed"
      >
        "Dành riêng cho cô gái dịu dàng và đáng yêu nhất của anh..."
      </motion.p>

      {/* 3D Wax Seal Envelope Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleEnvelopeClick}
        className="relative cursor-pointer group w-80 sm:w-96 h-56 bg-gradient-to-b from-rose-100 via-rose-200 to-rose-300/80 rounded-3xl shadow-2xl border-2 border-white/60 flex items-center justify-center transition-all duration-300 hover:shadow-rose-300/50"
      >
        {/* Envelope Top Flap */}
        <div className="absolute inset-x-0 top-0 h-32 bg-rose-200/90 [clip-path:polygon(0_0,100%_0,50%_100%)] border-t border-white/80 shadow-inner rounded-t-3xl"></div>

        {/* Envelope Inner Paper Peak */}
        <div className="absolute -top-3 w-64 h-12 bg-white/95 rounded-t-xl border border-rose-200 shadow-xs flex items-center justify-center">
          <span className="font-calligraphy text-rose-500 text-lg">Trúc Hải thân yêu</span>
        </div>

        {/* Wax Seal Medallion */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-pink-500 wax-seal-glow border-2 border-rose-300/80 flex flex-col items-center justify-center text-white font-serif group-hover:scale-110 transition-transform duration-300">
          <Heart className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-sm font-bold tracking-widest leading-none">T & K</span>
          <span className="text-[8px] font-mono tracking-widest opacity-80 uppercase mt-1">FOREVER</span>
        </div>

        {/* Floating Hint Tag */}
        <div className="absolute -bottom-4 bg-white/95 backdrop-blur-md text-rose-600 text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg border border-rose-200 flex items-center gap-2 group-hover:bg-rose-50 transition-colors">
          <Send className="w-3.5 h-3.5" />
          <span>Chạm vào con dấu để mở thư</span>
        </div>
      </motion.div>
    </div>
  );
};
