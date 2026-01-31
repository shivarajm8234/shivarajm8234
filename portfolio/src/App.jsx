import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mindset from './components/Mindset';
import Projects from './components/Projects';
import Services from './components/Services';
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
    <div className="bg-infinite-void min-h-screen w-full relative overflow-hidden text-white selection:bg-hollow-purple/30 selection:text-white">
      {/* Gojo Background Theme - Video */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/shivarajm8234/gojo_bg.mp4" type="video/mp4" />
            {/* Fallback for dev environment which doesn't use base path */}
            <source src="/gojo_bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-infinite-void/90" />
      </div>

      {/* Dynamic Cursor Light Effect (Hollow Purple) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity opacity-30 via-transparent to-transparent bg-gradient-radial from-hollow-purple/20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.08), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Mindset />
        <div id="cases"><Projects /></div>
        <div id="services"><Services /></div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
