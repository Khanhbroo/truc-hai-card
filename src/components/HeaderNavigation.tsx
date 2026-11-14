import React from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';

interface HeaderNavigationProps {
  currentAct: number;
  onSelectAct: (act: number) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  currentAct,
  onSelectAct,
  isPlayingAudio,
  onToggleAudio,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 flex items-center justify-between max-w-4xl mx-auto backdrop-blur-md bg-white/40 border-b border-rose-200/50 rounded-b-2xl transition-all">
      {/* Brand title */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-300 flex items-center justify-center text-rose-500">
          <Heart className="w-4 h-4 fill-rose-500" />
        </div>
        <div className="hidden sm:block">
          <span className="font-serif text-sm font-bold text-slate-800 tracking-wide">Trúc Hải</span>
          <span className="text-[10px] text-rose-500 block font-medium -mt-1 font-handwriting text-base">Gửi người anh yêu</span>
        </div>
      </div>

      {/* Act Tabs */}
      <nav className="flex items-center bg-white/70 p-1 rounded-full border border-rose-200/70 shadow-xs text-xs">
        <button
          onClick={() => onSelectAct(1)}
          className={`px-3 py-1.5 rounded-full font-medium transition-all ${
            currentAct === 1
              ? 'bg-rose-500 text-white shadow-xs'
              : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
          }`}
        >
          1. Phong Bì
        </button>
        <button
          onClick={() => onSelectAct(2)}
          className={`px-3 py-1.5 rounded-full font-medium transition-all ${
            currentAct === 2
              ? 'bg-rose-500 text-white shadow-xs'
              : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
          }`}
        >
          2. Thư Tay
        </button>
        <button
          onClick={() => onSelectAct(3)}
          className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 ${
            currentAct === 3
              ? 'bg-rose-500 text-white shadow-xs'
              : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>3. Album Nàng Thơ</span>
        </button>
      </nav>

      {/* Music Player Button */}
      <button
        onClick={onToggleAudio}
        className="flex items-center gap-2 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-rose-200 shadow-xs text-xs text-slate-700 transition-all hover:scale-105"
        title={isPlayingAudio ? 'Tắt nhạc' : 'Bật nhạc du dương'}
      >
        <div
          className={`w-4 h-4 rounded-full bg-slate-900 border-2 border-rose-400 flex items-center justify-center ${
            isPlayingAudio ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '4s' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
        <span className="hidden md:inline font-medium text-rose-700">Seven — Jung Kook</span>
        {isPlayingAudio ? (
          <Volume2 className="w-3.5 h-3.5 text-rose-500" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>
    </header>
  );
};
