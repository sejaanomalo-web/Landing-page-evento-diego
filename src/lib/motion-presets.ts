import type { Variants, Transition } from "framer-motion";

export const easeScroll: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeCard: Transition["ease"] = [0.16, 1, 0.3, 1];

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeScroll },
  },
};

export const staggerContainer = (stagger = 0.12): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeCard },
  },
};
