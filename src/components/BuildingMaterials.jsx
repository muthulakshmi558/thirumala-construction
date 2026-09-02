import { motion } from "motion/react";
import { Link } from "react-router-dom";

import cementImg from "../assets/material-cement.png";
import mSandImg from "../assets/material-msand.png";
import pSandImg from "../assets/material-psand.png";
import flyashImg from "../assets/material-flyash.png";
import quarryImg from "../assets/material-quarry.png";

const materials = [
  {
    id: "cement",
    title: "Cement",
    image: cementImg,
    accent: "pink",
  },
  {
    id: "m-sand",
    title: "M-Sand",
    image: mSandImg,
    accent: "cyan",
  },
  {
    id: "p-sand",
    title: "P-Sand",
    image: pSandImg,
    accent: "pink",
  },
  {
    id: "flyash-bricks",
    title: "Fly Ash Bricks",
    image: flyashImg,
    accent: "cyan",
  },
  {
    id: "quarry-stones",
    title: "Quarry Stones",
    image: quarryImg,
    accent: "pink",
  },
];

function BuildingMaterials() {
  return (
    <section
      id="materials"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
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
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-pink-500" />

            <p className="text-sm font-bold tracking-[0.22em] text-pink-500">
              OUR RANGE
            </p>

            <span className="h-[2px] w-10 bg-cyan-400" />

          </div>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-gray-900
              md:text-5xl
              lg:text-6xl
            "
          >
            Building{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Materials
            </span>
          </h2>

          <div className="mx-auto mt-5 flex w-fit">
            <span className="h-[3px] w-12 rounded-l-full bg-pink-500" />

            <span className="h-[3px] w-12 rounded-r-full bg-cyan-400" />
          </div>

        </motion.div>

        {/* Materials Grid */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-6xl
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-6
          "
        >
          {materials.map((item, index) => {

            /*
              Desktop Layout:

              01 - cols 1-2
              02 - cols 3-4
              03 - cols 5-6

              04 - cols 2-3
              05 - cols 4-5
            */

            const desktopPosition = [
              "lg:col-span-2",
              "lg:col-span-2",
              "lg:col-span-2",
              "lg:col-span-2 lg:col-start-2",
              "lg:col-span-2",
            ][index];

            return (
              <motion.div
                key={item.id}

                initial={{
                  opacity: 0,
                  y:
                    index === 0 || index === 3
                      ? 70
                      : index === 1
                      ? -70
                      : 70,
                  x:
                    index === 0
                      ? -50
                      : index === 2
                      ? 50
                      : index === 3
                      ? -40
                      : index === 4
                      ? 40
                      : 0,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}

                viewport={{
                  once: false,
                  amount: 0.25,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}

                className={desktopPosition}
              >
                <MaterialCard item={item} index={index} />
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12 text-center"
        >
          <Link
            to="/materials"
            className="
              group
              relative
              inline-flex
              overflow-hidden
              rounded-xl
              p-[1px]
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-pink-500
                to-cyan-400
              "
            />

            <span
              className="
                relative
                rounded-[11px]
                bg-white
                px-8
                py-3.5
                text-base
                font-bold
                text-gray-900
                transition-all
                duration-300
                group-hover:bg-transparent
                group-hover:text-white
              "
            >
              View All Materials
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}


function MaterialCard({ item, index }) {
  return (
    <Link
      to={`/materials/${item.id}`}
      className="group block"
    >
      <motion.div
        whileHover={{
          y: -10,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          overflow-hidden
          rounded-[26px]
          bg-white
          p-2
          shadow-[0_15px_45px_rgba(15,23,42,0.10)]
          transition-all
          duration-500
          group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.18)]
        "
      >

        {/* Image Container */}
        <div
          className="
            relative
            h-[270px]
            overflow-hidden
            rounded-[20px]
            sm:h-[300px]
            lg:h-[320px]
          "
        >

          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[900ms]
              ease-out
              group-hover:scale-110
            "
          />

          {/* Very Light Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/10
            "
          />

          {/* Pink / Cyan Light */}
          <div
            className={`
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              blur-3xl
              opacity-0
              transition-all
              duration-700
              group-hover:right-0
              group-hover:top-0
              group-hover:opacity-30

              ${
                item.accent === "pink"
                  ? "bg-pink-500"
                  : "bg-cyan-400"
              }
            `}
          />

          {/* Number */}
          <div
            className={`
              absolute
              left-4
              top-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/95
              text-sm
              font-black
              shadow-lg
              backdrop-blur

              ${
                item.accent === "pink"
                  ? "text-pink-500"
                  : "text-cyan-500"
              }
            `}
          >
            0{index + 1}
          </div>

        </div>


        {/* Title Only */}
        <div className="relative px-4 pb-5 pt-5">

          <h3
            className="
              text-center
              text-xl
              font-black
              text-gray-900
              transition-all
              duration-300
              group-hover:-translate-y-1
              md:text-2xl
            "
          >
            {item.title}
          </h3>

          {/* Animated Line */}
          <div
            className={`
              mx-auto
              mt-3
              h-[3px]
              w-8
              rounded-full
              transition-all
              duration-500
              group-hover:w-20

              ${
                item.accent === "pink"
                  ? "bg-pink-500"
                  : "bg-cyan-400"
              }
            `}
          />

        </div>


        {/* Animated Border Bottom */}
        <div
          className={`
            absolute
            bottom-0
            left-1/2
            h-[3px]
            w-0
            -translate-x-1/2
            rounded-full
            transition-all
            duration-500
            group-hover:w-[75%]

            ${
              item.accent === "pink"
                ? "bg-pink-500"
                : "bg-cyan-400"
            }
          `}
        />

      </motion.div>
    </Link>
  );
}

export default BuildingMaterials;