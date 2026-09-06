import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground';

const roles = ["Fullstack Developer", "Creative", "Engineer"];
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      )
      .fromTo(".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-10" id="home">
      <VideoBackground src={HLS_URL} overlayClasses="bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-0 pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl my-auto">
        <span className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-4">
            HELLO THERE, I AM
        </span>
        
        <h1 className="name-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-4">
          Anurag A Pandit
        </h1>
        
        {/* Dynamically fitting inline wrapper with flex layout to eliminate excess spacing */}
        <p className="blur-in text-lg md:text-xl font-body text-text-primary mb-3 inline-flex items-center justify-center gap-[0.3em] flex-wrap">
          <span>A</span>
          <span className="inline-flex relative overflow-hidden h-[1.4em] items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-display italic text-[#89AACC] whitespace-nowrap inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>in building.</span>
        </p>
        
        <p className="blur-in text-xs md:text-sm text-muted max-w-md mb-6 leading-relaxed">
          Building ideas into reality, one line at a time. I’m a CSE undergrad @ IIIT Kalyani who loves full-stack development, UI/UX, and problem solving. I build with Python, C, C++, JavaScript & MERN, design with Figma, and constantly explore new technologies.
        </p>

        <div className="blur-in inline-flex gap-4">
          <a 
            href="#work" 
            onClick={(e) => handleScrollTo(e, 'work')}
            className="group relative rounded-full text-xs sm:text-sm px-6 py-2.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all hover:scale-105 inline-flex items-center justify-center font-medium"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
            See Works
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="group relative rounded-full text-xs sm:text-sm px-6 py-2.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all hover:scale-105 inline-flex items-center justify-center font-medium"
          >
             <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
             <span className="relative z-10 bg-bg px-4 py-1.5 rounded-full inset-0 flex items-center justify-center">Reach out...</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Flex Flow Managed */}
      <div className="blur-in relative z-10 flex flex-col items-center gap-2 mt-4 shrink-0">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-stroke overflow-hidden relative">
          <div className="w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}