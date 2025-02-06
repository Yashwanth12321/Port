import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import { motion } from "motion/react";

const Section1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark-background even items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center fade-in">
        <Column classNames="w-full items-center justify-center">
          {/* Animated Name and Profession */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center"
          >
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center dark:text-green-400 text-[var(--primaryColor)]">
              Yashwanth Napa
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-sm md:text-base dark:text-[var(--textColorLight)] text-[var(--textColorLight)] mt-4"
          >
            Software Development Engineer (SDE)
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 lg:mt-16"
          >
            <Link href="#contact">
              <button
                className="bg-green-500 text-white py-2 px-8 rounded-full shadow-lg hover:bg-green-600 transform transition-all ease-in-out duration-300"
              >
                Download Resume
              </button>
            </Link>
          </motion.div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section1;
