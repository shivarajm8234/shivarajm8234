import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ArrowUpRight } from "lucide-react";

const CaseCard = ({ project, index }) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative p-8 glass-card hover:bg-white/5 transition-all duration-500 border-l-2 border-transparent hover:border-neon-cyan h-full"
    >
      <div className="absolute top-8 right-8 text-white/20 group-hover:text-neon-cyan transition-colors">
        <ArrowUpRight size={20} />
      </div>

      <div className="text-neon-blue font-mono text-xs mb-4 tracking-wider">CASE #{project.id}</div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
        {project.title}
      </h3>
      
      <div className="mb-6">
        <span className={`text-xs px-2 py-1 rounded-sm border ${
          project.status.includes("Active") ? "border-green-500/30 text-green-400" : 
          project.status.includes("Closed") ? "border-red-500/30 text-red-400" : 
          "border-yellow-500/30 text-yellow-400"
        }`}>
          {project.status.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
        {project.description}
      </p>

      <div className="flex gap-3 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-white/50 font-mono">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardContent}
    </a>
  ) : (
    <div className="h-full">
      {CardContent}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="cases" className="py-32 px-4 bg-detective-blue/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end gap-4"
        >
          <h2 className="text-4xl font-bold text-white tracking-tighter">CASE FILES</h2>
          <div className="h-[1px] flex-grow bg-white/10 mb-2"></div>
          <span className="text-gray-500 font-mono text-sm">CONFIDENTIAL</span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <CaseCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
