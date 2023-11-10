"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

export default function AnimatedDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter() as any;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          className="inline-block text-center justify-center w-screen"
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          {children}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
