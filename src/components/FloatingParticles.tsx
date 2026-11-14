import React, { useMemo } from 'react';

export const FloatingParticles: React.FC = () => {
  // Generate random stable particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 5.8 + 3) % 96}%`,
      top: `${(i * 7.3 + 5) % 94}%`,
      size: `${Math.floor(12 + (i % 4) * 6)}px`,
      delay: `${(i * 0.7) % 5}s`,
      duration: `${6 + (i % 5) * 2}s`,
      icon: ['🌸', '✨', '💕', '🌷', '💖'][i % 5],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute opacity-60 select-none animate-float"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.icon}
        </span>
      ))}
    </div>
  );
};
