import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderNavigation } from './components/HeaderNavigation';
import { WaxSealEnvelope } from './components/WaxSealEnvelope';
import { LoveLetter } from './components/LoveLetter';
import { PolaroidGallery } from './components/PolaroidGallery';
import { ReasonCards } from './components/ReasonCards';
import { FloatingParticles } from './components/FloatingParticles';
import { audioEngine } from './utils/audioEngine';
import { Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [currentAct, setCurrentAct] = useState<number>(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Handle audio toggle
  const handleToggleAudio = () => {
    const isPlaying = audioEngine.toggle();
    setIsPlayingAudio(isPlaying);
  };

  // When opening the envelope in Act 1, auto start the sweet romantic melody!
  const handleOpenEnvelope = () => {
    if (!isPlayingAudio) {
      audioEngine.play();
      setIsPlayingAudio(true);
    }
    setCurrentAct(2);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-rose-200 selection:text-rose-900">
      {/* Background Ambient Particles */}
      <FloatingParticles />

      {/* Top Navigation */}
      <HeaderNavigation
        currentAct={currentAct}
        onSelectAct={(act) => setCurrentAct(act)}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Areas based on Act */}
      <main className="flex-1 z-10">
        <AnimatePresence mode="wait">
          {currentAct === 1 && (
            <motion.div
              key="act-1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45 }}
            >
              <WaxSealEnvelope onOpen={handleOpenEnvelope} />
            </motion.div>
          )}

          {currentAct === 2 && (
            <motion.div
              key="act-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <LoveLetter onGoToAlbum={() => setCurrentAct(3)} />
            </motion.div>
          )}

          {currentAct === 3 && (
            <motion.div
              key="act-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
              className="space-y-4"
            >
              <PolaroidGallery />
              <ReasonCards />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-400 z-10 border-t border-rose-200/40 mt-12 bg-white/40 backdrop-blur-xs">
        <div className="flex items-center justify-center gap-1 text-slate-600 mb-1 font-serif">
          <span>Tạo nên với trọn vẹn yêu thương dành cho</span>
          <span className="font-bold text-rose-600">Trúc Hải</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
        </div>
        <p className="text-[11px] text-slate-400 font-sans">
          Món quà bất ngờ hâm nóng tình cảm • © 2026 Khanhbroo
        </p>
      </footer>
    </div>
  );
};

export default App;
