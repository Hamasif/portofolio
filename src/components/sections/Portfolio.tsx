import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechSection from "../portfolio/TechSection";
import PortfolioTabs from "../ui/PortfolioTabs";
import PortfolioCard from "../ui/PortfolioCard";
import ProjectDetailModal from "../ui/ProjectDetailModal";

import { portfolioItems } from "../../data/portfolio";
import type { PortfolioItem } from "../../data/portfolio";
import SectionBackground from "../ui/SectionBackground";

const Portfolio = () => {
    const [active, setActive] = useState<
        "project" | "certificate" | "tech"
    >("project");
    const [selected, setSelected] = useState<PortfolioItem | null>(null);

    const filtered =
        active === "tech"
            ? []
            : portfolioItems.filter(
                (item) =>
                    item.category === active
            );

    return (
        <section
            id="portfolio"
            className="relative overflow-hidden py-20 md:py-32"
        >
            <SectionBackground />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-center"
                >

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Portfolio Showcase
                    </h2>

                    <p className="mt-5 text-zinc-400">
                        Explore my journey through projects,
                        certificates and technical expertise.
                    </p>

                </motion.div>

                <PortfolioTabs
                    active={active}
                    setActive={setActive}
                />

                <AnimatePresence mode="wait">

                    <motion.div
                        key={active}
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: .4,
                        }}
                        className="
mt-20
grid
gap-8
sm:grid-cols-2
xl:grid-cols-3
"
                    >

                        {active === "tech" ? (
                            <div className="col-span-full">
                                <TechSection />
                            </div>
                        ) : (
                            filtered.map((item) => (
                                <PortfolioCard
                                    key={item.id}
                                    item={item}
                                    onOpen={setSelected}
                                />
                            ))
                        )}

                    </motion.div>

                </AnimatePresence>

            </div>

            <ProjectDetailModal
                item={selected}
                onClose={() => setSelected(null)}
            />
        </section>

    );
};

export default Portfolio;