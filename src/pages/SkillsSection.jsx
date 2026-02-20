import { portfolioData } from "../data/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb, SiSass, SiStrapi } from "react-icons/si";

const getIcon = (name = "") => {
  const key = name.toLowerCase();

  if (key.includes("react")) return <FaReact />;
  if (key.includes("javascript") || key.includes("js")) return <FaJs />;
  if (key.includes("html")) return <FaHtml5 />;
  if (key.includes("css")) return <FaCss3Alt />;
  if (key.includes("tailwind")) return <SiTailwindcss />;
  if (key.includes("node")) return <FaNodeJs />;
  if (key.includes("mongo")) return <SiMongodb />;
  if (key.includes("sass")) return <SiSass />;
  if (key.includes("bootstrap")) return <FaBootstrap />;
  if (key.includes("strapi")) return <SiStrapi />;
  if (key.includes("git")) return <FaGitAlt />;

  return <FaDatabase />;
};

const SkillsSection = () => {
  const { skills } = portfolioData;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      style={{ y: sectionY }}
      className="
        relative z-30
        min-h-screen
        px-4 sm:px-6 md:px-12 lg:px-24
        py-12 sm:py-16 md:py-20
        overflow-hidden
        bg-white
        rounded-t-[40px] sm:rounded-t-[60px]
        shadow-[0_-30px_80px_rgba(0,0,0,0.12)]
      "
    >
      <div
        className="
          absolute inset-0 opacity-20
          bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]
          bg-[size:22px_22px]
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-12 lg:mb-20"
        >
          Technical <span className="text-gray-500">Skills</span>
        </motion.h2>

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          <SkillCategory title="Frontend" items={skills.frontend} />
          <SkillCategory title="Backend" items={skills.backend} />
          <SkillCategory title="Databases" items={skills.databases} />
          <SkillCategory title="Tools" items={skills.tools} />
        </div>
      </div>
    </motion.section>
  );
};

const SkillCategory = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-gray-700">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {items.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        p-4 sm:p-6
        rounded-xl
        bg-white
        border border-gray-200
        shadow-md
      "
    >
      <div className="flex justify-between items-center mb-3 font-medium">
        <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
          <span className="text-black text-lg sm:text-xl">{getIcon(skill.name)}</span>
          <span className="text-sm sm:text-base">{skill.name}</span>
        </div>

        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
      </div>

      <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillsSection;