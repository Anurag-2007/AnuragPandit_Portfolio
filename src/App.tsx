import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Photography from './components/Photography';

export default function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}