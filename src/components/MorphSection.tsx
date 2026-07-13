import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MorphSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/** Section that morphs opacity/scale slightly based on scroll progress */
export default function MorphSection({
  children,
  className = "",
  id,
}: MorphSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.4, 1, 1, 0.5]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -20]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.97, 1, 1, 0.98]
  );

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y, scale }}
      className={`morph-section ${className}`}
    >
      {children}
    </motion.section>
  );
}
