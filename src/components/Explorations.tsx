import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: "Languages & Core",
    subtitle: "Foundation",
    gradient: "from-blue-600/20 to-cyan-600/20",
    borderGlow: "group-hover:border-blue-500/40",
    skills: [
      { name: "C++", icon: "cplusplus" },
      { name: "C", icon: "c" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", url: "https://api.iconify.design/mdi:language-css3.svg?color=%23e5e5e5" }
    ]
  },
  {
    title: "Frontend & Mobile",
    subtitle: "Interfaces",
    gradient: "from-purple-600/20 to-pink-600/20",
    borderGlow: "group-hover:border-purple-500/40",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "Tailwind", icon: "tailwindcss" }
    ]
  },
  {
    title: "Backend & Systems",
    subtitle: "Architecture",
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderGlow: "group-hover:border-emerald-500/40",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST APIs", icon: "postman" }
    ]
  },
  {
    title: "Databases",
    subtitle: "Storage",
    gradient: "from-amber-600/20 to-orange-600/20",
    borderGlow: "group-hover:border-amber-500/40",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "MinIO", icon: "minio" }
    ]
  },
  {
    title: "AI, ML & Vision",
    subtitle: "Intelligence",
    gradient: "from-indigo-600/20 to-violet-600/20",
    borderGlow: "group-hover:border-indigo-500/40",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "MediaPipe", icon: "google" }, 
      { name: "OpenCV", icon: "opencv" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" }
    ]
  },
  {
    title: "Design & Tools",
    subtitle: "Workflow",
    gradient: "from-rose-600/20 to-red-600/20",
    borderGlow: "group-hover:border-rose-500/40",
    skills: [
      { name: "Figma", icon: "figma" },
      { name: "Canva", url: "https://api.iconify.design/simple-icons:canva.svg?color=%23e5e5e5" },
      { name: "Framer", icon: "framer" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", url: "https://api.iconify.design/mdi:microsoft-visual-studio-code.svg?color=%23e5e5e5" },
      { name: "Vercel", icon: "vercel" }
    ]
  }
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Phase 1: Header fades and locks gracefully into the center view
      tl.fromTo(headerRef.current, 
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 0.5, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
      
      // Phase 2: As cards enter and rise up, header completely disappears (opacity 0)
      .to(headerRef.current, { opacity: 0, scale: 1.05, y: -30, duration: 0.6 }, "+=0.1")

      // Phase 3: High-visibility glassmorphism cards float cleanly over into position
      .fromTo(gridRef.current,
        { y: "90vh", opacity: 0 },
        { y: "-52vh", opacity: 1, duration: 1.6, ease: "power2.out" },
        "<" // Starts alongside the header fade-out for a seamless transition
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-bg h-screen w-full overflow-hidden flex items-center justify-center" 
      id="explorations"
    >
      {/* Background Watermark Text Matrix (Fades away completely on scroll) */}
      <div 
        ref={headerRef} 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none will-change-[opacity,transform]"
      >
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
          <span className="text-[11px] text-[#89AACC] uppercase tracking-[0.35em] mb-4 block font-medium opacity-80">
            Tech Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-body leading-[1.1] text-center w-full text-text-primary/70">
            Crafted with <span className="font-display italic text-[#89AACC]">precision</span>
          </h2>
          <p className="mt-4 md:mt-5 text-muted/70 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-center">
            A comprehensive matrix of languages, frameworks, and modern tools I leverage to build scalable systems.
          </p>
        </div>
      </div>

      {/* Highly Visible Glassmorphism Cards Grid */}
      <div 
        ref={gridRef}
        className="absolute z-20 w-full max-w-[1280px] px-6 grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto will-change-transform"
      >
        {techCategories.map((cat, i) => (
          <div 
            key={i} 
            className={`w-full p-6 rounded-2xl bg-surface/85 backdrop-blur-3xl border border-white/20 ${cat.borderGlow} hover:border-[#89AACC]/60 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            
            <div className="relative z-10">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#89AACC] mb-1.5 block font-semibold">
                {cat.subtitle}
              </span>
              <h3 className="text-xl md:text-2xl font-display italic text-text-primary mb-4">
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/60 border border-white/10 hover:border-white/30 transition-colors shadow-sm"
                  >
                    <img 
                      src={skill.url || `https://cdn.simpleicons.org/${skill.icon}/e5e5e5`} 
                      alt={skill.name} 
                      className="w-3.5 h-3.5 object-contain"
                      loading="lazy"
                    />
                    <span className="text-[11px] text-text-primary font-medium tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}