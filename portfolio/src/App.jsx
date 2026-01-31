import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mindset from './components/Mindset';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-detective-black min-h-screen w-full relative overflow-hidden text-white selection:bg-neon-cyan/30 selection:text-neon-cyan">
      {/* Dynamic Cursor Light Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity opacity-40 via-transparent to-transparent bg-gradient-radial from-neon-blue/20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.06), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Mindset />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
