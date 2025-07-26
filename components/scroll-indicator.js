// app/components/scroll-indicator.js
"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollXProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
      className="fixed bottom-0 left-0 right-0 h-1 bg-gray-500 z-50"
    />
  );
}
