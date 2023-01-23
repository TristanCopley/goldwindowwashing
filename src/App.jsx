import React from 'react'
import NavigationBar from './components/navbar/navbar.jsx'
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Services from './pages/services.jsx'
import Contact from './pages/contact.jsx'

function App() {

  const [scroll, setScroll] = React.useState(0)

  React.useEffect(() => {

    window.addEventListener('scroll', () => {

      setScroll(window.scrollY)

    })

  }, [])

  return (
    <div className="App flex flex-col font-semibold">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
