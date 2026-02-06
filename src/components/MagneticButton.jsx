import { useRef } from "react";

const MagneticButton = ({
  children,
  className = "",
  strength = 0.35,
  ...props
}) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        transition-transform duration-200 ease-out
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
