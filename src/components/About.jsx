import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  Leaf,
  Headphones,
  Phone,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import about1 from "../assets/House3.jpeg";
import about2 from "../assets/House6.jpeg";
import about3 from "../assets/interior4.jpeg";
import about4 from "../assets/House5.jpeg";

function About() {
  const features = [
    {
      icon: <Award size={25} />,
      title: "Premium Quality",
      text: "Best in class products",
      color: "pink",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Durable & Strong",
      text: "Built for long-lasting performance",
      color: "cyan",
    },
    {
      icon: <Leaf size={25} />,
      title: "Eco Friendly",
      text: "Sustainable materials for a better future",
      color: "pink",
    },
    {
      icon: <Headphones size={25} />,
      title: "Customer First",
      text: "Reliable support at every step",
      color: "cyan",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-white py-20 lg:py-24"
      >
        {/* Decorative Blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-pink-500" />

                <p className="text-sm font-bold tracking-wider text-pink-500">
                  WHO WE ARE
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
                WE DO  {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                  CONSTRUCTION
                </span>
              </h2>

                <h4 className="mt-4 text-4xl md:text-2xl font-black text-gray-900">
                WE ALSO SELL {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                  CONSTRUCTION MATERIALS
                </span>
              </h4>

              {/* Underline */}
              <div className="mt-5 flex">
                <div className="w-12 h-[3px] bg-pink-500 rounded-full" />
                <div className="w-12 h-[3px] bg-cyan-400 rounded-full" />
              </div>

              {/* Content */}
              <p className="mt-7 text-gray-600 leading-7 text-[15px]">
                From planning to final completion, we provide reliable construction solutions with quality materials, skilled workmanship and complete project support.
              </p>


              <p className="mt-5 text-gray-600 leading-7 text-[15px]">We build strong, modern and comfortable individual houses, villas and residential buildings based on your requirements and budget.</p>
              <p className="mt-5 text-gray-600 leading-7 text-[15px]">
                From fly ash bricks and solid blocks to essential building
                materials, our goal is to support residential and commercial
                construction with products designed for strength, efficiency
                and long-term performance.
              </p>
              {/* Features */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    className="group text-center"
                  >
                    <div
                      className={`
                        mx-auto
                        w-12 h-12
                        flex items-center justify-center
                        rounded-full
                        ${
                          item.color === "pink"
                            ? "bg-pink-50 text-pink-500"
                            : "bg-cyan-50 text-cyan-500"
                        }
                        group-hover:shadow-lg
                        transition-all
                        duration-300
                      `}
                    >
                      {item.icon}
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE GRID */}
{/* RIGHT IMAGE COLLAGE */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[520px]"
>
  {/* Decorative Dots */}
  <div className="absolute -top-4 right-2 grid grid-cols-5 gap-2 opacity-50 z-0">
    {Array.from({ length: 25 }).map((_, index) => (
      <span
        key={index}
        className="w-1.5 h-1.5 rounded-full bg-pink-500"
      />
    ))}
  </div>

  {/* Cyan Blur */}
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl" />

  {/* IMAGE 1 - Large */}
  <motion.div
    whileHover={{
      scale: 1.03,
      rotate: -1,
    }}
    transition={{ duration: 0.3 }}
    className="
      absolute
      left-0
      top-8
      w-[58%]
      h-[315px]
      rounded-[28px]
      overflow-hidden
      shadow-2xl
      border-4
      border-white
      z-10
      group
    "
  >
    <img
      src={about1}
      alt="Construction blocks"
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
  </motion.div>

  {/* IMAGE 2 - Top Right */}
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: 1,
    }}
    transition={{ duration: 0.3 }}
    className="
      absolute
      right-0
      top-0
      w-[39%]
      h-[225px]
      rounded-[24px]
      overflow-hidden
      shadow-xl
      border-4
      border-white
      z-20
      group
    "
  >
    <img
      src={about2}
      alt="Concrete rings"
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
  </motion.div>

  {/* IMAGE 3 - Bottom Right */}
  <motion.div
    whileHover={{
      scale: 1.04,
      rotate: -1,
    }}
    transition={{ duration: 0.3 }}
    className="
      absolute
      right-3
      bottom-5
      w-[47%]
      h-[255px]
      rounded-[26px]
      overflow-hidden
      shadow-2xl
      border-4
      border-white
      z-10
      group
    "
  >
    <img
      src={about3}
      alt="Construction materials"
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
  </motion.div>

  {/* IMAGE 4 - Floating Small */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.08,
      rotate: 2,
    }}
    transition={{ duration: 0.4 }}
    className="
      absolute
      left-[10%]
      bottom-0
      w-[32%]
      h-[165px]
      rounded-[22px]
      overflow-hidden
      shadow-2xl
      border-4
      border-white
      z-30
      group
    "
  >
    <img
      src={about4}
      alt="Fly ash bricks"
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    <div
      className="
        absolute inset-0
        bg-gradient-to-tr
        from-pink-500/20
        via-transparent
        to-cyan-400/20
        opacity-0
        group-hover:opacity-100
        transition duration-300
      "
    />
  </motion.div>

  {/* Center Decorative Badge */}
  <motion.div
    animate={{
      y: [0, -7, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-[49%]
      top-[50%]
      -translate-x-1/2
      -translate-y-1/2
      z-40
      w-16
      h-16
      rounded-full
      bg-white
      shadow-xl
      border
      border-gray-100
      flex
      items-center
      justify-center
    "
  >
    <div
      className="
        w-11
        h-11
        rounded-full
        bg-gradient-to-br
        from-pink-500
        to-cyan-400
        flex
        items-center
        justify-center
        text-white
        font-black
        text-sm
      "
    >
      TC
    </div>
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>

      <CallSection />
    </>
  );
}

function ImageCard({ src, className }) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className={`
        group
        relative
        overflow-hidden
        h-[210px]
        md:h-[250px]
        ${className}
      `}
    >
      <img
        src={src}
        alt="Thirumala Construction"
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
        "
      />
    </motion.div>
  );
}

