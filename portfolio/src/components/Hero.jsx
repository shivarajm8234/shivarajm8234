import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />

      <div className="z-10 text-center space-y-8 max-w-4xl px-4">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-white/40 text-sm uppercase tracking-widest font-mono"
        >
          System Online • Detective Mode
        </motion.h2>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            TURNING CODE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">
            INTO CLUES.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed mix-blend-plus-lighter"
        >
          Unraveling complex systems with analytical precision. 
          <br/>
          Ghost-mode full-stack development.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-cyan-500/50">Scroll to Investigate</span>
      </motion.div>
    </section>
  );
};

export default Hero;
