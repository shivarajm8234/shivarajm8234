import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-infinite-void">
      {/* Infinite Void Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Hollow Purple Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hollow-purple/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-six-eyes/10 rounded-full blur-[100px] animate-float" />

      <div className="z-10 text-center space-y-6 max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative inline-block"
        >
          <span className="text-six-eyes font-mono text-sm tracking-[0.5em] uppercase border border-six-eyes/30 px-4 py-1 rounded-full bg-six-eyes/5 backdrop-blur-md">
            Domain Expansion
          </span>
        </motion.div>

        <motion.h1 
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            UNLIMITED
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-hollow-purple to-six-eyes animate-pulse-slow">
            VOID
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mix-blend-plus-lighter"
        >
          "Throughout Heaven and Earth, I alone am the honored one."
          <br />
          <span className="text-sm font-mono text-six-eyes/70 mt-4 block">
            AI Architect • Full Stack Sorcerer • System Designer
          </span>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-hollow-purple to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-hollow-purple/70">Enter The Void</span>
      </motion.div>
    </section>
  );
};

export default Hero;
