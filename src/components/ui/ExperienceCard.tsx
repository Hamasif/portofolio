type Experience = {
    logo: string;
    position: string;
    company: string;
    period: string;
    location: string;
    descriptions: string[];
    technologies: string[];
};

type Props = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
    return (
        <div
            className="
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-lg
      p-8
      hover:border-[#00F5C3]/40
      transition-all
      "
        >
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-5">

                    <div className="
            h-18
            w-18
            rounded-2xl
            bg-white
            p-3
            shadow-lg
            flex
            items-center
            justify-center
            shrink-0
        ">
                        <img
                            src={experience.logo}
                            alt={experience.company}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {experience.position}
                        </h3>

                        <p className="mt-1 text-lg font-medium text-[#00F5C3]">
                            {experience.company}
                        </p>
                    </div>

                </div>

                <div className="text-sm text-zinc-400 md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                </div>
            </div>

            {/* Description */}

            <div className="grid md:grid-cols-2 gap-4 mt-8">

                {experience.descriptions.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-3"
                    >
                        <div className="mt-2 h-2 w-2 rounded-full bg-[#00F5C3]" />

                        <p className="text-zinc-300">
                            {item}
                        </p>

                    </div>
                ))}

            </div>

            {/* Tech */}

            <div className="mt-8">

                <p className="uppercase text-xs tracking-widest text-zinc-500 mb-3">
                    Technologies Used
                </p>

                <div className="flex flex-wrap gap-3">

                    {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="
              rounded-full
              px-4
              py-2
              bg-white/10
              text-sm
              "
                        >
                            {tech}
                        </span>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default ExperienceCard;