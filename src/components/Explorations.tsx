import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: "Languages & Core",
    subtitle: "Foundation",
    gradient: "from-blue-600/10 to-cyan-600/10",
    borderGlow: "group-hover:border-blue-500/30",
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
    gradient: "from-purple-600/10 to-pink-600/10",
    borderGlow: "group-hover:border-purple-500/30",
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
    gradient: "from-emerald-600/10 to-teal-600/10",
    borderGlow: "group-hover:border-emerald-500/30",
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
    gradient: "from-amber-600/10 to-orange-600/10",
    borderGlow: "group-hover:border-amber-500/30",
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
    gradient: "from-indigo-600/10 to-violet-600/10",
    borderGlow: "group-hover:border-indigo-500/30",
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
    gradient: "from-rose-600/10 to-red-600/10",
    borderGlow: "group-hover:border-rose-500/30",
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
  const centerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: centerRef.current,
        pinSpacing: true,
      });

      gsap.to(leftColRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightColRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-bg min-h-[260vh] overflow-hidden pt-28 pb-12 flex flex-col justify-between" id="explorations">
      
      {/* Pinned Center Layer - Explicitly Center Aligned */}
      <div ref={centerRef} className="absolute inset-x-0 h-screen flex flex-col items-center justify-center z-10 pointer-events-none text-center px-6">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-4 block">Tech Ecosystem</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-body leading-tight text-center w-full">
            Crafted with <span className="font-display italic text-text-primary">precision</span>
          </h2>
          <p className="mt-4 md:mt-6 text-muted max-w-lg mx-auto pointer-events-auto text-xs sm:text-sm md:text-base leading-relaxed text-center">
            A comprehensive matrix of languages, frameworks, and modern tools I leverage to build scalable systems.
          </p>
        </div>
      </div>

      {/* Parallax Tech Cards Grid with Balanced Top Padding */}
      <div className="relative z-20 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 px-6 pt-[56vh] md:pt-[58vh] pb-24 pointer-events-none w-full">
        
        {/* Left Column */}
        <div ref={leftColRef} className="flex flex-col gap-12 md:gap-28 items-center md:items-end">
          {techCategories.slice(0, 3).map((cat, i) => (
            <div 
              key={i} 
              className={`w-full max-w-[380px] md:max-w-[400px] p-6 md:p-8 rounded-3xl bg-surface/40 backdrop-blur-xl border border-white/5 ${cat.borderGlow} pointer-events-auto hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-2xl relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 mix-blend-screen pointer-events-none transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
              
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2 block font-medium">{cat.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-5 md:mb-6">{cat.title}</h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-xl bg-black/20 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      <img 
                        src={skill.url || `https://cdn.simpleicons.org/${skill.icon}/e5e5e5`} 
                        alt={skill.name} 
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs text-text-primary/90 font-medium tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div ref={rightColRef} className="flex flex-col gap-12 md:gap-28 items-center md:items-start md:mt-[15vh]">
           {techCategories.slice(3, 6).map((cat, i) => (
            <div 
              key={i} 
              className={`w-full max-w-[380px] md:max-w-[400px] p-6 md:p-8 rounded-3xl bg-surface/40 backdrop-blur-xl border border-white/5 ${cat.borderGlow} pointer-events-auto hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-2xl relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 mix-blend-screen pointer-events-none transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
              
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted mb-2 block font-medium">{cat.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-5 md:mb-6">{cat.title}</h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-xl bg-black/20 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      <img 
                        src={skill.url || `https://cdn.simpleicons.org/${skill.icon}/e5e5e5`} 
                        alt={skill.name} 
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs text-text-primary/90 font-medium tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aesthetic Ending Line Bar */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 mt-12 mb-4">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>
    </section>
  );
}