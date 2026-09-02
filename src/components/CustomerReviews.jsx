import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  PackageCheck,
  Hammer,
  Sparkles,
  House,
  BadgeCheck,
} from "lucide-react";

const reviews = [
  {
    name: "Arun Kumar",
    location: "coimbatore",
    icon: PackageCheck,
    review:
      "Service romba good-ah irundhuchu. Products ellame quality-ah iruku, delivery-um correct time-ku pannanga.",
    tag: "Quality Products",
  },
  {
    name: "Karthik Raja",
    location: "coimbatore",
    icon: Building2,
    review:
      "Building work nalla professional-ah pannanga. Finishing and overall quality rendu perusa satisfy pannuchu.",
    tag: "Construction",
  },
  {
    name: "Vignesh Kumar",
    location: "coimbatore",
    icon: House,
    review:
      "House construction-ku use panna materials quality super. Team response-um clear-ah and helpful-ah irundhuchu.",
    tag: "Home Building",
  },
  {
    name: "Praveen Raj",
    location: "coimbatore",
    icon: Hammer,
    review:
      "Existing building-ku rework and renovation pannanga. Old structure-a neat-ah modern look-ku change pannitanga.",
    tag: "Building Rework",
  },
  {
    name: "Saravanan",
    location: "coimbatore",
    icon: BadgeCheck,
    review:
      "Fly ash bricks and building materials quality nalla iruku. Rate reasonable-ah irundhuchu, support-um super.",
    tag: "Trusted Service",
  },
  {
    name: "Manikandan",
    location: "coimbatore",
    icon: Sparkles,
    review:
      "Renovation work clean-ah complete pannanga. Small details kooda care eduthu professional finish kuduthanga.",
    tag: "Renovation",
  },
];


function CustomerReviews() {
    useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, 9000);

  return () => clearInterval(timer);
}, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const current = reviews[activeIndex];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">

      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-pink-500" />

            <p className="text-sm font-bold tracking-[0.2em] text-pink-500">
              CUSTOMER EXPERIENCE
            </p>

            <span className="h-[2px] w-10 bg-cyan-400" />
          </div>

          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Real feedback about our products, construction services and
            renovation works.
          </p>
        </motion.div>

        {/* Main Review */}
        <div className="relative mx-auto mt-14 max-w-5xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border border-gray-100
              bg-white/80
              px-6 py-10
              shadow-[0_20px_70px_rgba(15,23,42,0.08)]
              backdrop-blur-xl
              md:px-12
              lg:px-16
              lg:py-14
            "
          >
            {/* Quote */}
            <Quote
              size={70}
              strokeWidth={1.2}
              className="absolute left-8 top-7 text-pink-100"
            />

            <Quote
              size={70}
              strokeWidth={1.2}
              className="absolute bottom-6 right-8 rotate-180 text-cyan-100"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: 60,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative z-10 text-center"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-pink-500
                    to-cyan-400
                    text-white
                    shadow-lg
                  "
                >
                  <current.icon size={27} />
                </motion.div>

                {/* Stars */}
                <div className="mt-5 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                      className={
                        star % 2 === 0
                          ? "text-cyan-400"
                          : "text-pink-500"
                      }
                    />
                  ))}
                </div>

                {/* Tag */}
                <span
                  className="
                    mt-5
                    inline-flex
                    rounded-full
                    border border-gray-100
                    bg-gray-50
                    px-4 py-2
                    text-xs
                    font-bold
                    tracking-wide
                    text-gray-600
                  "
                >
                  {current.tag}
                </span>

                {/* Review */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="
                    mx-auto
                    mt-7
                    max-w-3xl
                    text-xl
                    font-medium
                    leading-9
                    text-gray-800
                    md:text-2xl
                    md:leading-10
                  "
                >
                  “{current.review}”
                </motion.p>

                {/* Customer */}
                <div className="mt-8">
                  <h4 className="text-xl font-black text-gray-900">
                    {current.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {current.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left arrow */}
            <button
              onClick={prevReview}
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-pink-200
                bg-white
                text-pink-500
                shadow-md
                transition-all
                duration-300
                hover:-translate-x-1
                hover:scale-110
                hover:border-pink-500
                md:left-6
              "
            >
              <ChevronLeft size={19} />
            </button>

            {/* Right arrow */}
            <button
              onClick={nextReview}
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-cyan-200
                bg-white
                text-cyan-500
                shadow-md
                transition-all
                duration-300
                hover:translate-x-1
                hover:scale-110
                hover:border-cyan-400
                md:right-6
              "
            >
              <ChevronRight size={19} />
            </button>

          </div>

          {/* Review Dots */}
          <div className="mt-7 flex items-center justify-center gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "w-9 bg-gradient-to-r from-pink-500 to-cyan-400"
                      : "w-2.5 bg-gray-300 hover:bg-pink-300"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;