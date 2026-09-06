import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["CODE", "CREATE", "IMPROVE"];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const isFinishedRef = useRef(false);

  useEffect(() => {
    // Cycles through CODE -> CREATE -> IMPROVE precisely across the loader lifespan
    const wordInterval = setInterval(() => {
      if (!isFinishedRef.current) {
        setWordIndex(prev => {
          if (prev < words.length - 1) {
            return prev + 1;
          } else {
            clearInterval(wordInterval);
            return prev;
          }
        });
      }
    }, 650);

    let startTime: number;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / 1900; // Snappier 1.9s duration
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(progress * 100), 99));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isFinishedRef.current = true;
        clearInterval(wordInterval);
        setCount(100);
        setWordIndex(words.length - 1);
        setIsFinished(true);
        
        // Triggers unmount instantly as the fade-out starts, removing any black delay
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearInterval(wordInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinished ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] bg-[#07090e] flex flex-col justify-between p-8 font-body select-none overflow-hidden pointer-events-none [backface-visibility:hidden]"
    >
      {/* Top Brand Tag */}
      <div className="text-xs text-muted uppercase tracking-[0.3em] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] animate-pulse" />
        Anurag's Portfolio
      </div>

      {/* Clean Word Display */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary tracking-wide"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Counter & Progress Line */}
      <div className="flex flex-col items-end w-full">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums mb-4">
          {String(count).padStart(3, "0")}
        </div>

        {/* Dynamic Progress Line */}
        <div className="w-full h-[2px] bg-stroke/40 relative overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full accent-gradient origin-left shadow-[0_0_10px_rgba(137,170,204,0.5)]"
            style={{ width: `${count}%`, transition: 'width 0.1s linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}