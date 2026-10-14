import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
        h-[420px]
        w-[420px]
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
        h-[440px]
        w-[440px]
        rounded-full
        bg-violet-500/15
        blur-[200px]
      "
      />

      {/* Emerald accent */}

      <motion.div
        animate={{
          x: [0, 90, 0],
          y: [40, -30, 40],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        left-1/3
        top-1/2
        h-[380px]
        w-[380px]
        rounded-full
        bg-emerald-500/10
        blur-[190px]
      "
      />
    </div>
  );
};

export default AuroraBackground;