function CallSection() {
  return (
    <section className="px-4 md:px-8 pb-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          overflow-hidden
          max-w-7xl
          mx-auto
          rounded-[28px]
          bg-[#101923]
          px-6
          py-10
          md:px-10
          lg:px-14
          lg:py-12
        "
      >

        {/* Background Decoration */}
        <div
          className="
            absolute
            -left-20
            -bottom-32
            w-96
            h-96
            border
            border-pink-500/10
            rounded-full
          "
        />

        <div
          className="
            absolute
            -right-20
            -top-32
            w-96
            h-96
            bg-cyan-500/5
            rounded-full
            blur-3xl
          "
        />

        <div className="relative grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-pink-500" />

              <p className="text-sm font-semibold text-cyan-400 tracking-wider">
                GET IN TOUCH
              </p>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
              CALL US{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                TODAY
              </span>
            </h2>

            <p className="mt-4 text-gray-300 max-w-lg leading-7 text-sm md:text-base">
              Have questions about our construction materials or need a quick
              quote? Our team is ready to help you choose the right solution
              for your project.
            </p>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 180 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-7 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* CALL CARD */}
            <motion.a
              href="tel:+919442255664"
              whileHover={{
                y: -7,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                p-7
                rounded-2xl
                border
                border-pink-500/40
                bg-white/[0.03]
                text-center
                transition-all
                duration-300
                hover:border-pink-500
                hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)]
              "
            >
              <div
                className="
                  mx-auto
                  w-14 h-14
                  rounded-full
                  border
                  border-pink-500
                  flex
                  items-center
                  justify-center
                  text-pink-500
                  group-hover:bg-pink-500
                  group-hover:text-white
                  group-hover:rotate-6
                  transition-all
                  duration-300
                "
              >
                <Phone size={24} />
              </div>

              <p className="mt-5 text-pink-400 font-semibold">
                Call Us Now
              </p>

              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                +91 94422 55664
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Tap to call directly
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-pink-500 group-hover:w-full transition-all duration-500" />
            </motion.a>

            {/* WHATSAPP CARD */}
            <motion.a
              href="https://wa.me/919790545122?text=Hi%20Thirumala%20Construction,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -7,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                p-7
                rounded-2xl
                border
                border-cyan-400/40
                bg-white/[0.03]
                text-center
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]
              "
            >
              <div
                className="
                  mx-auto
                  w-14 h-14
                  rounded-full
                  border
                  border-cyan-400
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  group-hover:bg-cyan-400
                  group-hover:text-[#101923]
                  group-hover:-rotate-6
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp size={27} />
              </div>

              <p className="mt-5 text-cyan-400 font-semibold">
                Chat on WhatsApp
              </p>

              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                +91 97905 45122
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Get quick assistance
              </p>

              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </motion.a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;