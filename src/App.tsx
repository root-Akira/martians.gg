import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameStrip from './components/GameStrip'
import Tournament from './components/Tournament'
import About from './components/About'
import Mission from './components/Mission'
import TeamSection from './components/TeamSection'
import Events from './components/Events'
import Partners from './components/Partners'
import News from './components/News'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <GameStrip />
        <Tournament />
        <About />
        <Mission />
        <TeamSection />
        <Events />
        <Partners />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
