"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <AnimatedBackground />

      <div className="container relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-12">
        <div className="absolute left-4 top-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full bg-gray-800/90 px-4 py-2 text-sm font-medium text-gray-200 shadow-md backdrop-blur-sm transition-colors hover:bg-gray-800/70"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Our website is under construction. We're working hard to bring you an amazing experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-xl font-semibold">Stay Connected</h2>
          <p className="text-gray-400">Follow us on social media for updates and announcements.</p>
        </motion.div>
      </div>
    </main>
  )
}

