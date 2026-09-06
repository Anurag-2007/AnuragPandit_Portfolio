import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import VideoBackground from './VideoBackground';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-content", {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-10 pb-6 overflow-hidden flex flex-col justify-between">
      <VideoBackground src={HLS_URL} flip overlayClasses="bg-black/65" />
      
      {/* GSAP Marquee */}
      <div ref={marqueeRef} className="relative z-10 w-full overflow-hidden border-y border-stroke/30 py-2.5 flex whitespace-nowrap bg-surface/10 backdrop-blur-sm">
        <div className="marquee-content flex gap-6 text-xl md:text-2xl font-display italic tracking-wide text-text-primary/70">
           {Array(10).fill("BUILDING THE FUTURE •").map((text, i) => (
             <span key={i}>{text}</span>
           ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center px-4">
        <a href="mailto:panditanurag3101@gmail.com" className="group relative inline-flex items-center gap-3 text-2xl md:text-4xl font-body text-text-primary">
           <span className="absolute inset-[-8px] rounded-full accent-gradient opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
           Let's talk <ArrowUpRight className="w-6 h-6 md:w-9 md:h-9 group-hover:rotate-45 transition-transform" />
        </a>
         </div>

      {/* Footer Bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-sm text-muted gap-4">
        <div className="flex items-center gap-2.5">
           {/* GitHub */}
           <a 
             href="https://github.com/Anurag-2007" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-2.5 rounded-full bg-surface/50 border border-stroke/50 hover:border-text-primary hover:text-text-primary transition-all hover:scale-110 backdrop-blur-md group"
             aria-label="GitHub"
           >
             <svg className="w-4 h-4 fill-current transition-transform group-hover:rotate-6" viewBox="0 0 24 24">
               <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
             </svg>
           </a>

           {/* LinkedIn */}
           <a 
             href="https://www.linkedin.com/in/anurag-pandit-dev/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-2.5 rounded-full bg-surface/50 border border-stroke/50 hover:border-text-primary hover:text-text-primary transition-all hover:scale-110 backdrop-blur-md group"
             aria-label="LinkedIn"
           >
             <svg className="w-4 h-4 fill-current transition-transform group-hover:rotate-6" viewBox="0 0 24 24">
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
             </svg>
           </a>

           {/* Email */}
           <a 
             href="mailto:panditanurag3101@gmail.com" 
             className="p-2.5 rounded-full bg-surface/50 border border-stroke/50 hover:border-text-primary hover:text-text-primary transition-all hover:scale-110 backdrop-blur-md group"
             aria-label="Email"
           >
             <Mail className="w-4 h-4 transition-transform group-hover:rotate-6" />
           </a>

           {/* Phone */}
           <a 
             href="tel:+919004682592" 
             className="p-2.5 rounded-full bg-surface/50 border border-stroke/50 hover:border-text-primary hover:text-text-primary transition-all hover:scale-110 backdrop-blur-md group"
             aria-label="Phone"
           >
             <Phone className="w-4 h-4 transition-transform group-hover:rotate-6" />
           </a>
        </div>

        <div className="flex items-center gap-2.5 bg-surface/50 px-3.5 py-1.5 rounded-full border border-stroke/50 backdrop-blur-md text-xs">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </span>
           Available for projects
        </div>
      </div>
    </footer>
  );
}