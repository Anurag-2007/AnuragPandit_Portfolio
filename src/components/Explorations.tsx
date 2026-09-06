import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: "Languages & Core",
    subtitle: "Foundation",
    accent: "hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]",
    dotColor: "bg-blue-400 shadow-[0_0_10px_#60a5fa]",
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
    accent: "hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    dotColor: "bg-purple-400 shadow-[0_0_10px_#c084fc]",
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
    accent: "hover:border-emerald-500/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    dotColor: "bg-emerald-400 shadow-[0_0_10px_#34d399]",
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
    accent: "hover:border-amber-500/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    dotColor: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
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
    accent: "hover:border-indigo-500/60 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]",
    dotColor: "bg-indigo-400 shadow-[0_0_10px_#818cf8]",
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
    accent: "hover:border-rose-500/60 hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]",
    dotColor: "bg-rose-400 shadow-[0_0_10px_#fb7185]",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal Animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Uniform Stagger Reveal for Cards
      const cards = cardsRef.current?.children || [];
      
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Magnetic Mouse Tilt Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.3
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      duration: 0.6
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-bg py-24 sm:py-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center justify-center w-full" 
      id="explorations"
    >
      {/* Radial Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(137,170,204,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Header */}
      <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 relative z-10 px-2 will-change-transform">
        <span className="text-[10px] sm:text-[11px] text-[#89AACC] uppercase tracking-[0.35em] mb-3 block font-semibold">
          Tech Ecosystem
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-body leading-[1.1] text-text-primary">
          Crafted with <span className="font-display italic text-[#89AACC]">precision</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          A comprehensive matrix of languages, frameworks, and modern tools leveraged for scalable architecture.
        </p>
      </div>

      {/* Perfectly Aligned Glassmorphic Grid */}
      <div 
        ref={cardsRef}
        className="relative z-20 w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch"
      >
        {techCategories.map((cat, i) => (
          <div 
            key={i} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`w-full h-full min-h-[220px] p-6 sm:p-7 rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/15 ${cat.accent} hover:bg-white/[0.06] transition-all duration-300 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group flex flex-col justify-between [transform-style:preserve-3d]`}
          >
            {/* Top Border Accent Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Hover Spotlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 [transform:translateZ(25px)] flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted font-bold">
                    {cat.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display italic text-text-primary mb-5">
                  {cat.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-sm backdrop-blur-md"
                  >
                    <img 
                      src={skill.url || `https://cdn.simpleicons.org/${skill.icon}/e5e5e5`} 
                      alt={skill.name} 
                      className="w-3.5 h-3.5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <span className="text-[11px] text-text-primary/90 font-medium tracking-wide">
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