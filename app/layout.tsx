import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Martians Gaming Guild",
  description: "Your Gateway to Esports & Web3 Gaming",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/mgg-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/mgg-logo.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/mgg-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/mgg-logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'