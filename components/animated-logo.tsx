"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for smoother animation
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="relative flex h-[160px] w-[160px] items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl dark:from-cyan-500/10 dark:to-purple-500/10"
      />

      <motion.div
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
        className="relative h-[140px] w-[140px]"
      >
        <Image
          src="/images/mgg-logo.png"
          alt="Martians Gaming Guild Logo"
          fill
          className="object-contain dark:invert-0"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

