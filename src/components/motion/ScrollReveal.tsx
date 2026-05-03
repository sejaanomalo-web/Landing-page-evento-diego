"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { easeScroll } from "@/lib/motion-presets";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.75,
  className,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration, ease: easeScroll, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
