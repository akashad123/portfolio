import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full
        z-[9999]
        py-3 sm:py-4
        px-4 sm:px-6 md:px-12 lg:px-24
        transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-base sm:text-xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
          Akash AD
        </div>
        
        <div className="hidden md:flex gap-6 lg:gap-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-sm lg:text-base text-gray-600 hover:text-black transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;