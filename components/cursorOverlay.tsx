import useMousePosition from "@/components/mousePosition/useMousePosition";
import { motion } from "framer-motion";

const CursorOverlay = () => {
  const { x, y } = useMousePosition();
  const size = 32;
  return (
    <motion.svg
      className="w-16 h-16 rounded-full backdrop-invert relative z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        x: x - size / 2,
        y: y - size / 2,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.35,
      }}
    ></motion.svg>
  );
};

export default CursorOverlay;
