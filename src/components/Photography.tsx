import { motion } from 'framer-motion';
import { ArrowLeft, Camera } from 'lucide-react';

// Automatically generate array for 1 (1).jpg through 1 (50).jpg
// (Assuming your images are stored in a folder named 'photos' inside your public directory, e.g., /photos/1 (1).jpg)
const photos = Array.from({ length: 50 }, (_, index) => {
  const num = index + 1;
  return {
    url: `/photos/1 (${num}).jpg`, // Update this path if your folder structure differs (e.g., just `/${num}.jpg`)
    title: `Capture #${num}`,
    category: "Visual Archive"
  };
});

export default function Photography() {
  return (
    <div className="min-h-screen bg-bg text-text-primary px-6 py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Navigation / Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/10 hover:border-white/30 text-xs text-muted hover:text-text-primary transition-all backdrop-blur-md group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </a>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md shadow-inner">
            <Camera size={14} className="text-[#89AACC]" />
            <span className="text-[10px] text-muted uppercase tracking-[0.3em] font-medium">50 Captures</span>
          </div>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-body mb-4">
            Through the <span className="font-display italic text-text-primary">lens</span>
          </h1>
          <p className="text-muted max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            A comprehensive collection of visual moments, light studies, and photographic explorations.
          </p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }} // Staggered entry
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface/30 border border-white/10 shadow-xl cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback placeholder if an image file is missing or path is incorrect
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
                }}
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-widest mb-1">
                  {photo.category}
                </span>
                <h3 className="text-lg font-display italic text-white">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}