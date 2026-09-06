import { motion } from 'framer-motion';

const projects = [
  { 
    title: "ResQPilot", 
    category: "React, Express, MongoDB, FastAPI",
    description: "Full-stack medical emergency response workflow integrating real-time dashboards, ML triage, OSRM GPS routing, and virtual ambulance dispatch.",
    githubUrl: "https://github.com/Anurag-2007/ResQPilot_Hexafalls",
    span: "md:col-span-7", 
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Signetic", 
    category: "TensorFlow, Mediapipe, Vision",
    description: "Browser-based real-time ASL fingerspelling translator leveraging MediaPipe Hands' geometric tracking with WebGL and rule-based classification.",
    githubUrl: "https://github.com/Anurag-2007/IronLegions-Gesture",
    span: "md:col-span-5", 
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Quietly", 
    category: "React Native, Expo, Kotlin",
    description: "Android application that auto-manages Silent/Vibrate mode and media volume using background geofencing and native modules.",
    githubUrl: "https://github.com/Anurag-2007/Quietly",
    span: "md:col-span-5", 
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "SmartTrafficML", 
    category: "Python, OpenCV, Scikit-learn",
    description: "Machine learning-powered traffic flow system that detects congestion based on location, time, and weather factors to provide real-time status.",
    githubUrl: "https://github.com/Anurag-2007/SmartTrafficML",
    span: "md:col-span-7", 
    img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop" 
  },
];

export default function Works() {
  return (
    <section className="bg-bg py-12 md:py-16" id="work">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light">Featured <span className="font-display italic">projects</span></h2>
            <p className="text-muted mt-4 max-w-sm text-sm">Full-stack platforms, machine learning systems, and computer vision applications.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <div key={i} className={`${p.span} relative group aspect-[4/3] md:aspect-auto md:min-h-[420px] rounded-3xl overflow-hidden bg-surface border border-stroke flex flex-col justify-end p-8`}>
              <div className="absolute inset-0 z-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              </div>

              <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
              
              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-xs text-muted uppercase tracking-[0.2em] mb-2 block">{p.category}</span>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-2">{p.title}</h3>
                <p className="text-xs md:text-sm text-muted max-w-md line-clamp-2">{p.description}</p>
              </div>

              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-500 flex items-center justify-center z-20">
                <a 
                  href={p.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group/btn cursor-pointer"
                >
                   <div className="absolute inset-[-2px] rounded-full accent-gradient -z-10" />
                   <div className="bg-white text-black px-7 py-3 rounded-full font-body text-sm flex items-center gap-3 transition-transform hover:scale-105">
                     <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                     </svg>
                     View Repository — <span className="font-display italic text-lg">{p.title}</span>
                   </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}