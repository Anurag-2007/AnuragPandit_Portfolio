import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Growth Marketing Intern",
    company: "PHICSIT",
    location: "Remote / Hybrid",
    period: "May 2026 — Jul 2026",
    description: "Drove market research, competitor analysis, and growth strategy initiatives to identify opportunities, strengthen positioning, and support user acquisition.",
    skills: ["Market Research", "Growth Strategy", "Competitive Analysis"]
  },
  {
    role: "Core Team Member",
    company: "CodeCubes — CP Club, IIIT Kalyani",
    location: "IIIT Kalyani",
    period: "Jan 2025 — Present",
    description: "Active member of the institute’s competitive programming club, regularly practicing algorithmic problem-solving and participating in coding contests.",
    skills: ["Competitive Programming", "Algorithms", "Data Structures"]
  },
  {
    role: "Creative Lead",
    company: "Google Developer Groups on Campus, IIIT Kalyani",
    location: "IIIT Kalyani",
    period: "Oct 2024 — Present",
    description: "Led visual design and branding for a 500+ member developer community, creating event creatives, posters, and social media content while establishing reusable Figma design systems.",
    skills: ["UI/UX Design", "Figma", "Brand Identity", "Community Leadership"]
  }
];

export default function Experience() {
  return (
    <section className="bg-bg py-20 md:py-28 relative overflow-hidden" id="experience">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md mb-4 shadow-inner">
            <Briefcase size={14} className="text-[#89AACC]" />
            <span className="text-[10px] text-muted uppercase tracking-[0.3em] font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-body">
            Work <span className="font-display italic text-text-primary">experience</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto text-sm md:text-base">
            Leadership roles, technical communities, and industry experience.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-stroke/80 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-stroke group-hover:bg-[#89AACC] group-hover:scale-125 transition-all duration-300 ring-4 ring-bg" />

              {/* Date & Period for Desktop (Left aligned) */}
              <div className="hidden md:flex flex-col items-end absolute -left-36 top-1 text-xs text-muted font-mono text-right w-28">
                <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period.split(' — ')[0]}</span>
                <span className="text-[10px] opacity-60 mt-0.5">{exp.period.split(' — ')[1]}</span>
              </div>

              {/* Minimal Card Container */}
              <div className="p-8 rounded-3xl bg-surface/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-2xl relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-40 group-hover/card:opacity-80 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="md:hidden text-xs text-muted font-mono mb-2 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {exp.period}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs text-[#89AACC] font-medium uppercase tracking-widest flex items-center gap-1.5">
                      {exp.company}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-3">
                    {exp.role}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 rounded-xl bg-black/30 border border-white/5 text-xs text-text-primary/90 font-medium">
                        {skill}
                      </span>
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