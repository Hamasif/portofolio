import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import ExperienceCard from "../ui/ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-5xl font-bold text-center"
        >
          <span className="text-[#00F5C3]">Experience</span>
        </motion.h2>

        <p className="text-center text-zinc-400 mt-4">
          Professional experience and My Organization.
        </p>

        <div className="mt-16 space-y-8">
          {experiences.map((exp,index)=>(
            <ExperienceCard
              key={index}
              experience={exp}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;