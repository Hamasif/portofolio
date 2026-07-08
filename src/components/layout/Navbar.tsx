import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navigation } from "../../data/navigation";
import useScroll from "../../hooks/useScroll";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const scrolled = useScroll();
    const active = useActiveSection();
    return (
        <header
            className={`
    fixed
    top-0
    left-0
    z-50
    w-full
    transition-all
    duration-500

    ${scrolled
                    ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                    : "bg-transparent"
                }
`}
        >
            <nav
                className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-5 md:px-8
transition-all
duration-500
"
            >
                {/* Logo */}

                <a
                    href="#home"
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    Hamas<span className="text-[#00F5C3]">.</span>
                </a>

                {/* Menu */}

                <ul className="hidden items-center gap-10 md:flex">
                    {navigation.map((item) => {

                        const isActive =
                            active === item.href.replace("#", "");

                        return (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={`
                    relative
                    px-1
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${isActive
                                            ? "text-white"
                                            : "text-zinc-400 hover:text-white"
                                        }
                `}
                                >
                                    {item.label}

                                    <span
                                        className={`
                        absolute
                        left-1/2
                        -bottom-2
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        rounded-full
                        bg-[#00F5C3]
                        transition-all
                        duration-300

                        ${isActive
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-0"
                                            }
                    `}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-3xl"
                >
                    {open ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>

                {/* Github */}

                <a
                    href="https://github.com/Hamasif"
                    target="_blank"
                    className="hidden rounded-full border border-zinc-700 px-5 py-2 text-sm text-white transition hover:border-[#00F5C3] hover:text-[#00F5C3] lg:block"
                >
                    Github
                </a>
            </nav>
            <div
                className={`
    md:hidden
    overflow-hidden
    transition-all
    duration-300
    ${open ? "max-h-500px" : "max-h-0"}
  `}
            >
                <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl">

                    <ul className="flex flex-col py-4">

                        {navigation.map((item) => {

                            const isActive = active === item.href.replace("#", "");

                            return (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`
                block
                px-6
                py-4
                text-base
                transition

                ${isActive
                                                ? "text-[#00F5C3]"
                                                : "text-zinc-300 hover:text-white"
                                            }
              `}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>

                    <div className="px-6 pb-6">
                        <a
                            href="https://github.com/Hamasif"
                            target="_blank"
                            className="
          block
          rounded-full
          border
          border-zinc-700
          py-3
          text-center
          text-white
          transition
          hover:border-[#00F5C3]
          hover:text-[#00F5C3]
        "
                        >
                            Github
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
};



export default Navbar;