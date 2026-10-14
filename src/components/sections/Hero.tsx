import { Suspense, lazy } from "react";
import { TypeAnimation } from "react-type-animation";
import { heroSocials } from "../../data/contact";
import AuroraBackground from "../../components/ui/AuroraBackground";
import { motion } from "framer-motion";
import fotoDepan from "../../assets/images/foto-hamas1.webp";
import fotoBelakang from "../../assets/images/foto-hamas2.webp";

const Lanyard = lazy(() => import("../reactbits/Lanyard"));
const LightRays = lazy(() => import("../reactbits/LightRays"));

const Hero = () => {
    return (
        <section
            id="home"
            className="
    relative
    flex
    min-h-screen
    items-center
    overflow-hidden
    pt-24
    pb-16
    lg:pt-10
"
        >

            <AuroraBackground />
            <div
                className="absolute inset-0"
                style={{ pointerEvents: "none" }}
            >
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00F5C3"
                    raysSpeed={0.8}
                    lightSpread={0.55}
                    rayLength={2.5}
                    followMouse={true}
                    mouseInfluence={0.08}
                    noiseAmount={0.05}
                    distortion={0.05}
                    fadeDistance={1.3}
                    saturation={1}
                />
            </div>
            <div
                className="
  absolute
  inset-0
  bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
  bg-size-[60px_60px]
  opacity-30
"
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="
relative
z-20
mx-auto
grid
w-full
max-w-7xl
grid-cols-1
items-center
gap-10
px-6
md:px-10
lg:grid-cols-[1.1fr_.9fr]
lg:gap-16
"
            >



                {/* LEFT */}

                <div
                    className="
max-w-2xl
text-center
lg:text-left
mx-auto
lg:mx-0
"
                >

                    <p className="
mb-4
uppercase
tracking-[5px]
md:tracking-[8px]
text-sm
md:text-base
text-zinc-400
">
                        Halo, Saya
                    </p>

                    <h1 className="
text-5xl
sm:text-6xl
md:text-7xl
xl:text-8xl
font-black
leading-none
text-white
">
                        Hamas
                    </h1>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-none text-white">
                        Izzuddin
                    </h1>

                    <div className="mb-8 h-12">

                        <TypeAnimation
                            sequence={[
                                "Web Developer",
                                2000,
                                "UI/UX Designer",
                                2000,
                                "Frontend Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className="
text-xl
sm:text-2xl
md:text-3xl
font-semibold
text-[#00F5C3]
"
                        />

                    </div>

                    <p className="max-w-xl text-lg leading-8 text-zinc-400">

                    </p>

                    <div
                        className="
mt-10
flex
flex-col
sm:flex-row
items-center
justify-center
lg:justify-start
gap-4
"
                    >

                        <button
                            onClick={() => {
                                document
                                    .getElementById("portfolio")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                            className="
w-full
sm:w-auto
rounded-full
bg-[#00F5C3]
px-8
py-4
font-semibold
text-black
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_40px_rgba(0,245,195,.45)]
"
                        >
                            Explore Project →
                        </button>

                        <button
                            onClick={() => {
                                window.open(
                                    "https://wa.me/6282136239721",
                                    "_blank"
                                );
                            }}
                            className="
                            w-full sm:w-auto
        rounded-full
        border
        border-zinc-700
        bg-zinc-900
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:border-[#00F5C3]
        hover:bg-[#00F5C3]
        hover:text-black
        hover:shadow-[0_0_30px_rgba(0,245,195,.35)]
    "
                        >
                            Kontak Saya
                        </button>

                    </div>

                    <p className="mt-10 mb-4 text-sm uppercase tracking-[4px] text-zinc-500">
                        Connect With Me
                    </p>

                    <div
                        className="
flex
justify-center
lg:justify-start
items-center
gap-4
flex-wrap
"
                    >
                        {heroSocials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-zinc-700
                bg-zinc-900/60
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#00F5C3]
                hover:bg-[#00F5C3]
                hover:text-black
                hover:shadow-[0_0_25px_rgba(0,245,195,.35)]
                "
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                    
                </div>





                {/* RIGHT */}

                <div
                    className="
order-first
lg:order-last
flex
items-center
justify-center
mb-8
lg:mb-0
lg:-ml-16
"
                >

                    <div
                        className="
relative
w-full
h-[380px]
sm:h-[450px]
md:h-[550px]
lg:h-[650px]
"
                    >

                        <Suspense
                            fallback={
                                <div className="flex h-full w-full items-center justify-center">
                                    <img
                                        src={fotoDepan}
                                        alt="Kartu profil Hamas"
                                        className="
                                        w-52
                                        sm:w-60
                                        rotate-6
                                        rounded-2xl
                                        border
                                        border-zinc-800
                                        object-cover
                                        shadow-[0_30px_80px_rgba(0,0,0,.6)]
                                        "
                                    />
                                </div>
                            }
                        >
                            <Lanyard
                                position={[0, 0, 17]}
                                fov={17}
                                frontImage={fotoDepan}
                                backImage={fotoBelakang}
                                imageFit="cover"
                            />
                        </Suspense>

                    </div>

                </div>

            </motion.div>
        </section>
    );
};

export default Hero;