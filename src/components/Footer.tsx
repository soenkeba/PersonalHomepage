import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">
            <Link
              to="/impressum"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Impressum
            </Link>
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} PD Dr. Sönke Bartling
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

