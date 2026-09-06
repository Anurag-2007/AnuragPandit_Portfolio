import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import Hero from './Hero';
import Education from './Education';
import Explorations from './Explorations';
import Achievements from './Achievements';
import Works from './works';
import Experience from './Experience';
import Footer from './Footer';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <main className="bg-bg w-full min-h-screen">
          <Navbar />
          <Hero />
          <Education />
          <Explorations />
          <Achievements />
          <Works />
          <Experience />
          <Footer />
        </main>
      )}
    </>
  );
}