import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
import CommunityPage from './community/CommunityPage'
import './community/community.css'

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
