import { motion, useMotionValue, useSpring } from "framer-motion";

const SkillCard = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 10 });
  const springY = useSpring(y, { stiffness: 120, damping: 10 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.06,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
        relative p-6 rounded-2xl
        bg-white/70 backdrop-blur-md
        border border-white/40
        shadow-lg
        group
        overflow-hidden
        cursor-pointer
      "
    >
 
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="text-2xl mb-3">{skill.icon}</div>

      <p className="font-medium">{skill.name}</p>

      <div className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2 }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
