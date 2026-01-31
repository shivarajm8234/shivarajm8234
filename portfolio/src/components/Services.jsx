import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass-card p-8 group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-hollow-purple to-six-eyes opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-six-eyes transition-colors">
      {service.title}
    </h3>
    
    <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-white/5 pb-6">
      {service.description}
    </p>

    <ul className="space-y-2">
      {service.items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-hollow-purple/50 group-hover:bg-hollow-purple" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-hollow-purple font-mono text-sm tracking-widest uppercase mb-2 block">
            Cursed Techniques
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            INVESTIGATION SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
