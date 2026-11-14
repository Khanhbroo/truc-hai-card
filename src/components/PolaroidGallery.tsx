import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { photosList, PhotoItem } from '../data/photos';

export const PolaroidGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-600 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bộ Sưu Tập Nàng Thơ Độc Bản</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 tracking-tight">
          11 Khoảnh Khắc Xinh Đẹp Của Trúc Hải
        </h2>
        <p className="text-slate-500 text-sm mt-2 font-handwriting text-2xl">
          "Dù ở góc máy nào, em vẫn luôn là nàng thơ rực rỡ nhất trong mắt anh..."
        </p>
      </div>

      {/* Polaroid Grid (Responsive 1 to 4 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {photosList.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            onClick={() => setSelectedPhoto(photo)}
            className={`cursor-pointer bg-white p-3 pb-5 rounded-2xl shadow-lg border border-rose-100/80 transition-all duration-300 relative group ${photo.rotation}`}
          >
            {/* Washi Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-rose-200/80 backdrop-blur-xs rounded-xs rotate-[-2deg] border border-white/60 shadow-xs z-10 opacity-80"></div>

            {/* Photo Container */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-rose-50 relative">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                <span className="text-white text-xs bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 font-sans">
                  <ZoomIn className="w-3.5 h-3.5" /> Xem ảnh lớn
                </span>
              </div>
            </div>

            {/* Caption & Tag */}
            <div className="mt-3 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full font-sans">
                {photo.tag}
              </span>
              <p className="font-handwriting text-2xl text-slate-700 mt-1 leading-snug line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 sm:p-6 rounded-3xl max-w-lg w-full shadow-2xl relative cursor-default border border-rose-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="w-full max-h-[65vh] rounded-2xl overflow-hidden bg-rose-50 mb-4">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-contain max-h-[65vh] mx-auto"
                />
              </div>

              {/* Modal Caption */}
              <div className="text-center">
                <span className="text-xs font-semibold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full font-sans">
                  {selectedPhoto.tag}
                </span>
                <h3 className="font-handwriting text-3xl sm:text-4xl text-slate-800 mt-2">
                  {selectedPhoto.caption}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-xs text-rose-500 font-medium mt-1 font-sans">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  <span>Trúc Hải — Nàng thơ của anh</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
