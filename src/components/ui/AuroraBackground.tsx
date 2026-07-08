import { motion } from "motion/react";

const AuroraBackground = () => {
  return (
    <>
      {/* Cyan */}

      <motion.div
        animate={{
          x: [-80, 60, -80],
          y: [-30, 40, -30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        -left-40
        top-10
        h-[125]
        w-[125]
        rounded-full
        bg-cyan-500/15
        blur-[180px]
      "
      />

      {/* Purple */}

      <motion.div
        animate={{
          x: [60, -50, 60],
          y: [30, -40, 30],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-0
        h-[125]
        w-[125]
        rounded-full
        bg-violet-500/15
        blur-[200px]
      "
      />
    </>
  );
};

export default AuroraBackground;