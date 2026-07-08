import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
};

const PortfolioCard = ({
  title,
  image,
  description,
  tech,
  link,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: .35,
      }}
      className="
      group
      overflow-hidden
      rounded-[30px]
      border
      border-zinc-800
      bg-zinc-900/60
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-[#00F5C3]/40
      hover:shadow-[0_0_60px_rgba(0,245,195,.12)]
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
          h-64
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div
          className="
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/20
          to-transparent
          "
        />

        {/* Hover Overlay */}

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          gap-4
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          "
        >

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
        rounded-full
        bg-black/70
        p-4
        backdrop-blur-lg
        transition
        hover:scale-110
        hover:bg-[#00F5C3]
        hover:text-black
    "
          >
            <ExternalLink size={20} />
          </a>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <ExternalLink
            size={18}
            className="
            text-zinc-500
            transition
            group-hover:text-[#00F5C3]
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
          />

        </div>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        {tech.length > 0 && (

          <div className="mt-6 flex flex-wrap gap-2">

            {tech.map((item) => (

              <span
                key={item}
                className="
                rounded-full
                border
                border-zinc-700
                bg-zinc-800/70
                px-3
                py-1
                text-sm
                text-[#00F5C3]
                "
              >
                {item}
              </span>

            ))}

          </div>

        )}

        <div className="mt-8">

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#00F5C3]
            px-6
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(0,245,195,.35)]
        "
          >
            Visit Project
            <ExternalLink size={18} />
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default PortfolioCard;