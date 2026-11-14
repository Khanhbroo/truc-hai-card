import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Stamp } from 'lucide-react';

interface LoveLetterProps {
  onGoToAlbum: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ onGoToAlbum }) => {
  const fullText = `Chào Trúc Hải bé nhỏ của anh,

Hôm nay không phải là sinh nhật, cũng chẳng phải một ngày lễ nào to tát cả. Hôm nay chỉ đơn giản là một ngày bình thường, nhưng anh lại đặc biệt muốn gửi đến em một nụ cười thật tươi.

Cảm ơn Trúc Hải vì đã luôn xuất hiện bên anh thật dịu dàng. Cảm ơn nụ cười tỏa nắng, ánh mắt trong veo và cả những lúc em làm nũng, phụng phịu hờn dỗi siêu cấp đáng yêu. Mỗi phút giây được nhìn thấy em vui vẻ đều là điều bình yên và ngọt ngào nhất trong ngày của anh.

Anh đã gom góp những khoảnh khắc xinh đẹp, rạng rỡ nhất của em thành một cuốn album nhỏ phía sau. Mong là khi ngắm nhìn, cô gái của anh sẽ luôn mỉm cười và biết rằng em luôn được yêu thương rất nhiều.`;

  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [fullText]);

  const handleSkipTyping = () => {
    setDisplayedText(fullText);
    setIsTypingDone(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl parchment-paper rounded-3xl p-6 sm:p-10 shadow-2xl border border-rose-200/90 relative overflow-hidden"
      >
        {/* Top Decorative Border & Stamp */}
        <div className="flex justify-between items-start border-b border-rose-200/80 pb-4 mb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase block font-sans">
              Gửi riêng Trúc Hải
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 tracking-tight mt-0.5">
              Những Lời Yêu Thương Gửi Em
            </h2>
          </div>

          {/* Postal stamp mockup */}
          <div className="w-14 h-16 rounded-xl bg-rose-50/90 border-2 border-dashed border-rose-300 flex flex-col items-center justify-center rotate-3 shadow-xs">
            <Stamp className="w-5 h-5 text-rose-500 mb-0.5" />
            <span className="text-[9px] font-bold text-rose-600 font-mono">28.06</span>
          </div>
        </div>

        {/* Letter Body (Typewriter Effect) */}
        <div className="min-h-[240px] text-slate-800 font-handwriting text-2xl sm:text-3xl leading-relaxed whitespace-pre-line tracking-wide">
          {displayedText}
          {!isTypingDone && (
            <span className="inline-block w-2 h-6 bg-rose-500 animate-pulse ml-1"></span>
          )}
        </div>

        {/* Skip button if typing */}
        {!isTypingDone && (
          <div className="text-right mt-2">
            <button
              onClick={handleSkipTyping}
              className="text-xs text-rose-500 hover:text-rose-700 underline font-sans"
            >
              Hiện toàn bộ thư ✨
            </button>
          </div>
        )}

        {/* Signature & Date */}
        <div className="mt-8 pt-4 border-t border-rose-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse-subtle" />
            <span className="text-xs sm:text-sm font-handwriting text-xl text-slate-500">Mãi yêu em</span>
          </div>
          <div className="text-right">
            <span className="font-calligraphy text-2xl sm:text-3xl text-rose-600 font-bold block">
              Anh của em ❤️
            </span>
          </div>
        </div>

        {/* Action Button to Album */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={onGoToAlbum}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-rose-300/60 flex items-center justify-center gap-2 mx-auto transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Mở Album Nàng Thơ Trúc Hải (11 Khoảnh Khắc)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
