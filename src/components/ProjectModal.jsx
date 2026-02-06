import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, close }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
      
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl"
          >
        
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

          
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                className="px-6 py-2 bg-black text-white rounded-lg"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="px-6 py-2 border border-black rounded-lg"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
