"use client";

import { useEffect, useState } from "react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { ProgressBar } from "@/components/progress-bar"; 

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1000) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 2.8, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2700); 

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <Terminal>
        <ProgressBar progress={progress} className="mb-4" />

        <TypingAnimation duration={20} delay={0}>
          &gt; Cloning repository...
        </TypingAnimation>

        <AnimatedSpan delay={500} className="text-green-500">
          <span>✔ Installing dependencies...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1000} className="text-green-500">
          <span>✔ Compiling assets...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Starting server...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-blue-500">
          <span>✔ Portfolio ready!</span>
        </AnimatedSpan>

      </Terminal>
    </div>
  );
};
