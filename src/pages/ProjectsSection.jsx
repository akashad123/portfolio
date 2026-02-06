import { portfolioData } from "../data/portfolioData";
import { useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const { personal } = portfolioData;
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1500], [0, -150]);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-[#f6f6f6] px-10 md:px-24 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">Latest Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        <div className="text-center mt-14 text-gray-600 font-medium">
          <a href={personal.github}>View More →</a>
        </div>
      </div>
      <ProjectModal
        project={activeProject}
        close={() => setActiveProject(null)}
      />
    </section>
  );
};

/* ---------- Card ---------- */

import { motion, useMotionValue, useSpring } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotX = ((y - midY) / midY) * -15;
    const rotY = ((x - midX) / midX) * 15;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
      }}
      whileHover={{ scale: 1.04 }}
      className="
        cursor-pointer
        group
        relative
        rounded-2xl
        overflow-hidden
        bg-white
        shadow-md
        hover:shadow-2xl
        will-change-transform
      "
    >
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
        className="h-60 w-full object-cover grayscale"
      />

      <div className="p-6">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
