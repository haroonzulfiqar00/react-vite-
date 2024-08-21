import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import Whyus from './components/Whyus'
import Participate from './components/Participate'
import Ecosystem from './components/Ecosystem'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Herosection />
        <Whyus />
        <Participate />
        <Ecosystem />
        <Faqs />
        <Footer />
    </>
  )
}

export default App
