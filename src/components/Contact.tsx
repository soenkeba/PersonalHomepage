import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaTwitter, 
  FaFacebook,
  FaKeybase
} from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

const Contact = () => {
  const [emailRevealed, setEmailRevealed] = useState(false)
  
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/soenkebartling', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/soenkeba', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/sunkman/', label: 'Instagram' },
    { icon: FaKeybase, href: 'https://keybase.io/soenkeba', label: 'Keybase' },
    { icon: FaTwitter, href: 'https://twitter.com/soenkeba', label: 'Twitter' },
    { icon: SiMedium, href: 'https://medium.com/@soenkeba', label: 'Medium' },
    { icon: FaFacebook, href: 'https://www.facebook.com/Soenkebartling', label: 'Facebook' },
  ]

  // Obfuscated email storage - split and reversed parts
  const emailData = {
    user: ['soenke', 'bartling'].reverse().join(''),
    domain: ['gmail', 'com'].join('.'),
  }

  // Reconstruct email at runtime
  const getEmail = () => {
    if (!emailRevealed) return 'Click to reveal email'
    return `${emailData.user}@${emailData.domain}`
  }

  const getEmailHref = () => {
    if (!emailRevealed) return '#'
    return `mailto:${emailData.user}@${emailData.domain}`
  }

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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">
            Contact
          </h2>

          <div className="space-y-2 mb-12 text-lg text-gray-700 dark:text-gray-300">
            <div className="space-y-2">
              <p>
                <motion.a
                  href={getEmailHref()}
                  onClick={(e) => {
                    if (!emailRevealed) {
                      e.preventDefault()
                      setEmailRevealed(true)
                    }
                  }}
                  className="text-primary hover:underline transition-colors cursor-pointer inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getEmail()}
                </motion.a>
              </p>
              <p className="mt-4">
                <a
                  href="/soenkebartling05F6344Dpublic.asc"
                  className="text-primary hover:underline transition-colors"
                  download
                >
                  PGP
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-purple rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full border-2 border-transparent group-hover:border-primary transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary dark:text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

