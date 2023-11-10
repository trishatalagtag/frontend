"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./page.module.css";

const phrases = [
  "The Philippines is not immune to the",
  "climate crisis, and it is our moral",
  "obligation to collectively be aware",
  "of the situation's severity.",
];

export default function Introduction() {
  return (
    <div className={styles.main}>
      <IntroductionText />
    </div>
  );
}

export function IntroductionText() {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });
  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.5,
      },
    }),
  };

  return (
    <div ref={body} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
