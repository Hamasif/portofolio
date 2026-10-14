import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { PortfolioItem } from "../../data/portfolio";

type Props = {
  item: PortfolioItem | null;
  onClose: () => void;
};

const ModalBody = ({ item }: { item: PortfolioItem }) => {
  const gallery =
    item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (gallery.length < 2) return;
      if (e.key === "ArrowRight")
        setActive((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gallery.length]);

  const metaChips = [
    { icon: UserRound, value: item.role },
    { icon: Calendar, value: item.year },
  ].filter((m) => Boolean(m.value));

  return (
    <div className="flex flex-col lg:h-[600px] lg:flex-row">

      {/* LEFT — GALLERY */}

      <div className="relative flex shrink-0 flex-col bg-black lg:w-[54%]">

        <div
          className="
          relative
          aspect-video
          w-full
          overflow-hidden
          lg:aspect-auto
          lg:min-h-0
          lg:flex-1
          "
        >

          <AnimatePresence initial={false}>

            <motion.img
              key={active}
              src={gallery[active]}
              alt={`${item.title} — screenshot ${active + 1}`}
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .4,
                ease: "easeOut",
              }}
              className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              "
            />

          </AnimatePresence>

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-black/50
            via-transparent
            to-transparent
            "
          />

          {gallery.length > 1 && (

            <>
              <button
                type="button"
                onClick={() =>
                  setActive((i) => (i - 1 + gallery.length) % gallery.length)
                }
                aria-label="Foto sebelumnya"
                className="
                absolute
                left-3
                top-1/2
                z-10
                -translate-y-1/2
                rounded-full
                bg-black/60
                p-2.5
                text-white
                backdrop-blur-md
                transition
                hover:scale-110
                hover:bg-[#00F5C3]
                hover:text-black
                "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % gallery.length)}
                aria-label="Foto berikutnya"
                className="
                absolute
                right-3
                top-1/2
                z-10
                -translate-y-1/2
                rounded-full
                bg-black/60
                p-2.5
                text-white
                backdrop-blur-md
                transition
                hover:scale-110
                hover:bg-[#00F5C3]
                hover:text-black
                "
              >
                <ChevronRight size={18} />
              </button>

              <div
                className="
                absolute
                bottom-3
                right-3
                z-10
                rounded-full
                bg-black/60
                px-3
                py-1
                text-[11px]
                font-semibold
                text-white
                backdrop-blur-md
                "
              >
                {active + 1} / {gallery.length}
              </div>
            </>

          )}

        </div>

        {gallery.length > 1 && (

          <div
            className="
          flex
          gap-2.5
          border-t
          border-zinc-800/70
          p-3
          "
          >
            {gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Lihat screenshot ${i + 1}`}
                className={`
                h-14
                w-20
                shrink-0
                overflow-hidden
                rounded-lg
                transition-all
                duration-300
                ${
                  i === active
                    ? "ring-2 ring-[#00F5C3] ring-offset-1 ring-offset-black"
                    : "opacity-40 hover:opacity-80"
                }
                `}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

        )}

      </div>

      {/* RIGHT — INFO */}

      <div className="flex min-h-0 flex-1 flex-col">

        <div
          className="
          min-h-0
          flex-1
          overflow-y-auto
          p-6
          lg:p-8
          "
        >

        <span
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#00F5C3]/30
          bg-[#00F5C3]/10
          px-3.5
          py-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#00F5C3]
          "
        >
          <Sparkles size={12} />
          Detail Proyek
        </span>

        <h3 className="mt-3.5 text-2xl font-bold text-white lg:text-[28px]">
          {item.title}
        </h3>

        {metaChips.length > 0 && (

          <div className="mt-4 flex flex-wrap gap-2">
            {metaChips.map((m) => (
              <span
                key={m.value}
                className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-zinc-800
                bg-zinc-900/70
                px-3
                py-1.5
                text-xs
                text-zinc-300
                "
              >
                <m.icon size={13} className="text-[#00F5C3]" />
                {m.value}
              </span>
            ))}
          </div>

        )}

        <p
          className="
          mt-5
          text-sm
          leading-7
          text-zinc-400
          "
        >
          {item.overview ?? item.description}
        </p>

        {item.features && item.features.length > 0 && (

          <div className="mt-7">

            <h4
              className="
              flex
              items-center
              gap-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#00F5C3]
              "
            >
              <Sparkles size={13} />
              Fitur Utama
            </h4>

            <ul className="mt-3.5 space-y-2.5">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="
                    mt-0.5
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00F5C3]/15
                    text-[#00F5C3]
                    "
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-6 text-zinc-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        )}

        {item.tech.length > 0 && (

          <div className="mt-7">

            <h4
              className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-zinc-500
              "
            >
              Teknologi
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-800/70
                  px-3
                  py-1
                  text-xs
                  text-[#00F5C3]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

        )}

        </div>

        {(item.link || item.github) && (

          <div
            className="
            flex
            shrink-0
            gap-3
            border-t
            border-zinc-800
            bg-[#0c0c0e]
            px-6
            py-4
            lg:px-8
            "
          >

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#00F5C3]
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(0,245,195,.35)]
                "
              >
                Kunjungi Proyek
                <ArrowUpRight size={16} />
              </a>
            )}

            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-200
                transition
                hover:border-[#00F5C3]
                hover:text-[#00F5C3]
                "
              >
                <FaGithub size={15} />
                GitHub
              </a>
            )}

          </div>

        )}

      </div>

    </div>
  );
};

const ProjectDetailModal = ({ item, onClose }: Props) => {
  useEffect(() => {
    if (!item) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [item, onClose]);

  return createPortal(
    <AnimatePresence>

      {item && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: .25,
          }}
          onClick={onClose}
          className="
          fixed
          inset-0
          z-[100]
          overflow-y-auto
          bg-black/80
          backdrop-blur-md
          "
        >

          <div
            className="
            flex
            min-h-full
            items-center
            justify-center
            p-4
            lg:p-8
            "
          >

            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{
                opacity: 0,
                y: 40,
                scale: .96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: .96,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
              relative
              my-auto
              w-full
              max-w-4xl
              overflow-hidden
              rounded-[28px]
              border
              border-zinc-800
              bg-[#0c0c0e]
              shadow-[0_0_100px_rgba(0,245,195,.1)]
              "
            >

              <div
                className="
                absolute
                inset-x-0
                top-0
                z-20
                h-px
                bg-linear-to-r
                from-transparent
                via-[#00F5C3]/60
                to-transparent
                "
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail"
                className="
                absolute
                right-4
                top-4
                z-30
                rounded-full
                border
                border-zinc-700
                bg-black/60
                p-2.5
                text-zinc-400
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[#00F5C3]
                hover:text-[#00F5C3]
                "
              >
                <X size={18} />
              </button>

              <ModalBody key={item.id} item={item} />

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>,
    document.body
  );
};

export default ProjectDetailModal;
