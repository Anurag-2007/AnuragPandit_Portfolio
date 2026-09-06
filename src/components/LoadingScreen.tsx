import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["CODE", "CREATE", "IMPROVE"];

// Same animation, but without horizontal movement
const subtleGlitchVariants = {
  initial: {
    opacity: 0,
    filter: "blur(4px)"
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.25 }
  }
};

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const isFinishedRef = useRef(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      if (!isFinishedRef.current) {
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, 900);

    // Micro-glitch pulse
    const glitchInterval = setInterval(() => {
      if (!isFinishedRef.current && Math.random() > 0.6) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 60);
      }
    }, 700);

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
        clearInterval(glitchInterval);
        setCount(100);
        setIsFinished(true);

        setTimeout(() => {
          onComplete();
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearInterval(wordInterval);
      clearInterval(glitchInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 font-body select-none overflow-hidden pointer-events-none"
    >
      {/* Top Brand Tag */}
      <motion.div
        animate={isFinished ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-xs text-muted uppercase tracking-[0.3em] flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] animate-pulse" />
        Anurag's Portfolio
      </motion.div>

      {/* Word Display */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            variants={subtleGlitchVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary tracking-wide"
          >
            {words[wordIndex]}

            {/* Subtle Cyan Ghost Accent — no movement */}
            <span
              className="absolute inset-0 text-cyan-400/30 mix-blend-screen pointer-events-none"
              aria-hidden="true"
            >
              {words[wordIndex]}
            </span>

            {/* Subtle Blue Ghost Accent — no movement */}
            <span
              className="absolute inset-0 text-[#89AACC]/30 mix-blend-screen pointer-events-none"
              aria-hidden="true"
            >
              {words[wordIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Counter & Progress Line */}
      <motion.div
        animate={isFinished ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="flex flex-col items-end w-full"
      >
        <div
          className={`text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums mb-4 relative transition-transform duration-75 ${
            isGlitching ? 'translate-x-1' : ''
          }`}
        >
          {String(count).padStart(3, "0")}
        </div>

        {/* Dynamic Progress Line */}
        <div className="w-full h-[2px] bg-stroke/40 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full accent-gradient origin-left shadow-[0_0_10px_rgba(137,170,204,0.5)]"
            style={{
              width: `${count}%`,
              transition: 'width 0.1s linear'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}