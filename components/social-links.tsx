"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Globe, DiscIcon as Discord, Twitter, Instagram, Linkedin, Youtube, Twitch } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "Website",
    href: "/coming-soon",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    isExternal: false,
  },
  {
    name: "Discord",
    href: "https://discord.gg/DeaSZG3jHj",
    icon: Discord,
    color: "from-indigo-500 to-purple-500",
    isExternal: true,
  },
  {
    name: "Twitter/X",
    href: "https://x.com/martiansGGC",
    icon: Twitter,
    color: "from-blue-400 to-blue-600",
    isExternal: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/martians_gg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    color: "from-pink-500 to-orange-400",
    isExternal: true,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    color: "from-blue-600 to-blue-800",
    isExternal: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@martiansgaminguild?si=Ty1xHuiOrqXt-vt8",
    icon: Youtube,
    color: "from-red-500 to-red-700",
    isExternal: true,
  },
  {
    name: "Twitch",
    href: "#",
    icon: Twitch,
    color: "from-purple-500 to-purple-700",
    isExternal: true,
  },
]

export function SocialLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // Faster stagger for smoother appearance
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  }

  const item = {
    hidden: { y: 15, opacity: 0 }, // Reduced distance for subtler animation
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20, // Increased damping for smoother animation
        stiffness: 80, // Reduced stiffness for smoother animation
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col space-y-3">
      {socialLinks.map((link) => {
        const LinkComponent = link.isExternal
          ? ({ children }: { children: React.ReactNode }) => (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          : ({ children }: { children: React.ReactNode }) => <Link href={link.href}>{children}</Link>

        return (
          <motion.div
            key={link.name}
            variants={item}
            whileHover={{
              scale: 1.02, // Subtler scale effect
              transition: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for smoother hover
              },
            }}
            className={`group relative overflow-hidden rounded-lg bg-gradient-to-r ${link.color} p-0.5 shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            <LinkComponent>
              <div className="relative flex items-center justify-between rounded-[0.3rem] bg-white px-4 py-3 transition-all duration-300 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5" />
                  <span className="font-medium">{link.name}</span>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
                <div className="rounded-full bg-gray-100 p-1 transition-all duration-300 group-hover:translate-x-1 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </LinkComponent>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

