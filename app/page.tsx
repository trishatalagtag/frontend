"use client";
import useMousePosition from "@/components/mousePosition/useMousePosition";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Description from "./home/description/page";
import Information from "./home/explanation/page";
const Earth = dynamic(() => import("@/components/earth"), {
  ssr: false,
  loading: () => <img src="/placeholder.png" alt="loading"></img>,
});

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const router = useRouter() as any;
  return (
    <div>
      <div className="flex flex-col items-center justify-start">
        <motion.h1
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
            delay: 1,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
          className="text-[15vw] -m-10 bg-transparent tracking-tighter font-extrabold"
        >
          PROJECT K5
        </motion.h1>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
          className="absolute top-56 left-0 right-0 h-screen w-screen grow"
        >
          <Earth />
        </motion.div>
      </div>
      <div className={`flex flex-col items-center justify-center uppercase`}>
        <Description />
      </div>
      <Information />
    </div>
  );
};

export default Home;
