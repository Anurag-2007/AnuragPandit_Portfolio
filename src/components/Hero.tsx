import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import VideoBackground from './VideoBackground';

const roles = ["Fullstack Developer", "Creative", "Engineer"];
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
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

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" id="home">
      <VideoBackground src={HLS_URL} overlayClasses="bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16 max-w-3xl">
        <span className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6">
            HELLO THERE, I AM
        </span>
        
        <h1 className="name-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Anurag A Pandit
        </h1>
        
        <p className="blur-in text-lg md:text-xl font-body text-text-primary mb-4 flex items-center gap-2">
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> in building.
        </p>
        
        <p className="blur-in text-xs md:text-sm text-muted max-w-md mb-8 leading-relaxed">
          Building ideas into reality, one line at a time. I’m a CSE undergrad @ IIIT Kalyani who loves full-stack development, UI/UX, and problem solving. I build with Python, C, C++, JavaScript & MERN, design with Figma, and constantly explore new technologies.
        </p>

        <div className="blur-in inline-flex gap-4">
          <a 
            href="#work" 
            className="group relative rounded-full text-xs sm:text-sm px-6 py-2.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all hover:scale-105 inline-flex items-center justify-center font-medium"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
            See Works
          </a>
          <a 
            href="#contact" 
            className="group relative rounded-full text-xs sm:text-sm px-6 py-2.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all hover:scale-105 inline-flex items-center justify-center font-medium"
          >
             <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
             <span className="relative z-10 bg-bg px-4 py-1.5 rounded-full inset-0 flex items-center justify-center">Reach out...</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}