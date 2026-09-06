import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, FileText, Camera, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/#home', icon: Home, isExternal: false },
  { label: 'Work', href: '/#work', icon: Briefcase, isExternal: false },
  { label: 'Photography', href: '/photography', icon: Camera, isExternal: false },
  { 
    label: 'Resume', 
    href: 'https://docs.google.com/document/d/1gYlnRoRzAJ4a8jC-AcPOwY0A7dBMXaaQgh-kk1bf1q8/edit?tab=t.0', 
    icon: FileText, 
    isExternal: true 
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full backdrop-blur-2xl border border-white/10 bg-surface/80 p-1.5 sm:px-3.5 sm:py-2 transition-all duration-500 shadow-2xl ${scrolled ? 'shadow-black/60 border-white/20 bg-surface/90' : ''}`}>
        
        {/* Logo - AP with Breathing Blue Halo */}
        <a 
          href="/#home"
          className="relative group p-0.5 flex items-center justify-center cursor-pointer shrink-0"
        >
          {/* Breathing Blue Halo Ring */}
          <div className="absolute inset-0 rounded-full bg-[#89AACC] opacity-50 blur-sm group-hover:blur-md group-hover:opacity-80 transition-all duration-700 animate-pulse" />
          
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#89AACC] to-white/20 p-[1px] flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-bg rounded-full flex items-center justify-center text-[13px] font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors">
              AP
            </div>
          </div>
        </a>

        <div className="hidden sm:block w-px h-4 bg-white/10 mx-1" />

        {/* Links with Premium Hover & Glow */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item, i) => {
            const IconComponent = item.icon;
            const commonClasses = "relative group flex items-center gap-2 text-xs rounded-full px-3 sm:px-4 py-1.5 text-muted hover:text-text-primary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(137,170,204,0.15)] transition-all duration-300";

            return (
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  <IconComponent size={15} className="sm:hidden text-[#89AACC]" />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              ) : item.label === 'Photography' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={commonClasses}
                >
                  <IconComponent size={15} className="sm:hidden text-[#89AACC]" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative group flex items-center gap-2 text-xs rounded-full px-3 sm:px-4 py-1.5 transition-all duration-300 ${i === 0 ? 'text-text-primary bg-white/10 shadow-[0_0_15px_rgba(137,170,204,0.15)]' : 'text-muted hover:text-text-primary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(137,170,204,0.15)]'}`}
                >
                  <IconComponent size={15} className="sm:hidden text-[#89AACC]" />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              )
            );
          })}
        </div>

        <div className="hidden sm:block w-px h-4 bg-white/10 mx-1" />

        {/* CTA "Say Hi" with Electric Blue Accent Glow */}
        <a 
          href="#contact" 
          className="relative group text-xs rounded-full px-3 py-1.5 ml-0.5 text-text-primary inline-flex items-center justify-center overflow-hidden shrink-0"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-cyan-400 opacity-0 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
          <div className="relative flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md z-10 group-hover:border-[#89AACC]/50 group-hover:bg-surface transition-all duration-300">
            <span className="hidden sm:inline">Say hi</span>
            <span className="sm:hidden">Hi</span>
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#89AACC] transition-transform duration-300" />
          </div>
        </a>

      </div>
    </nav>
  );
}