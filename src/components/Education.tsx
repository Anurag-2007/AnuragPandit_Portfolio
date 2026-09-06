import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    period: "2025 — Present",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology (IIIT Kalyani)",
    location: "West Bengal, India",
    description: "Pursuing core computer science engineering with a strong focus on full-stack development, software architecture, and artificial intelligence. Maintaining a CGPA of 7.91.",
    highlights: ["CGPA: 7.91", "Core Team Member at CodeCubes", "Creative Lead @ GDG On Campus"],
    borderGlow: "hover:border-white/20"
  },
  {
    period: "2022 — 2024",
    degree: "HSC (Science — PCM, C++)",
    institution: "GEI's MH High School",
    location: "Thane, Maharashtra",
    description: "Completed higher secondary education focusing on Physics, Chemistry, Mathematics, and advanced C++ programming foundations, scoring 82.3%.",
    highlights: ["Percentage: 82.3%", "Rigorous PCM Foundation", "Advanced C++ Programming"],
    borderGlow: "hover:border-white/20"
  },
  {
    period: "2022",
    degree: "SSC (Secondary School Certificate)",
    institution: "Saraswati Vidyalaya & Jr. College",
    location: "Navi Mumbai, Maharashtra",
    description: "Graduated with 94.8% and top academic honors, securing school-wide recognition and leadership accolades.",
    highlights: ["Percentage: 94.8%", "1st Rank in 10th Grade (School Topper)", "Awarded 'Student of the Year "],
    borderGlow: "hover:border-white/20"
  }
];

export default function Education() {
  return (
    <section className="bg-bg py-20 md:py-28 relative overflow-hidden" id="education">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md mb-4 shadow-inner">
            <GraduationCap size={14} className="text-text-primary/70" />
            <span className="text-[10px] text-muted uppercase tracking-[0.3em] font-medium">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-body">
            Educational <span className="font-display italic text-text-primary">milestones</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto text-sm md:text-base">
            The formal academic milestones and institutions that shaped my engineering mindset.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-125 transition-all duration-300 ring-4 ring-bg" />

              {/* Date pill for desktop (left aligned to timeline) */}
              <div className="hidden md:flex items-center gap-2 absolute -left-36 top-1 text-xs text-muted font-mono">
                <Calendar size={12} />
                {item.period}
              </div>

              {/* Card Container */}
              <div className={`p-8 rounded-3xl bg-surface/30 backdrop-blur-xl border border-white/5 ${item.borderGlow} transition-all duration-500 hover:-translate-y-1 shadow-2xl relative overflow-hidden group/card`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.02] group-hover/card:opacity-5 mix-blend-screen pointer-events-none transition-opacity" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                <div className="relative z-10">
                  <div className="md:hidden text-xs text-muted font-mono mb-2 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.period}
                  </div>

                  <span className="text-xs text-text-primary/70 font-mono uppercase tracking-widest block mb-1">
                    {item.institution} &bull; <span className="text-muted">{item.location}</span>
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-3">
                    {item.degree}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-xs text-text-primary/90 font-medium">
                        <Award size={13} className="text-text-primary/60" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Aesthetic Ending Line Bar */}
      <div className="relative z-20 max-w-[1300px] mx-auto px-6 mt-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>
    </section>
  );
}