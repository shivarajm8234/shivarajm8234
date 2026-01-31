import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mindset from './components/Mindset';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import gojoTheme from './assets/gojo_theme.png';

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
      {/* Gojo Background Theme - Fixed Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-60 bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${gojoTheme})` }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-black/80 pointer-events-none" />

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
