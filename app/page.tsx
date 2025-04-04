import { SocialLinks } from "@/components/social-links"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedLogo } from "@/components/animated-logo"
import { AnimatedText } from "@/components/animated-text"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <AnimatedBackground />

      <div className="container relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-start px-4 py-12">
        <div className="mb-8 flex flex-col items-center">
          <div className="relative transform transition-transform hover:scale-105">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-15 blur-lg"></div>
            <div className="relative">
              <AnimatedLogo />
            </div>
          </div>
          <h1 className="mt-6 text-center font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            Martians Gaming Guild
          </h1>
          <p className="mt-2 text-center text-sm text-gray-400 sm:text-base">
            Your Gateway to Esports & Web3 Gaming
          </p>
        </div>

        <div className="mb-8 w-full">
          <div className="mb-4 rounded-lg border border-gray-700 bg-gray-800/80 p-4 text-center shadow-lg backdrop-blur-sm">
            <h2 className="font-mono text-lg font-semibold">Official Website</h2>
            <p className="mt-2 text-sm text-gray-400">
              <span className="inline-block rounded-full bg-yellow-500 px-2 py-0.5 text-xs font-medium text-black">
                Coming Soon
              </span>
            </p>
          </div>

          <SocialLinks />
        </div>

        <div className="mb-8 w-full">
          <AnimatedText text="Hybrid Gaming & Esports Organization" />
        </div>

        <footer className="mt-auto pt-8 text-center text-xs text-gray-400">
          © 2024 Martians Gaming Guild. All rights reserved.
        </footer>
      </div>
    </main>
  )
}

