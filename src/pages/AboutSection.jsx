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

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative z-10
        min-h-screen
        px-10 md:px-24
        py-8 md:py-10
        bg-[#f7f7f7]
        flex items-center
        overflow-hidden
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold tracking-tight">About Me</h2>

          <p className="text-gray-600 leading-relaxed">{about.description}</p>

          <p className="text-gray-600 leading-relaxed">{about.experience}</p>

          <p className="text-gray-500 italic">{about.philosophy}</p>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src={img1}
            alt="about"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="
              w-full
              max-w-[620px]
              rounded-3xl
              shadow-2xl
              object-cover
              will-change-transform
            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.div
            whileHover={{ y: -6 }}
            className="
              p-10
              rounded-3xl
              text-center
              bg-white/70
              backdrop-blur-md
              shadow-xl
            "
          >
            <h3 className="text-5xl font-bold">120%</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Productivity Growth in projects
            </p>
          </motion.div>

          <Bullet text="1+ year experience building React applications for real-world users." />
          <Bullet text="Focused on clean UI/UX, performance optimization, and scalable code." />
          <Bullet text="Strong in React, Tailwind, Node, MongoDB & modern web stacks." />
          <Bullet text="Passionate about continuous learning and impactful solutions." />
        </motion.div>
      </div>
    </section>
  );
};

const Bullet = ({ text }) => (
  <motion.div whileHover={{ x: 4 }} className="flex gap-4 items-start">
    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs">
      +
    </div>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </motion.div>
);

export default AboutSection;
