import type { Variants } from "framer-motion";

/**
 * Shared animation timings
 */
export const MOTION = {
  duration: 0.2,
  stagger: 0.06,
  delay: 0.08,
} as const;

/**
 * Fade
 */
export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
} satisfies Variants;

/**
 * Page Transition
 */
export const page = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -12,
  },
} satisfies Variants;

/**
 * Card
 */
export const card = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.94,
    },
} as const;

/**
 * Scale
 */
export const scale = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
  },
} satisfies Variants;

/**
 * Slide Up
 */
export const slideUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 24,
  },
} satisfies Variants;

/**
 * Slide Down
 */
export const slideDown = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -24,
  },
} satisfies Variants;

/**
 * Slide Left
 */
export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 24,
  },
} satisfies Variants;

/**
 * Slide Right
 */
export const slideRight = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -24,
  },
} satisfies Variants;

/**
 * Modal
 */
export const modal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
  },
} satisfies Variants;

/**
 * List Container
 */
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION.stagger,
      delayChildren: MOTION.delay,
    },
  },
} satisfies Variants;