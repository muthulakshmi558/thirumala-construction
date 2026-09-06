import { motion } from "motion/react";
import {
  ShieldCheck,
  Leaf,
  BadgeIndianRupee,
  Clock3,
  Feather,
  Thermometer,
  VolumeX,
  TimerReset,

  CircleDot,
  Droplets,

  Settings,

  ArrowRight,
} from "lucide-react";

import {
  FaWhatsapp,
} from "react-icons/fa";

import product1 from "../assets/fly_ash_bricks.png";
import product2 from "../assets/solid_blocks.png";
import product3 from "../assets/septictank_ring.png";

const products = [
  {
    id: "01",
    title: "Fly Ash Bricks",
    image: product1,
    side: "left",
    accent: "pink",
    description:
      "Eco-friendly fly ash bricks manufactured for superior strength, uniform finish and long-lasting durability. Ideal for residential, commercial and industrial construction.",
    benefits: [
      {
        icon: ShieldCheck,
        title: "High Strength",
        text: "Superior compressive strength.",
      },
      {
        icon: Leaf,
        title: "Eco Friendly",
        text: "Uses sustainable materials.",
      },
      {
        icon: BadgeIndianRupee,
        title: "Cost Effective",
        text: "Helps reduce construction cost.",
      },
      {
        icon: Clock3,
        title: "Long Lasting",
        text: "Designed for better durability.",
      },
    ],
  },

  {
    id: "02",
    title: "Solid Block",
    image: product2,
    side: "right",
    accent: "cyan",
    description:
      "Lightweight solid blocks designed for efficient construction, reduced structural load and better thermal performance. Suitable for walls and partition applications.",
    benefits: [
      {
        icon: Feather,
        title: "Lightweight",
        text: "Easy to handle and transport.",
      },
      {
        icon: Thermometer,
        title: "Thermal Insulation",
        text: "Helps reduce heat transfer.",
      },
      {
        icon: VolumeX,
        title: "Sound Insulation",
        text: "Supports quieter interiors.",
      },
      {
        icon: TimerReset,
        title: "Faster Construction",
        text: "Helps speed up wall work.",
      },
    ],
  },

  

  {
    id: "03",
    title: "Septic Tank Ring",
    image: product3,
    side: "right",
    accent: "cyan",
    description:
      "Heavy-duty precast concrete rings designed for septic tanks, drainage systems and underground applications with reliable strength and consistent quality.",
    benefits: [
      {
        icon: ShieldCheck,
        title: "High Strength",
        text: "Handles demanding underground use.",
      },
      {
        icon: Droplets,
        title: "Leak Resistant",
        text: "Designed for dependable containment.",
      },
      {
        icon: Settings,
        title: "Durable Build",
        text: "Manufactured for long service life.",
      },
      {
        icon: CircleDot,
        title: "Versatile Use",
        text: "Suitable for multiple applications.",
      },
    ],
  },

  
];

