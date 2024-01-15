import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'flowbite';
import About from './components/About'
import SkillsLogos from './components/SkillsLogos'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <SkillsLogos></SkillsLogos>
      </div>
      <div >
        <Projects></Projects>
      </div>
      <div>
        <Contact></Contact>
      </div>
      
    </>
  )
}

export default App
