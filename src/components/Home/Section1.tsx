import Link from "next/link";
import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Column from "@/components/core/Column";
import { motion } from "motion/react";
import BrainMindMap from "@/components/Braindump/BrainMindMap";

const Section1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark-background even items-center justify-center flex flex-col md:flex-row "
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
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
            className="text-2xl md:text-2xl dark:bg-gradient-to-r dark:from-[var(--textColorLight)] dark:to-[var(--primaryColor)] dark:bg-clip-text dark:text-transparent bg-gradient-to-r from-[var(--textColorLight)] to-[var(--primaryColor)] bg-clip-text text-transparent mt-4 "
          >
            Polymath All the way FTW
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
      <ConstrainedBox classNames="p-4 py-8 pt-16 z-20 items-center justify-center border border-green-400 ">
        <div className="w-full items-center justify-center">
          <BrainMindMap />
        </div>

      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section1;
