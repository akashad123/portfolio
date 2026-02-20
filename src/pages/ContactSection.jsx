import { portfolioData } from "../data/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const { personal } = portfolioData;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1, 1]);
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative bg-[#f5f5f5] py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div 
        style={{ y: bgY, rotate: bgRotate }}
        className="absolute top-20 left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute bottom-20 right-10 w-60 h-60 bg-gray-400/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="
          relative z-10
          max-w-5xl mx-auto
          text-center
          rounded-2xl sm:rounded-3xl
          bg-white/90 backdrop-blur-sm
          shadow-xl
          py-12 sm:py-16 lg:py-20
          px-4 sm:px-6 lg:px-10
        "
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6"
        >
          Got a Vision? Let's Bring It to Life!
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2"
        >
          I'm always excited to collaborate on new and innovative projects.
          Whether you're starting from scratch or refining an idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={`mailto:${personal.email}`}
            className="
              inline-block
              px-6 sm:px-8 lg:px-10
              py-2 sm:py-3
              rounded-xl
              bg-black text-white
              hover:scale-105
              transition
              font-medium
              text-sm sm:text-base
            "
          >
            Book A Call ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;