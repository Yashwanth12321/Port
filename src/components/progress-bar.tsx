import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number; // Progress value (0 to 100)
  className?: string;
}

export const ProgressBar = ({ progress, className }: ProgressBarProps) => {
    return (
      <div className={cn("w-full h-3 bg-black rounded-sm", className)}>
        <motion.div
          className="h-full bg-green-400 rounded-sm shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    );
  };