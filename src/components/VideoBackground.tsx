import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  flip?: boolean;
  overlayClasses?: string;
}

export default function VideoBackground({ src, flip, overlayClasses }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [src]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full bg-bg">
      {/* Background solid layer to block initial flashes */}
      <div className="absolute inset-0 bg-bg z-0" />

      <motion.video
        ref={videoRef}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.03 
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        onLoadedData={() => setIsLoaded(true)}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-10 ${flip ? 'scale-y-[-1]' : ''}`}
      />
      
      <div className={`absolute inset-0 z-20 ${overlayClasses}`} />
    </div>
  );
}