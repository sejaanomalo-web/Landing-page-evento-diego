"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, cardVariants } from "@/lib/motion-presets";

interface StaggerGridProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerGrid({
  children,
  staggerDelay = 0.12,
  className,
  ...rest
}: StaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={staggerContainer(staggerDelay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...rest
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div variants={cardVariants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
