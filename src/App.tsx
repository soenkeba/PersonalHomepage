import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './components/Home'
import Impressum from './components/Impressum'
import Loading from './components/Loading'

function AppContent() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const handleLoadingComplete = () => {
    setIsInitialLoad(false)
  }

  useEffect(() => {
    // Only show loading on initial page load, not on route changes
    if (isInitialLoad) {
      // Ensure minimum loading time for smooth animation
      const timer = setTimeout(() => {
        handleLoadingComplete()
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isInitialLoad])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {isInitialLoad && <Loading key="loading" onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isInitialLoad && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

