import { motion } from "framer-motion";
import { techStack } from "../../data/tech";
import TechCard from "../ui/TechCard";

const TechSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="space-y-16"
    >
      {techStack.map((group, index) => (
        <div key={index}>
          <h2 className="mb-8 text-2xl font-bold text-white">
            {group.title}
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {group.items.map((item) => (
              <TechCard
                key={item.name}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TechSection;