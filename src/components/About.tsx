import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const texts = [
    "I´m a radiologist by training,  a scientist by heart and a Blockchain for Science trailblazer by passion.",
    "I´m a radiologist by passion,  a scientist by training and a Blockchain for Science trailblazer by heart.",
    "I´m a radiologist by heart,  a scientist by passion and a Blockchain for Science trailblazer by training.",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Who am I?
          </h2>
          
          <div className="relative h-32 md:h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
              >
                {texts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {texts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to text ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

