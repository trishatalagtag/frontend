"use client";
import { Inter } from "next/font/google";

import CursorOverlay from "@/components/cursorOverlay";
import { Navbar } from "@/components/navbar";
import SmoothScroll from "@/components/smoothScroll/index";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter() as any;
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased overflow-x-hidden"
        )}
      >
        <SmoothScroll>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
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
            >
              <Providers
                themeProps={{ attribute: "class", defaultTheme: "dark" }}
              >
                <div className="relative flex flex-col">
                  <Navbar />
                  <CursorOverlay />
                  <main>{children}</main>
                </div>
              </Providers>
            </motion.div>
          </AnimatePresence>
        </SmoothScroll>
      </body>
    </html>
  );
}
