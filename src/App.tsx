import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';

import Index from './components/Index';

import Photography from './components/Photography';



export default function App() {

  const [isLoading, setIsLoading] = useState(true);



  return (

    <Router>

      <div className="relative bg-bg min-h-screen text-text-primary selection:bg-[#89AACC]/30">

        {/* Loading Screen stays active on top until fade completes */}

        {isLoading && (

          <LoadingScreen onComplete={() => setIsLoading(false)} />

        )}



        {/* Routes wrapper fades in simultaneously as the loader unmounts */}

        <div className={`transition-opacity duration-1000 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

          <Routes>

            <Route path="/" element={<Index />} />

            <Route path="/photography" element={<Photography />} />

          </Routes>

        </div>

      </div>

    </Router>
  );
}