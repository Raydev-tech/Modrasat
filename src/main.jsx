import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 70,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><Root /></React.StrictMode>,
)
