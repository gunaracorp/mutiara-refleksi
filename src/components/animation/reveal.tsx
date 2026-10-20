"use client";

import { motion, useInView, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: i * 0.1 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word animated headline */
export function AnimatedWords({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${wordClassName ?? ""}`}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easing, delay: delay + i * 0.07 }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

/** Count-up number that triggers in view */
export function CountUp({
  to,
  suffix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("id-ID"));

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => spring.set(to), 80);
      return () => clearTimeout(t);
    }
  }, [inView, spring, to]);

  return (
    <span ref={ref} className={className}>
      {inView ? <motion.span>{display}</motion.span> : "0"}
      {suffix}
    </span>
  );
}

/** Scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-[#14532d] via-[#c9a227] to-[#dc2626]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

/** Floating pearls decoration */
export function FloatingPearls({ count = 8 }: { count?: number }) {
  const pearls = Array.from({ length: count }, (_, i) => ({
    size: 10 + ((i * 7) % 26),
    left: (i * 12 + 4) % 96,
    top: (i * 23 + 9) % 80,
    delay: (i * 0.9) % 4,
    duration: 5 + (i % 5),
    opacity: 0.12 + ((i % 4) * 0.05),
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {pearls.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: "radial-gradient(circle at 30% 30%, #ffffff, #d9e5dd 55%, #9db8a6)",
            boxShadow: "0 4px 14px rgba(20,83,45,0.18)",
            opacity: p.opacity + 0.25,
          }}
          animate={{ y: [0, -26, 0], rotate: [0, 8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
