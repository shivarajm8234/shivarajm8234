import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative flex flex-col items-center justify-center min-h-[60vh]">
      {/* Footer Gradient */}
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-hollow-purple/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center space-y-12 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          DROP A CLUE
        </h2>
        
        <p className="text-gray-400 text-lg">
          Have a complex problem that needs investigating? <br/>
          Ready to start your next AI-powered project?
        </p>
        
        <div className="flex justify-center gap-12 pt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-hollow-purple/20 group-hover:border-hollow-purple group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300">
                <link.icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-mono text-gray-500 group-hover:text-six-eyes transition-colors uppercase tracking-widest">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-16"
        >
          <blockquote className="text-white/30 italic font-mono text-sm max-w-md mx-auto">
            "Justice will prevail, no matter what."
          </blockquote>
          <div className="text-[10px] text-gray-600 mt-8 uppercase tracking-widest flex flex-col gap-2">
            <span>© 2026 Detective L. All cases confidential.</span>
            <span className="text-hollow-purple/40">Domain: Unlimited Information</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
