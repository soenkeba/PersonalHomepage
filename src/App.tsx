import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './components/Home'
import Impressum from './components/Impressum'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Ensure minimum loading time for smooth animation
    const timer = setTimeout(() => {
      if (isLoading) {
        // If loading hasn't completed naturally, complete it after 1.5s minimum
        handleLoadingComplete()
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <AnimatePresence mode="wait">
          {isLoading && <Loading key="loading" onComplete={handleLoadingComplete} />}
        </AnimatePresence>
        {!isLoading && (
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
    </Router>
  )
}

export default App

