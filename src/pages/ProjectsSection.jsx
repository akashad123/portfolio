import { portfolioData } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import ProjectModal from "../components/ProjectModal";

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const { personal } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#f6f6f6]">
        <div className="absolute top-20 left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gray-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <section
        ref={sectionRef}
        id="projects"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="
          relative z-40
          px-4 sm:px-6 md:px-12 lg:px-24
          py-8 sm:py-10 md:py-12 lg:py-16
          overflow-hidden
          min-h-0 md:min-h-0 lg:min-h-0 xl:min-h-screen
        "
      >
  
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  </div>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
            >
              Latest <span className="text-gray-500">Works</span>
            </motion.h2>
          </motion.div>

          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center mt-4 sm:mt-6 lg:mt-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 300 : -300,
                  scale: 0.8,
                  rotateY: direction > 0 ? 45 : -45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotateY: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -300 : 300,
                  scale: 0.8,
                  rotateY: direction > 0 ? -45 : 45,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6,
                }}
                className="absolute w-full max-w-[400px] sm:max-w-[350px] md:max-w-[600px] lg:max-w-md cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActiveProject(projects[currentIndex])}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-shadow">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <motion.img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      {projects[currentIndex].type || "Featured"}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <motion.h3
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {projects[currentIndex].title}
                    </motion.h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">
                      {projects[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {projects[currentIndex].tech?.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      Click to view details →
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              onClick={handlePrev}
              className="absolute left-0 top-0 w-1/3 h-full cursor-pointer z-10 group"
            >
              <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl lg:text-2xl">←</span>
              </div>
            </div>

            <div
              onClick={handleNext}
              className="absolute right-0 top-0 w-1/3 h-full cursor-pointer z-10 group"
            >
              <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl lg:text-2xl">→</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-black"
                    : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 sm:mt-8 lg:mt-10 pb-4 sm:pb-6"
          >
            <a
              href={personal.github}
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 font-medium hover:text-black transition-colors group"
            >
              View More Projects
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        close={() => setActiveProject(null)}
      />
    </>
  );
};

export default ProjectsSection;