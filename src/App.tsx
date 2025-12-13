import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './components/Home'
import Impressum from './components/Impressum'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

