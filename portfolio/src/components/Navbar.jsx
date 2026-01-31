import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 mix-blend-difference"
    >
      <div className="text-2xl font-bold tracking-tighter text-white font-mono">
        L.
      </div>
      <div className="flex gap-8 text-sm font-medium text-gray-400">
        {["Mindset", "Cases", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