function ManufacturingProducts() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-32 h-[400px] w-[400px] rounded-full bg-pink-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-32 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-pink-500" />

            <p className="text-sm font-bold tracking-[0.2em] text-pink-500 md:text-base">
              WHAT WE MANUFACTURE
            </p>

            <span className="h-[2px] w-10 bg-cyan-400" />
          </div>

          <h2 className="mt-5 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl">
            Our Manufacturing{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Reliable construction products manufactured with a focus on
            strength, durability, consistent quality and long-lasting
            performance.
          </p>
        </motion.div>

        {/* Products */}
        <div className="mt-16 space-y-10">
          {products.map((product, index) => (
            <ProductSection
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="
            mt-14
            grid
            gap-5
            rounded-[28px]
            bg-[#111827]
            p-6
            md:grid-cols-2
            md:p-8
          "
        >
          {/* Call */}
          <motion.a
            href="tel:+91 94422 55664"
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-pink-500/30
              bg-white/[0.03]
              p-6
              transition-all
              hover:border-pink-500
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-pink-500
                text-pink-500
                transition-all
                group-hover:bg-pink-500
                group-hover:text-white
              "
            >
              <span className="text-xl">☎</span>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Need More Information?
              </p>

              <h4 className="mt-1 text-xl font-black text-pink-500 md:text-2xl">
                +91 94422 55664
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                We're here to help you.
              </p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919442255664?text=Hi%20Thirumala%20Construction,%20I%20would%20like%20to%20know%20more%20about%20your%20manufacturing%20products."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-cyan-400/30
              bg-white/[0.03]
              p-6
              transition-all
              hover:border-cyan-400
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400
                text-cyan-400
                transition-all
                group-hover:bg-cyan-400
                group-hover:text-[#111827]
              "
            >
              <FaWhatsapp size={27} />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Chat on WhatsApp
              </p>

              <h4 className="mt-1 text-xl font-black text-cyan-400 md:text-2xl">
                +91 94422 55664
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Get quick product support.
              </p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProductSection({ product, index }) {
  const imageFromLeft = product.side === "left";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.22,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-gray-100
        bg-white
        shadow-[0_15px_50px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]
      "
    >
      {/* Magic corner */}
      <div
        className={`
          absolute
          h-24
          w-24
          ${
            imageFromLeft
              ? "right-0 bottom-0 rounded-tl-[80px]"
              : "left-0 top-0 rounded-br-[80px]"
          }
          ${
            product.accent === "pink"
              ? "bg-pink-500"
              : "bg-cyan-400"
          }
          opacity-0
          scale-50
          transition-all
          duration-500
          group-hover:scale-100
          group-hover:opacity-100
        `}
      />

      <div className="grid lg:grid-cols-2">
        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: imageFromLeft ? -100 : 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className={`
            relative
            min-h-[320px]
            overflow-hidden
            lg:min-h-[420px]
            ${imageFromLeft ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <img
            src={product.image}
            alt={product.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-[900ms]
              group-hover:scale-110
            "
          />

          {/* Image glow */}
          <div
            className={`
              absolute inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              ${
                product.accent === "pink"
                  ? "bg-gradient-to-tr from-pink-500/20 via-transparent to-transparent"
                  : "bg-gradient-to-tr from-cyan-400/20 via-transparent to-transparent"
              }
            `}
          />

          {/* Floating pulse icon */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute
              bottom-6
              ${imageFromLeft ? "right-6" : "left-6"}
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-4
              border-white
              bg-white
              shadow-xl
              ${
                product.accent === "pink"
                  ? "text-pink-500"
                  : "text-cyan-500"
              }
            `}
          >
            <ArrowRight size={24} />
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: imageFromLeft ? 100 : -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className={`
            relative
            flex
            flex-col
            justify-center
            p-7
            sm:p-9
            lg:p-12
            ${imageFromLeft ? "lg:order-2" : "lg:order-1"}
          `}
        >
          {/* Dots */}
          <div
            className={`
              absolute
              right-7
              top-7
              grid
              grid-cols-5
              gap-2
              opacity-25
            `}
          >
            {Array.from({ length: 20 }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${
                    product.accent === "pink"
                      ? "bg-pink-500"
                      : "bg-cyan-400"
                  }
                `}
              />
            ))}
          </div>

          {/* Number */}
          <div className="flex items-center gap-4">
            <span
              className={`
                text-3xl
                font-black
                md:text-4xl
                ${
                  product.accent === "pink"
                    ? "text-pink-500"
                    : "text-cyan-500"
                }
              `}
            >
              {product.id}
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className={`
                h-[2px]
                ${
                  product.accent === "pink"
                    ? "bg-pink-500"
                    : "bg-cyan-400"
                }
              `}
            />
          </div>

          <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-gray-900 sm:text-3xl lg:text-[34px]">
            {product.title}
          </h3>

          <div
            className={`
              mt-4
              h-[3px]
              w-10
              rounded-full
              transition-all
              duration-500
              group-hover:w-24
              ${
                product.accent === "pink"
                  ? "bg-pink-500"
                  : "bg-cyan-400"
              }
            `}
          />

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-600 md:text-base">
            {product.description}
          </p>

          {/* Benefits */}
          <div className="mt-7">
            <p
              className={`
                text-xs
                font-black
                tracking-[0.15em]
                ${
                  product.accent === "pink"
                    ? "text-pink-500"
                    : "text-cyan-500"
                }
              `}
            >
              KEY BENEFITS
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit, benefitIndex) => {
                const BenefitIcon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{
                      opacity: 0,
                      y: benefitIndex % 2 === 0 ? 25 : -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: benefitIndex * 0.08,
                    }}
                    whileHover={{
                      x: 5,
                      scale: 1.02,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      p-3
                      transition-all
                      duration-300
                      hover:bg-gray-50
                    "
                  >
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-white
                        transition-all
                        duration-300
                        ${
                          product.accent === "pink"
                            ? "border-pink-200 text-pink-500 group-hover:border-pink-500"
                            : "border-cyan-200 text-cyan-500 group-hover:border-cyan-400"
                        }
                      `}
                    >
                      <BenefitIcon size={18} />
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-gray-900">
                        {benefit.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {benefit.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default ManufacturingProducts;