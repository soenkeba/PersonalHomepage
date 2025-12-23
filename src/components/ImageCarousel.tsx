import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const baseUrl = import.meta.env.BASE_URL

const images = [
  `${baseUrl}assets/img/IMG_2503.jpeg`,
  `${baseUrl}assets/img/IMG_2550.jpeg`,
  `${baseUrl}assets/img/IMG_2547.jpeg`,
  `${baseUrl}assets/img/IMG_4140.jpg`,
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1
      }
    })
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] perspective-1000">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 },
              rotateY: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Research image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg"
          onClick={() => paginate(-1)}
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg"
          onClick={() => paginate(1)}
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel

