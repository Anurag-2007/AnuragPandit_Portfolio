import { motion } from 'framer-motion';
import { Trophy, Code2, Cpu, Bot, Award } from 'lucide-react';

const achievements = [
  {
    icon: <Code2 size={18} className="text-[#89AACC]" />,
    title: "Competitive Programming",
    meta: "LeetCode & CodeChef",
    description: "1530+ Peak Rating on LeetCode and 1600+ Rating on CodeChef.",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    icon: <Cpu size={18} className="text-[#89AACC]" />,
    title: "Smart India Hackathon",
    meta: "Internal Round Qualified",
    description: "Built end-to-end fullstack interface for Sentinel-SRX (satellite data enhancement).",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    icon: <Trophy size={18} className="text-[#89AACC]" />,
    title: "Top 10 Finish — InnovateX",
    meta: "GDG IIIT Kalyani (80+ Teams)",
    description: "Built Signetic (ASL fingerspelling translator using React, MediaPipe, TensorFlow.js).",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    icon: <Award size={18} className="text-[#89AACC]" />,
    title: "2nd Place — Internal Hackathon",
    meta: "Udbhav Inter-IIIT Qualifier",
    description: "Delivered Clinisense, a RAG healthcare product prototype under a 24-hour constraint.",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    icon: <Bot size={18} className="text-[#89AACC]" />,
    title: "Finalist — Botball '25",
    meta: "Robotics Competition",
    description: "Competed in high-level robotics challenge among top student teams at IIIT Kalyani.",
    colSpan: "col-span-1 md:col-span-3"
  }
];

export default function Achievements() {
  return (
    <section className="bg-bg py-20 md:py-28 relative overflow-hidden" id="achievements">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md mb-4 shadow-inner">
            <Trophy size={14} className="text-[#89AACC]" />
            <span className="text-[10px] text-muted uppercase tracking-[0.3em] font-medium">Recognition</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-body">
            Milestones & <span className="font-display italic text-text-primary">achievements</span>
          </h2>
          <p className="text-muted mt-3 max-w-sm mx-auto text-xs md:text-sm">
            Selected highlights from hackathons, contests, and technical competitions.
          </p>
        </motion.div>

        {/* Minimal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${item.colSpan} p-6 md:p-7 rounded-3xl bg-surface/30 backdrop-blur-xl border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 shadow-xl relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full">
                      {item.meta}
                    </span>
                  </div>

                  <h3 className="text-xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
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