import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveReasons, ReasonItem } from '../data/reasons';

export const ReasonCards: React.FC = () => {
  const [openedIds, setOpenedIds] = useState<number[]>([1]); // First card opened by default

  const toggleReason = (id: number) => {
    setOpenedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfettiHearts = (e: React.MouseEvent) => {
    // Fire burst of romantic hearts & stars confetti
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#fecdd3'],
      shapes: ['circle'],
    });

    // Secondary burst
    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fb7185', '#ffe4e6'],
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fb7185', '#ffe4e6'],
      });
    }, 250);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-600 text-xs font-semibold mb-2">
          <Heart className="w-3.5 h-3.5 fill-rose-500" />
          <span>Lời Nhắn Gửi Chân Thành</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">
          Những Điều Anh Yêu Ở Trúc Hải
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 font-sans">
          Chạm vào từng tấm thẻ bên dưới để mở những tâm tư anh cất giữ bấy lâu
        </p>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loveReasons.map((item: ReasonItem) => {
          const isOpened = openedIds.includes(item.id);

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => toggleReason(item.id)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden ${
                isOpened
                  ? 'bg-white shadow-xl border-rose-300 ring-2 ring-rose-200/50'
                  : 'bg-white/70 hover:bg-white shadow-xs border-rose-200/70 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl select-none">{item.icon}</span>
                  <div>
                    <h4 className="font-serif font-bold text-slate-800 text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpened ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center text-rose-500"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Expandable Detail Content */}
              <AnimatePresence>
                {isOpened && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-3 border-t border-rose-100 font-handwriting text-2xl text-rose-900/90 leading-relaxed"
                  >
                    "{item.detail}"
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Final Heart Confetti CTA */}
      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfettiHearts}
          className="px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-xl shadow-rose-300/60 inline-flex items-center gap-2 transition-all"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>Gửi Ngàn Nụ Hôn & Trái Tim Tới Trúc Hải 💖</span>
          <Sparkles className="w-5 h-5" />
        </motion.button>
        <p className="text-xs text-slate-400 mt-2 font-sans">
          Bấm để thả bão tim bất ngờ dành riêng cho em!
        </p>
      </div>
    </section>
  );
};
