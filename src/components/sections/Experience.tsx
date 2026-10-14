import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "../../data/experience";
import ExperienceCard from "../ui/ExperienceCard";
import SectionBackground from "../ui/SectionBackground";

const VISIBLE_COUNT = 3;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll
    ? experiences
    : experiences.slice(0, VISIBLE_COUNT);

  const hiddenCount = experiences.length - VISIBLE_COUNT;

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 md:py-28 px-5 sm:px-6"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          <span className="text-[#00F5C3]">Experience</span>
        </motion.h2>

        <p className="text-center text-zinc-400 mt-4">
          Professional experience and My Organization.
        </p>

        <div className="mt-16 space-y-8">

          <AnimatePresence initial={false} mode="popLayout">

            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.25 } }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay:
                    index < VISIBLE_COUNT
                      ? index * 0.12
                      : (index - VISIBLE_COUNT + 1) * 0.1,
                }}
              >
                <ExperienceCard experience={exp} />
              </motion.div>
            ))}

          </AnimatePresence>

        </div>

        {experiences.length > VISIBLE_COUNT && (
          <div className="mt-14 flex flex-col items-center gap-4">

            <button
              onClick={() => setShowAll(!showAll)}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#00F5C3]/50
                bg-[#00F5C3]/5
                px-8
                py-4
                font-semibold
                text-[#00F5C3]
                transition-all
                duration-300
                hover:bg-[#00F5C3]
                hover:text-black
                hover:shadow-[0_0_35px_rgba(0,245,195,.35)]
              "
            >
              {showAll
                ? "Tampilkan Lebih Sedikit"
                : `Lihat ${hiddenCount} Pengalaman Lainnya`}

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${showAll ? "rotate-180" : ""}
                  group-hover:translate-y-0.5
                `}
              />
            </button>

            <p className="text-xs uppercase tracking-[3px] text-zinc-500">
              Menampilkan {visibleExperiences.length} dari {experiences.length} pengalaman
            </p>

          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
