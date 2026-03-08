import { motion } from 'framer-motion'

const About = () => {
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
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-left text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              I am a board-certified radiologist and habilitated physician-scientist with over two decades of experience spanning clinical medicine, basic research, and the transformation of scientific communication. My career has been defined by a persistent drive to bridge traditionally separate domains: the rigor of academic medicine, the openness of collaborative science, the disruptive potential of emerging technologies, and the practical demands of clinical care.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Currently, I work part-time as a radiologist in a private praxis in Berlin while leading <a href="https://www.blockchainforscience.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">BFS Blockchain for Science GmbH</a>, a think tank dedicated to exploring how decentralized technologies can reshape the research ecosystem. I am also deeply engaged in agentic research and the intersection of blockchain and AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

