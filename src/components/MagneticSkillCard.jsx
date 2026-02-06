import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticSkillCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.05 }}
      className="
        p-5
        rounded-xl
        text-center
        bg-white/70
        backdrop-blur-md
        border border-white/50
        shadow-md
        font-medium
        cursor-pointer
        transition
      "
    >
      {children}
    </motion.div>
  );
};

export default MagneticSkillCard;
