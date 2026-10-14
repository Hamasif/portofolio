import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ProfileCard from "../reactbits/ProfileCard";
import iconPattern from "../../assets/images/iconpattern.webp";
import grain from "../../assets/images/grain.webp";
import aboutImage from "../../assets/images/about1-hamas.webp";
import cvFile from "../../assets/cv/cv.pdf";
import SectionBackground from "../ui/SectionBackground";

const About = () => {

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = cvFile;
        link.download = "CV_Hamas_Izzuddin.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="about"
            className="
relative
overflow-hidden
py-20
md:py-28
lg:py-32
"
        >
            <SectionBackground />

            <div
                className="
relative
z-10
mx-auto
max-w-7xl
px-5
sm:px-6
lg:px-10
"
            >

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16 text-center"
                >
                    <h2
                        className="
text-3xl
sm:text-4xl
lg:text-5xl
font-black
text-white
"
                    >
                        About <span className="text-[#00F5C3]">Me</span>
                    </h2>

                    <p
                        className="
mt-4
text-base
md:text-lg
text-zinc-400
italic
"
                    >
                        Get to know me better
                    </p>
                </motion.div>

                {/* Main Card */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: .96,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: .8,
                    }}
                    viewport={{
                        once: true,
                        amount: .3,
                    }}
                    className="
relative
overflow-hidden
rounded-3xl
lg:rounded-[36px]
border
border-zinc-800
bg-zinc-900/50
backdrop-blur-xl
shadow-[0_0_0_1px_rgba(255,255,255,.05),0_25px_80px_rgba(0,0,0,.45)]
"
                >

                    <div
                        className="
grid
items-center
gap-10
p-6
md:p-10
lg:grid-cols-[380px_1fr]
lg:gap-16
"
                    >

                        {/* FOTO */}

                        <div className="flex justify-center lg:justify-start">

                            <ProfileCard
                                avatarUrl={aboutImage}
                                iconUrl={iconPattern}
                                grainUrl={grain}
                                name="Hamas Izzuddin"
                                title="Web Developer"
                                showUserInfo={false}
                                enableTilt
                            />

                        </div>
                        {/* CONTENT */}

                        <div
                            className="
text-center
lg:text-left
"
                        >


                            <p className="
mt-6
text-base
md:text-lg
leading-8
text-zinc-400
">
                                I am a Full Stack Web Developer passionate about Frontend Development and UI/UX Design. I specialize in creating modern, responsive, and user-friendly web applications that deliver both exceptional performance and intuitive user experiences. By combining technical expertise with a design-oriented mindset, I aim to build digital products that are not only functional but also engaging and meaningful for users.
                            </p>

                            {/* Divider */}

                            <div className="my-10 h-px bg-zinc-800" />

                            {/* Statistics */}

                            <div
                                className="
grid
grid-cols-1
sm:grid-cols-3
gap-8
text-center
lg:text-left
"
                            >

                                <div>

                                    <h4 className="
text-4xl
md:text-5xl
lg:text-6xl
font-black
text-[#00F5C3]
">
                                        1+
                                    </h4>

                                    <p className="
mt-2
text-xs
md:text-sm
uppercase
tracking-[2px]
md:tracking-[3px]
text-zinc-500
">
                                        Tahun Pengalaman
                                    </p>

                                </div>

                                <div>

                                    <h4 className="
text-4xl
md:text-5xl
lg:text-6xl
font-black
text-[#00F5C3]
">
                                        15+
                                    </h4>

                                    <p className="
mt-2
text-xs
md:text-sm
uppercase
tracking-[2px]
md:tracking-[3px]
text-zinc-500
">
                                        Project Selesai
                                    </p>

                                </div>

                                <div>

                                    <h4 className="
text-4xl
md:text-5xl
lg:text-6xl
font-black
text-[#00F5C3]
">
                                        8+
                                    </h4>

                                    <p className="
mt-2
text-xs
md:text-sm
uppercase
tracking-[2px]
md:tracking-[3px]
text-zinc-500
">
                                        Sertifikat
                                    </p>

                                </div>

                            </div>

                            {/* Divider */}

                            <div className="my-10 h-px bg-zinc-800" />

                            {/* Button */}

                            <button
                                onClick={downloadCV}
                                className="
group
flex
w-full
sm:w-auto
items-center
justify-center
gap-3
rounded-full
border
border-[#00F5C3]
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
                                Download CV

                                <Download
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                                />

                            </button>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default About;