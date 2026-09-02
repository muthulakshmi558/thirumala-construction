import { motion } from "motion/react";
import {
  PhoneCall,
  Clock3,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

function CallNowBox() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-10 md:px-6">
      <motion.a
        href="tel:+919442255664"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        whileTap={{
          scale: 0.99,
        }}
        className="
          group
          relative
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-between
          gap-7
          overflow-hidden
          rounded-[32px]
          border
          border-white/30
          bg-gradient-to-br
          from-[#ec008c]
          via-[#d80c9f]
          to-[#20c4d8]
          px-6
          py-7
          shadow-[0_25px_70px_rgba(236,0,140,0.25)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_30px_90px_rgba(32,196,216,0.30)]
          lg:flex-row
          lg:px-9
          lg:py-8
        "
      >
        {/* BACKGROUND GLOW - LEFT */}
        <div
          className="
            absolute
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-white/20
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:bg-white/25
          "
        />

        {/* BACKGROUND GLOW - RIGHT */}
        <div
          className="
            absolute
            -bottom-32
            -right-20
            h-80
            w-80
            rounded-full
            bg-cyan-300/25
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        {/* TOP SHINE */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-white/60
          "
        />

        {/* LEFT SIDE */}
        <div className="relative z-10 flex w-full items-center gap-5 lg:w-auto">
          
          {/* PHONE ICON */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              flex
              h-[76px]
              w-[76px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              bg-white/20
              shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
            "
          >
            {/* PULSE */}
            <motion.span
              animate={{
                scale: [1, 1.45],
                opacity: [0.45, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                rounded-full
                border-2
                border-white/70
              "
            />

            <PhoneCall
              size={29}
              strokeWidth={2.3}
              className="relative z-10 text-white"
            />
          </motion.div>

          {/* TEXT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/30
                bg-white/15
                px-4
                py-1.5
                text-[11px]
                font-bold
                tracking-[0.12em]
                text-white
                backdrop-blur-md
              "
            >
              NEED HELP OR HAVE AN ENQUIRY?
            </div>

            <h3 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
              Call Us{" "}
              <span className="text-white/90">
                Now!
              </span>
            </h3>

            <p className="mt-1 text-sm font-medium text-white/80 md:text-base">
              Our team is ready to assist you.
            </p>
          </div>
        </div>

        {/* CENTER FEATURES */}
        <div
          className="
            relative
            z-10
            grid
            w-full
            grid-cols-3
            gap-2
            lg:w-auto
            lg:min-w-[420px]
            lg:gap-3
          "
        >
          <FeatureItem
            icon={Clock3}
            title="Quick"
            subTitle="Response"
          />

          <FeatureItem
            icon={ShieldCheck}
            title="Reliable"
            subTitle="Support"
          />

          <FeatureItem
            icon={HeartHandshake}
            title="Always"
            subTitle="Here for You"
          />
        </div>

        {/* RIGHT CALL BUTTON */}
        <motion.div
          whileHover={{
            scale: 1.025,
          }}
          className="
            relative
            z-10
            flex
            w-full
            items-center
            justify-between
            gap-4
            rounded-[24px]
            border
            border-white/50
            bg-white
            px-5
            py-4
            shadow-[0_15px_40px_rgba(0,0,0,0.15)]
            transition-all
            duration-300
            lg:w-auto
            lg:min-w-[390px]
          "
        >
          {/* ICON */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#ec008c]
              to-[#20c4d8]
              text-white
              shadow-lg
            "
          >
            <PhoneCall size={21} />
          </div>

          {/* NUMBER */}
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Call Now
            </p>

            <p
              className="
                mt-1
                text-xl
                font-black
                tracking-tight
                text-gray-900
                md:text-2xl
              "
            >
              +91 94422 55664
            </p>
          </div>

          {/* ARROW */}
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#ec008c]
              to-[#20c4d8]
              text-white
              shadow-lg
            "
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.div>

        {/* BOTTOM GLOW LINE */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[3px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-white
            opacity-80
            transition-all
            duration-700
            group-hover:w-[90%]
          "
        />
      </motion.a>
    </section>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  subTitle,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/25
        bg-white/15
        px-2
        py-4
        text-center
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-lg
        transition-all
        duration-300
        hover:bg-white/20
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-white/20
          text-white
          backdrop-blur-md
        "
      >
        <Icon size={19} />
      </div>

      <p className="mt-2 text-sm font-black text-white">
        {title}
      </p>

      <p className="text-[11px] font-medium text-white/70">
        {subTitle}
      </p>
    </motion.div>
  );
}

export default CallNowBox;