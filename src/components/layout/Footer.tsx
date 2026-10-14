import { motion } from "framer-motion";

import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="
            relative
            overflow-hidden
            border-t
            border-zinc-800
            bg-black
            py-20
            "
        >

            {/* Glow */}

            <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[150px]" />

            <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-violet-500/10 blur-[150px]" />

            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">

                {/* LEFT */}

                <motion.div
                    initial={{
                        opacity:0,
                        y:40
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        duration:.6
                    }}
                    viewport={{
                        once:true
                    }}
                >

                    <h2 className="text-4xl font-black text-white">

                        H

                        <span className="text-[#00F5C3]">
                            .
                        </span>

                    </h2>

                    <p className="mt-5 leading-8 text-zinc-400">

                        Building modern web experiences
                        through clean code and thoughtful
                        design.

                    </p>

                    <div className="mt-8 flex gap-5">

                        <a
                            href="https://github.com/Hamasif"
                            target="_blank"
                            className="
                            text-2xl
                            text-zinc-400
                            transition
                            hover:text-[#00F5C3]
                            hover:scale-110
                            "
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            className="
                            text-2xl
                            text-zinc-400
                            transition
                            hover:text-[#00F5C3]
                            hover:scale-110
                            "
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            className="
                            text-2xl
                            text-zinc-400
                            transition
                            hover:text-[#00F5C3]
                            hover:scale-110
                            "
                        >
                            <FaInstagram />
                        </a>

                    </div>

                </motion.div>

                {/* CENTER */}

                <motion.div
                    initial={{
                        opacity:0,
                        y:40
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        delay:.15,
                        duration:.6
                    }}
                    viewport={{
                        once:true
                    }}
                >

                    <h3 className="mb-5 text-xl font-semibold text-white">

                        Quick Links

                    </h3>

                    <ul className="space-y-4">

                        <li>
                            <a
                                href="#home"
                                className="text-zinc-400 transition hover:text-[#00F5C3]"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="text-zinc-400 transition hover:text-[#00F5C3]"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experience"
                                className="text-zinc-400 transition hover:text-[#00F5C3]"
                            >
                                Experience
                            </a>
                        </li>

                        <li>
                            <a
                                href="#portfolio"
                                className="text-zinc-400 transition hover:text-[#00F5C3]"
                            >
                                Portfolio
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="text-zinc-400 transition hover:text-[#00F5C3]"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    initial={{
                        opacity:0,
                        y:40
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        delay:.3,
                        duration:.6
                    }}
                    viewport={{
                        once:true
                    }}
                >

                    <h3 className="mb-5 text-xl font-semibold text-white">

                        Favorite Stack

                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {
                            [
                                "React",
                                "Laravel",
                                "Tailwind",
                                "TypeScript",
                                "Oracle",
                                "Figma",
                            ].map((item)=>(
                                <span
                                    key={item}
                                    className="
                                    rounded-full
                                    border
                                    border-zinc-700
                                    bg-zinc-900
                                    px-4
                                    py-2
                                    text-sm
                                    text-zinc-300
                                    transition
                                    hover:border-[#00F5C3]
                                    hover:text-[#00F5C3]
                                    "
                                >
                                    {item}
                                </span>
                            ))
                        }

                    </div>

                </motion.div>

            </div>

            {/* Bottom */}

            <div className="mx-auto mt-20 max-w-7xl border-t border-zinc-800 pt-8 text-center">

                <p className="text-zinc-500">

                    © 2026 Hamas Izzuddin.

                    Built with React, TypeScript & Tailwind CSS.

                </p>

            </div>

        </footer>
    );
};

export default Footer;