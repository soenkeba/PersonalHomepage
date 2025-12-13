import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionCardProps {
  title: string
  image: string
  imageAlt: string
  content: ReactNode
  imagePosition: 'left' | 'right'
}

const SectionCard = ({ title, image, imageAlt, content, imagePosition }: SectionCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], imagePosition === 'left' ? [-50, 50] : [50, -50])
  // Simplified scale - sections are always visible
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5
    mouseX.set(mouseXRelative)
    mouseY.set(mouseYRelative)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const isLeft = imagePosition === 'left'

  return (
    <section
      ref={ref}
      className="py-20 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          style={{ scale }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            style={{ x }}
            className={isLeft ? 'order-2 md:order-1' : 'order-2 md:order-2'}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <motion.img
                src={image}
                alt={imageAlt}
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={isLeft ? 'order-1 md:order-2' : 'order-1 md:order-1'}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              {title}
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              {content}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionCard

