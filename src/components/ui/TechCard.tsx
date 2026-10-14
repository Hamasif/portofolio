import { motion } from "framer-motion";

type Props = {
  image: string;
  name: string;
};

const TechCard = ({ image, name }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{
        duration: .3,
      }}
      className="
      group
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/70
      p-5
      sm:p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-[#00F5C3]
      hover:shadow-[0_0_40px_rgba(0,245,195,.2)]
      "
    >
      <img
        src={image}
        alt={name}
        className="
        mx-auto
        h-14
        w-14
        sm:h-16
        sm:w-16
        object-contain
        transition
        duration-300
        group-hover:rotate-6
        group-hover:scale-110
        "
      />

      <h3 className="mt-6 text-center font-semibold text-white">
        {name}
      </h3>
    </motion.div>
  );
};

export default TechCard;