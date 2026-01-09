"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col space-y-2"
    >
      {/* Scroll Up Button */}
      <button
        onClick={scrollUp}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-lightest/10 backdrop-blur-sm border border-lightest/20 text-lightest hover:bg-accent2/20 hover:border-accent2 transition-all duration-300 group"
        aria-label="Scroll up"
      >
        <ArrowUp size={20} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll Down Button */}
      <button
        onClick={scrollDown}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-lightest/10 backdrop-blur-sm border border-lightest/20 text-lightest hover:bg-accent2/20 hover:border-accent2 transition-all duration-300 group"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="group-hover:scale-110 transition-transform" />
      </button>
    </motion.div>
  );
}
