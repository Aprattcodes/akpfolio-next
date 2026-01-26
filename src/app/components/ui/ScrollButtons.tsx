"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show buttons when scrolling and past 100px
      if (scrollY > 100) {
        setIsScrolling(true);
        setShowButtons(true);
      }

      // Check if at bottom (within 50px)
      setAtBottom(scrollY + windowHeight >= docHeight - 50);

      // Hide buttons after user stops scrolling
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setShowButtons(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
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
          {!atBottom && (
            <button
              onClick={scrollDown}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-lightest/10 backdrop-blur-sm border border-lightest/20 text-lightest hover:bg-accent2/20 hover:border-accent2 transition-all duration-300 group"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
