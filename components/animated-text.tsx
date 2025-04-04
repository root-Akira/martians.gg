"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
}

export function AnimatedText({ text }: AnimatedTextProps) {
  // Split text into words
  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster stagger for smoother appearance
        delayChildren: 0.03 * i,
        ease: "easeOut",
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15, // Increased damping for smoother animation
        stiffness: 80, // Reduced stiffness for smoother animation
      },
    },
    hidden: {
      opacity: 0,
      y: 15, // Reduced distance for subtler animation
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      },
    },
  }

  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-white/80 p-4 text-center shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2 className="font-mono text-lg font-semibold">
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="mr-1 inline-block">
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  )
}

