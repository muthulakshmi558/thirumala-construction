import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-3.png";

const slides = [
  {
    image: hero1,
    small: "ECO-FRIENDLY SOLUTION",
    title: "Residential ",
    highlight: "Construction",
    last: "",
    description:
      "Individual houses, villas and modern residential buildings.",
  },

  {
    image: hero2,
    small: "STRONGER FOUNDATIONS",
    title: "Interior ",
    highlight: "Design",
    last: "",
    description:
      "Stylish and functional interiors for every part of your home.",
  },

  {
    image: hero3,
    small: "MODERN CONSTRUCTION",
    title: "Commercial ",
    highlight: "Construction",
    last: "",
    description:
      "Reliable construction for offices, shops and commercial spaces.",
  },

  {
    image: hero4,
    small: "BUILD WITH CONFIDENCE",
    title: "Renovation  ",
    highlight: "Remodeling",
    last: "",
    description:
      "Transform existing properties with modern designs and finishes.",
  },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">

      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="heroSwiper"
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            {/* HERO */}
            <div className="relative h-[500px] md:h-[540px] lg:h-[580px] overflow-hidden">

              {/* BACKGROUND IMAGE */}
              <motion.img
                src={slide.image}
                alt={slide.last}
                initial={{
                  scale: 1,
                }}
                animate={{
                  scale: 1.07,
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/90
                  via-black/55
                  to-black/10
                "
              />

              {/* EXTRA GRADIENT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10
                  max-w-7xl
                  mx-auto
                  px-5
                  md:px-8
                  h-full
                  flex
                  items-center
                "
              >

                {/* TEXT BOX */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    max-w-[520px]
                    bg-black/50
                    backdrop-blur-md
                    px-6
                    py-7
                    md:px-8
                    md:py-8
                    rounded-xl
                    border
                    border-white/15
                    shadow-2xl
                  "
                >

                  {/* SMALL TITLE */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="
                      text-cyan-400
                      font-semibold
                      tracking-[0.15em]
                      text-[11px]
                      md:text-xs
                    "
                  >
                    {slide.small}
                  </motion.p>


                  {/* MAIN HEADING */}
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                      mt-3
                      text-white
                      text-3xl
                      md:text-4xl
                      lg:text-[44px]
                      font-extrabold
                      leading-[1.08]
                    "
                  >

                    {slide.title}

                    <span className="block mt-2">

                      <span
                        className="
                          text-transparent
                          bg-clip-text
                          bg-gradient-to-r
                          from-pink-500
                          to-cyan-400
                        "
                      >
                        {slide.highlight}
                      </span>

                      {" "}

                      {slide.last}

                    </span>

                  </motion.h1>


                  {/* LINE */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: 90,
                    }}
                    transition={{
                      delay: 0.45,
                      duration: 0.7,
                    }}
                    className="
                      h-[3px]
                      mt-5
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      to-cyan-400
                    "
                  />


                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.55,
                    }}
                    className="
                      mt-5
                      text-gray-200
                      text-sm
                      md:text-[15px]
                      leading-6
                      max-w-[440px]
                    "
                  >

                    {slide.description}

                  </motion.p>


                  {/* BUTTON */}
                  <motion.a
                    href="#about"

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    whileHover={{
                      scale: 1.04,
                    }}

                    whileTap={{
                      scale: 0.95,
                    }}

                    transition={{
                      delay: 0.65,
                    }}

                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      px-5
                      py-3
                      rounded-lg
                      text-sm
                      text-white
                      font-semibold
                      bg-gradient-to-r
                      from-pink-600
                      via-pink-500
                      to-cyan-400
                      shadow-lg
                      hover:shadow-pink-500/30
                      transition-all
                      duration-300
                    "
                  >

                    Know More

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </motion.a>

                </motion.div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Hero;