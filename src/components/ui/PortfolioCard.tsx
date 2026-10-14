import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import type { PortfolioItem } from "../../data/portfolio";

type Props = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
};

const PortfolioCard = ({ item, onOpen }: Props) => {
  const { title, image, description, tech, link } = item;

  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: .35,
      }}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen(item);
      }}
      className="
      group
      cursor-pointer
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

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(item);
            }}
            aria-label="Lihat detail project"
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-black/70
            px-6
            py-3.5
            text-sm
            font-semibold
            text-white
            backdrop-blur-lg
            transition
            hover:scale-105
            hover:bg-[#00F5C3]
            hover:text-black
            "
          >
            <Maximize2 size={18} />
            Lihat Detail
          </button>

          {link && (

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Buka project"
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

          )}

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-5 sm:p-7">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <Maximize2
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

            {tech.map((t) => (

              <span
                key={t}
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
                {t}
              </span>

            ))}

          </div>

        )}

        <div className="mt-8">

          {link ? (

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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

          ) : (

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpen(item);
              }}
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
              Lihat Detail
              <Maximize2 size={18} />
            </button>

          )}

        </div>

      </div>

    </motion.div>
  );
};

export default PortfolioCard;