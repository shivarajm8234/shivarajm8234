import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const StatCard = ({ label, value, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-six-eyes/50 transition-colors duration-300"
  >
    <h3 className="text-six-eyes text-xs uppercase tracking-widest mb-2">{label}</h3>
    <p className="text-2xl text-white font-mono">{value}</p>
  </motion.div>
);

const Mindset = () => {
  return (
    <section id="mindset" className="py-32 px-4 relative bg-detective-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left: Philosophy */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-6 text-white">THE DETECTIVE</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Like L's methodical approach to solving complex cases, I dissect intricate problems with analytical precision. 
              My mind operates at the intersection of logic and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <StatCard label="Analytical" value="Logical" delay={0.2} />
             <StatCard label="Methodical" value="Systematic" delay={0.3} />
             <StatCard label="Innovative" value="AI-First" delay={0.4} />
          </div>
        </div>

        {/* Right: Technical Proficiency */}
        <div className="space-y-8">
          <h3 className="text-xl text-white font-mono mb-8 border-b border-white/10 pb-4 inline-block">
            INVESTIGATION TOOLKIT
          </h3>
          
          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                  <span className="text-six-eyes/80 font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-six-eyes group-hover:bg-hollow-purple transition-colors duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mindset;
