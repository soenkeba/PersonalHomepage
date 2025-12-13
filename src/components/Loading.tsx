import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingProps {
  onComplete: () => void
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-cyan/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Name animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            PD Dr. med.
          </h1>
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Sönke Bartling
          </motion.h2>
        </motion.div>

        {/* Animated dots */}
        <div className="flex gap-2 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p
          className="mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.p>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => {
        const getRandomPosition = () => {
          if (typeof window !== 'undefined') {
            return {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }
          }
          return { x: 0, y: 0 }
        }
        const initialPos = getRandomPosition()
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: initialPos.x,
              y: initialPos.y,
            }}
            animate={{
              y: [null, initialPos.y - 100, initialPos.y + 100],
              x: [null, initialPos.x + (Math.random() * 50 - 25), initialPos.x],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </motion.div>
  )
}

export default Loading

