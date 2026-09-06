import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["CODE", "CREATE", "IMPROVE"];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const isFinishedRef = useRef(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      if (!isFinishedRef.current) {
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, 900);

    let startTime: number;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / 2700;
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(progress * 100), 99));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isFinishedRef.current = true;
        clearInterval(wordInterval);
        setCount(100);
        setIsFinished(true);
        
        setTimeout(() => {
          onComplete();
        }, 100);
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
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 font-body select-none"
    >
      <motion.div 
        animate={isFinished ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        animate={isFinished ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-end w-full"
      >
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums mb-4">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full h-[3px] bg-stroke/50 relative overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full accent-gradient origin-left shadow-[0_0_8px_rgba(137,170,204,0.35)]"
            style={{ width: `${count}%`, transition: 'width 0.1s linear' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}