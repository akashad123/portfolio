import { portfolioData } from "../data/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/about2.png";

const AboutSection = () => {
  const { about } = portfolioData;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const aboutY = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ 
        y: aboutY,
        opacity
      }}
      id="about"
      className="
        relative z-20
        bg-white
        min-h-0 md:min-h-0 lg:min-h-0 xl:min-h-screen
        px-4 sm:px-6 md:px-12 lg:px-24
        py-12 sm:py-16 md:py-20
        rounded-t-[40px] sm:rounded-t-[60px]
        shadow-[0_-40px_100px_rgba(0,0,0,0.1)]
      "
    >
      <div className="absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
      
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 order-1 lg:order-none w-full"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">About Me</h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{about.description}</p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{about.experience}</p>
          <p className="text-sm sm:text-base text-gray-500 italic">{about.philosophy}</p>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          className="flex justify-center order-2 lg:order-none w-full"
        >
          <motion.img
            src={img1}
            alt="about"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[620px] rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 lg:space-y-10 order-3 lg:order-none w-full"
        >
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl text-center bg-white shadow-xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">120%</h3>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
              Productivity Growth in projects
            </p>
          </div>

          <Bullet text="1+ year experience building React applications for real-world users." />
          <Bullet text="Focused on clean UI/UX, performance optimization, and scalable code." />
          <Bullet text="Strong in React, Tailwind, Node, MongoDB & modern web stacks." />
          <Bullet text="Passionate about continuous learning and impactful solutions." />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Bullet = ({ text }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex gap-3 sm:gap-4 items-start"
  >
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
      +
    </div>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{text}</p>
  </motion.div>
);

export default AboutSection;