import { useEffect, useState } from 'react';
import { Camera, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '/#work', isExternal: false },
  { label: 'Experience', href: '/#experience', isExternal: false },
  { 
    label: 'Resume', 
    href: 'https://docs.google.com/document/d/1gYlnRoRzAJ4a8jC-AcPOwY0A7dBMXaaQgh-kk1bf1q8/edit?tab=t.0', 
    isExternal: true 
  },
  { label: 'Photography', href: '/#photography', icon: Camera, isExternal: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-6 px-3 pointer-events-none">
      <div className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2.5 rounded-full backdrop-blur-2xl border border-white/10 bg-surface/80 p-1 sm:px-3.5 sm:py-2 transition-all duration-500 shadow-2xl ${scrolled ? 'shadow-black/60 border-white/20 bg-surface/90' : ''}`}>
        
        {/* Logo - AP with Breathing Blue Halo */}
        <a 
          href="/#home"
          className="relative group p-0.5 flex items-center justify-center cursor-pointer shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-[#89AACC] opacity-50 blur-sm group-hover:blur-md group-hover:opacity-80 transition-all duration-700 animate-pulse" />
          
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#89AACC] to-white/20 p-[1px] flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-bg rounded-full flex items-center justify-center text-xs sm:text-[13px] font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors">
              AP
            </div>
          </div>
        </a>

        <div className="w-px h-3.5 sm:h-4 bg-white/10 mx-0.5 sm:mx-1" />

        {/* Links with Subtle Separating Lines & Compact Mobile Padding */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const commonClasses = "relative group flex items-center gap-1.5 text-[10px] sm:text-xs rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-muted hover:text-text-primary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(137,170,204,0.15)] transition-all duration-300";

            return (
              <div key={item.label} className="flex items-center">
                {index > 0 && <div className="w-px h-3 bg-white/10 mx-0.5" />}
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClasses}
                  >
                    <span>{item.label}</span>
                  </a>
                ) : Icon ? (
                  <a
                    href={item.href}
                    className={commonClasses}
                    title={item.label}
                  >
                    <Icon size={14} className="text-muted group-hover:text-[#89AACC] transition-colors shrink-0" />
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className={commonClasses}
                  >
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-px h-3.5 sm:h-4 bg-white/10 mx-0.5 sm:mx-1" />

        {/* CTA "Say Hi" - tighter gap and compact sizing */}
        <a 
          href="#contact" 
          className="relative group text-[10px] sm:text-xs rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-text-primary inline-flex items-center justify-center overflow-hidden shrink-0"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-cyan-400 opacity-0 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
          <div className="relative flex items-center gap-1 bg-black/50 border border-white/10 rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 backdrop-blur-md z-10 group-hover:border-[#89AACC]/50 group-hover:bg-surface transition-all duration-300">
            <span>Hi</span>
            <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#89AACC] transition-transform duration-300" />
          </div>
        </a>

      </div>
    </nav>
  );
}