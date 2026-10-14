import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Layers,
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

const MetaContent = ({
  item,
}: {
  item: PortfolioItem;
}) => {
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

  const meta = [
    { icon: UserRound, label: "Role", value: item.role },
    { icon: Calendar, label: "Tahun", value: item.year },
    {
      icon: Layers,
      label: "Kategori",
      value: item.category === "project" ? "Proyek" : "Sertifikat",
    },
  ].filter((m) => Boolean(m.value));

  return (
    <div>

      {/* HEADER */}

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .15,
          duration: .5,
        }}
        className="px-8 pt-8 lg:px-10 lg:pt-9"
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
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#00F5C3]
          "
        >
          <Sparkles size={13} />
          Detail Proyek
        </span>

        <h3 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
          {item.title}
        </h3>

      </motion.div>

      {/* GALLERY */}

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .22,
          duration: .55,
        }}
        className="mt-7"
      >

        <div className="relative aspect-video w-full overflow-hidden bg-black">

          <AnimatePresence initial={false}>

            <motion.img
              key={active}
              src={gallery[active]}
              alt={`${item.title} — screenshot ${active + 1}`}
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .45,
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
            from-black/60
            via-transparent
            to-black/20
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
                left-4
                top-1/2
                z-10
                -translate-y-1/2
                rounded-full
                bg-black/60
                p-3
                text-white
                backdrop-blur-md
                transition
                hover:scale-110
                hover:bg-[#00F5C3]
                hover:text-black
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % gallery.length)}
                aria-label="Foto berikutnya"
                className="
                absolute
                right-4
                top-1/2
                z-10
                -translate-y-1/2
                rounded-full
                bg-black/60
                p-3
                text-white
                backdrop-blur-md
                transition
                hover:scale-110
                hover:bg-[#00F5C3]
                hover:text-black
                "
              >
                <ChevronRight size={20} />
              </button>

              <div
                className="
                absolute
                bottom-4
                right-4
                z-10
                rounded-full
                bg-black/60
                px-3.5
                py-1.5
                text-xs
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
            flex-wrap
            justify-center
            gap-3
            border-t
            border-zinc-800/70
            bg-[#0c0c0e]
            px-6
            py-4
            "
          >
            {gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Lihat screenshot ${i + 1}`}
                className={`
                h-16
                w-24
                overflow-hidden
                rounded-xl
                transition-all
                duration-300
                ${
                  i === active
                    ? "ring-2 ring-[#00F5C3] ring-offset-2 ring-offset-[#0c0c0e]"
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

      </motion.div>

      {/* BODY */}

      <div
        className="
        grid
        gap-10
        p-8
        lg:grid-cols-[1fr_300px]
        lg:p-10
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
            duration: .5,
          }}
        >

          <p className="leading-8 text-zinc-400">
            {item.overview ?? item.description}
          </p>

          {item.features && item.features.length > 0 && (

            <div className="mt-9">

              <h4
                className="
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#00F5C3]
                "
              >
                <Sparkles size={14} />
                Fitur Utama
              </h4>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: .4 + i * .06,
                      duration: .4,
                    }}
                    className="
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/50
                    p-4
                    transition
                    hover:border-[#00F5C3]/30
                    "
                  >
                    <span
                      className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#00F5C3]/15
                      text-[#00F5C3]
                      "
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <p className="text-sm leading-6 text-zinc-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

          )}

        </motion.div>

        <motion.aside
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .38,
            duration: .5,
          }}
        >

          <div
            className="
            h-fit
            rounded-[24px]
            border
            border-zinc-800
            bg-zinc-900/70
            p-6
            "
          >

            <h4
              className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-zinc-500
              "
            >
              Informasi
            </h4>

            <div className="mt-4 space-y-4">
              {meta.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <span
                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#00F5C3]/10
                    text-[#00F5C3]
                    "
                  >
                    <m.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-zinc-500">{m.label}</p>
                    <p className="text-sm font-medium text-zinc-200">
                      {m.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {item.tech.length > 0 && (

              <>
                <h4
                  className="
                  mt-7
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                  "
                >
                  Teknologi
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
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
              </>

            )}

            {(item.link || item.github) && (

              <div
                className="
                mt-7
                space-y-3
                border-t
                border-zinc-800
                pt-6
                "
              >

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#00F5C3]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_0_30px_rgba(0,245,195,.35)]
                    "
                  >
                    Kunjungi Proyek
                    <ArrowUpRight size={17} />
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-700
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-zinc-200
                    transition
                    hover:border-[#00F5C3]
                    hover:text-[#00F5C3]
                    "
                  >
                    <FaGithub size={16} />
                    Lihat GitHub
                  </a>
                )}

              </div>

            )}

          </div>

        </motion.aside>

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
                y: 48,
                scale: .95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 48,
                scale: .95,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
              relative
              my-auto
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[30px]
              border
              border-zinc-800
              bg-[#0c0c0e]
              shadow-[0_0_120px_rgba(0,245,195,.12)]
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
                via-[#00F5C3]/70
                to-transparent
                "
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail"
                className="
                absolute
                right-5
                top-5
                z-30
                rounded-full
                border
                border-zinc-700
                bg-black/60
                p-3
                text-zinc-400
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[#00F5C3]
                hover:text-[#00F5C3]
                "
              >
                <X size={20} />
              </button>

              <MetaContent item={item} />

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>,
    document.body
  );
};

export default ProjectDetailModal;
