import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  duration?: number;
  once?: boolean;
  amount?: number;
}

const offsets = {
  up: { opacity: 0, y: 48, x: 0, scale: 1 },
  down: { opacity: 0, y: -32, x: 0, scale: 1 },
  left: { opacity: 0, x: 48, y: 0, scale: 1 },
  right: { opacity: 0, x: -48, y: 0, scale: 1 },
  none: { opacity: 0, x: 0, y: 0, scale: 1 },
  scale: { opacity: 0, scale: 0.92, x: 0, y: 0 },
} as const;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={offsets[direction]}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : offsets[direction]
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
