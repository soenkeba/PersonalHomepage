import { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import SectionCard from './SectionCard'
import ImageCarousel from './ImageCarousel'
import Contact from './Contact'
import { motion } from 'framer-motion'

const Home = () => {
  useEffect(() => {
    // Scroll to top immediately when Home component mounts
    // Use both instant and smooth scroll to ensure it works
    window.scrollTo(0, 0)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 10)
  }, [])

  return (
    <>
      <Hero />
      <About />
      
      {/* Clinical Radiology */}
      <SectionCard
        title="Clinical Radiology"
        image="/assets/img/SoenkeRadiology.png"
        imageAlt="Clinical Radiology"
        content={
          <div className="space-y-4">
            <p>
              My clinical foundation was built at leading academic medical centers across three continents. Following my medical studies at Hannover Medical School and doctoral research that earned a summa cum laude distinction, I completed residency and fellowship training at university hospitals in Heidelberg, Mannheim, and Berlin, with extended research stays at Harvard Medical School (Surgical Planning Laboratory, Center for Integration of Medicine and Innovative Technology) and GE Global Research.
            </p>
            <p>
              I hold board certification in diagnostic radiology with subspecialty expertise in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Interventional Radiology:</strong> Vascular and non-vascular interventions, embolization procedures, and image-guided therapies</li>
              <li><strong>Neuroimaging:</strong> Head and neck imaging, temporal bone anatomy, and skull base navigation</li>
              <li><strong>Cardiovascular Imaging:</strong> Cardiac MRI, CT angiography, and functional cardiac analysis</li>
              <li><strong>Cross-Sectional Imaging:</strong> Comprehensive CT and MRI interpretation across all organ systems</li>
            </ul>
            <p>
              Throughout my clinical career, I have worked in more than 25 different healthcare settings—from tertiary university hospitals to community practices—giving me a uniquely broad perspective on how imaging services are delivered across the healthcare spectrum. I received my habilitation (venia legendi) in Diagnostic Radiology from Heidelberg University in 2012, allowing me to supervise doctoral candidates and teach at the postgraduate level.
            </p>
          </div>
        }
        imagePosition="left"
      />

      {/* Medical Imaging Research */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageCarousel />
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Medical Imaging Research</h3>
                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    My research career has focused on advancing the technological boundaries of diagnostic and interventional imaging. At the German Cancer Research Center (DKFZ), I led a project group investigating novel applications of flat-panel computed tomography, small animal imaging, and molecular imaging techniques.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Flat-Panel CT and Skull Base Imaging</h4>
                      <p>
                        My doctoral work established flat-panel volume CT as a viable modality for high-resolution imaging of the temporal bone. This research demonstrated that cochlear implant electrode positions could be evaluated with unprecedented precision—a method now routinely used in clinical practice worldwide. Building on this foundation, I collaborated with colleagues at Hannover Medical School to perform the world's first truly minimally invasive cochleostomy using intraoperative flat-panel CT guidance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Small Animal Cardiac Imaging</h4>
                      <p>
                        I developed and validated retrospective gating algorithms for small animal CT imaging, enabling functional cardiac analysis in preclinical studies without the need for external physiological monitoring. This work, published in Investigative Radiology and other high-impact journals, has facilitated countless cardiovascular research studies in mouse and rat models.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Multimodal Embolization Particles</h4>
                      <p>
                        My team developed and tested the first embolization particles visible on both X-ray/CT and MRI—a multimodal approach that could improve procedural guidance and follow-up imaging for interventional oncology procedures. This work resulted in an international patent application.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">4D Intervention Guidance</h4>
                      <p>
                        Perhaps my most forward-looking research concerns the development of continuous-rotation flat-panel CT for real-time volumetric imaging during interventional procedures. This technology, which I have pursued in collaboration with Professor Marc Kachelrieß at DKFZ, aims to provide true 4D (3D plus time) datasets that could fundamentally change how interventional radiologists navigate complex procedures. Patent applications covering this technology have entered national phases in the United States and European Union.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Research Metrics</p>
                    <p className="text-sm">
                      My publication record encompasses over 160 peer-reviewed articles, book chapters, and conference contributions. These works have been cited more than 3,300 times, yielding an h-index of 33. I serve as a peer reviewer for leading journals including European Radiology, Investigative Radiology, and PLOS Medicine, and I have contributed to international regulatory guidance as a member of Task Group 88 of the International Commission on Radiological Protection (ICRP).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Science */}
      <SectionCard
        title="Open Science"
        image="/assets/img/IMG_0478.jpg"
        imageAlt="Open Science"
        content={
          <div className="space-y-4">
            <p>
              My engagement with Open Science began in the early 2010s, catalyzed by a simple observation: the internet had transformed virtually every aspect of human communication except scientific publishing. While the rest of the world embraced open collaboration, science remained largely locked behind paywalls, constrained by 17th-century publication models ill-suited to the digital age.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">Opening Science</h4>
                <p>
                  In 2014, together with Sascha Friesike, I edited "Opening Science: The Evolving Guide on How the Internet is Changing Research, Collaboration and Scholarly Publishing," published by SpringerNature as an Open Access volume. The book brought together leading voices in the Open Science movement to articulate how digital technologies could democratize knowledge creation and dissemination.
                </p>
                <p>
                  The response exceeded all expectations. "Opening Science" became SpringerNature's most downloaded Open Access book—a distinction it held for several years—with hundreds of thousands of downloads from researchers, policymakers, and science enthusiasts worldwide. In 2015, the project was recognized as an "Excellent Place in the Land of Ideas" by the German government's innovation initiative.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Humboldt Institute for Internet and Society</h4>
                <p>
                  From 2014 to 2021, I served as an Associated Researcher at the Humboldt Institute for Internet and Society in Berlin, one of Europe's leading centers for studying the societal implications of digitalization. This affiliation provided a platform for continued research into how digital technologies are reshaping scientific practice, from data sharing and collaborative authorship to new models of peer review and science communication.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Ongoing Commitment</h4>
                <p>
                  My commitment to Open Science extends beyond academic publications. I believe that the transition to open, transparent, and reproducible research practices is not merely a philosophical preference but an ethical imperative and a practical necessity for accelerating scientific progress. This conviction directly informed my subsequent work on blockchain technologies for science.
                </p>
              </div>
            </div>
          </div>
        }
        imagePosition="right"
      />

      {/* Blockchain for Science & DeSci */}
      <SectionCard
        title="Blockchain for Science & Decentralized Science (DeSci)"
        image="/assets/img/IMG_2503.jpeg"
        imageAlt="Blockchain for Science"
        content={
          <div className="space-y-4">
            <p>
              While many discovered blockchain through cryptocurrency speculation, my interest was sparked by a different question: could distributed ledger technology address fundamental challenges in how science is conducted, communicated, and incentivized?
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">Pioneering Work</h4>
                <p>
                  In 2016, together with Benedikt Fecher, I published what is widely recognized as the first comprehensive academic treatment of blockchain applications in science: "Blockchain for Science and Knowledge Creation." This paper, written years before "DeSci" emerged as a recognized movement, outlined how blockchain could enable transparent peer review, immutable research records, novel funding mechanisms, and new models for attributing scientific contributions.
                </p>
                <p>
                  The core insight was that blockchain's properties—decentralization, transparency, immutability, and programmable incentives—aligned remarkably well with the ideals that science aspires to but often fails to achieve in practice. A system where research claims are timestamped and verifiable, where contributions are fairly attributed, and where the gatekeeping functions of traditional publishing are replaced by transparent community governance.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">BFS Blockchain for Science GmbH</h4>
                <p>
                  To advance these ideas from theory to practice, I founded <a href="https://www.blockchainforscience.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">BFS Blockchain for Science GmbH</a> in Berlin in 2018. The organization serves as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A <strong>think tank</strong> for conceptual development and strategic analysis of blockchain applications in research</li>
                  <li>A <strong>hub</strong> connecting researchers, technologists, funders, and policymakers interested in decentralized science</li>
                  <li>A <strong>consultancy</strong> advising academic institutions, research infrastructure providers, publishers, and corporations</li>
                </ul>
                <p className="mt-4">
                  Through BFS, I have provided strategic guidance to organizations including the German Cancer Research Center (DKFZ), the Karlsruhe Institute of Technology (KIT), CODE University of Applied Sciences, the Max Planck Digital Library, SpringerNature, Science Europe, the Alexander von Humboldt Foundation, UNESCO, and major corporations such as BASF and Roche.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Conferences and Community Building</h4>
                <p>
                  In 2018 and 2019, I organized the first international conferences dedicated to Blockchain for Science, Research, and Knowledge Creation, bringing together an interdisciplinary community of researchers, developers, and innovators. These events helped catalyze what has since grown into the global DeSci movement.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Editorial Leadership</h4>
                <p>
                  I served as Chief Specialty Editor for the "Blockchain for Science" section at Frontiers in Blockchain, where I helped shape the academic discourse on decentralized science and curated high-quality research on this emerging field.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">DeSci Commons</h4>
                <p>
                  More recently, I have been involved in developing guidelines and best practices for the DeSci community through initiatives like <a href="https://descicommons.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">DeSci Commons</a>, working to ensure that the idealism of decentralized science is matched by rigorous standards and practical implementation frameworks.
                </p>
              </div>
            </div>
          </div>
        }
        imagePosition="left"
      />

      {/* Artificial Intelligence & Technology */}
      <SectionCard
        title="Artificial Intelligence & Technology"
        image="/assets/img/IMG_2550.jpeg"
        imageAlt="AI & Technology"
        content={
          <div className="space-y-4">
            <p>
              The convergence of artificial intelligence with scientific research represents what I consider the most significant transformation of knowledge work since the printing press. I have made it a priority to develop deep practical competence in these technologies—not as a passive observer, but as an active practitioner.
            </p>
            <p>
              I was tech-savvy even before "vibe coding" became a term, and since embracing this approach, I have become a real "developer" with deep understanding of infrastructure and systems design.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">Technical Skills</h4>
                <p>My technical toolkit includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Programming Languages:</strong> JavaScript (including React ecosystem), Python, C++, MATLAB</li>
                  <li><strong>AI/Machine Learning:</strong> TensorFlow, Keras, PyTorch fundamentals, traditional ML algorithms</li>
                  <li><strong>Large Language Models:</strong> Extensive experience with prompt engineering, RAG architectures, fine-tuning approaches, and integration of LLMs into research and clinical workflows</li>
                  <li><strong>Full-Stack Development:</strong> Experience building web applications, APIs, and data pipelines</li>
                  <li><strong>Systems:</strong> Linux administration, cloud platforms, containerization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">AI in Science and Medicine</h4>
                <p>
                  I am particularly focused on how large language models and generative AI can augment scientific research—from literature review and hypothesis generation to data analysis and manuscript preparation. At the same time, I maintain a critical perspective on the limitations and risks of these technologies, particularly in high-stakes domains like medical diagnosis.
                </p>
                <p>
                  My work in this area is informed by the same principles that guide my Open Science advocacy: the belief that powerful technologies should be deployed transparently, that their limitations should be honestly acknowledged, and that their benefits should be broadly accessible rather than concentrated among a privileged few.
                </p>
              </div>
            </div>
          </div>
        }
        imagePosition="right"
      />

      {/* Teaching and Mentorship */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Teaching and Mentorship
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>
                Throughout my career, I have been committed to training the next generation of physicians and scientists. As a habilitated faculty member, I have supervised numerous doctoral candidates and taught extensively at the undergraduate and postgraduate levels. I am a certified instructor for animal research (FELASA Category D), reflecting my commitment to rigorous and ethical preclinical investigation.
              </p>
              <p>
                I have also contributed to science communication through freelance medical journalism, writing for publications including European Hospital and Hospital Post, and through countless invited lectures at academic institutions and professional conferences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition and Awards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Recognition and Awards
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-3">
                <li><strong>2015:</strong> "Excellent Place in the Land of Ideas" (Germany – Land of Ideas) for "Opening Science"</li>
                <li><strong>2013:</strong> Intervention Award, German Society of Neuroradiology (DGNR) for 4D Intervention Guidance</li>
                <li><strong>2009:</strong> Hans-Joachim Denecke Prize for Skull Base Navigation Research</li>
                <li><strong>2005:</strong> GE Coolidge Award for Flat-Panel CT Research</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Funding */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Research Funding
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>I have successfully secured competitive research funding from major national and international agencies:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>DFG Priority Program 1124: Medical Navigation and Robotics</li>
                <li>BMBF Innovation Competition 2007: Custom-fit for the Inner Ear</li>
                <li>German-Israeli Foundation: Novel Iodinated Nanoparticles for CT Imaging</li>
                <li>DFG Standard Grant (BA 3546/2-1): Image Reconstruction with Prior Information</li>
                <li>BMBF BIO-DISC 7: Multimodal Embolization Particles</li>
                <li>BMBF Research Campus M2OLIE</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Patents
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>My research has resulted in several patent applications and grants:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Multimodal Visible Polymer Embolization Material</strong> (PCT WO/2011/003902)</li>
                <li><strong>Method for 4D Radiological Intervention Guidance</strong> (PCT, national phases US/EU)</li>
                <li><strong>Cardiac Gating Method</strong> (DKFZ Invention P-810)</li>
                <li><strong>Dynamic Scientific Publication System</strong></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Professional Affiliations
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>
                I maintain active memberships in national and international professional societies, including radiological, interventional, and blockchain-focused organizations. I am a member of the German Blockchain Association and the European Blockchain Association, in addition to established medical societies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Personal Note */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              A Personal Note
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Looking back over two decades, I see a career shaped by restlessness—an unwillingness to accept that different domains must remain separate, that things must be done as they have always been done, or that significant problems cannot be addressed with creativity and persistence.
              </p>
              <p>
                Whether developing imaging technologies that help surgeons navigate the human body, advocating for open access to scientific knowledge, exploring how blockchain might transform research incentives, or learning to harness artificial intelligence for scientific discovery—the common thread has been a conviction that the boundaries between disciplines are often more permeable than we assume, and that the most interesting work happens at the intersections.
              </p>
              <p>
                I remain deeply curious about what comes next: how AI will reshape scientific practice, how decentralized technologies will mature, and how the ideals of Open Science will fare in an increasingly complex information landscape. I welcome conversations with those who share these interests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aviation & Space */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
              Aviation & Space
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                I am a passionate private pilot (single engine land) and space enthusiast. I have circled the Statue of Liberty in a rented Cessna Skyhawk and visited the first Starship launch in Boca Chica. While I am a low-hour pilot, I am deeply interested in space, rocket, and aviation technology and procedures.
              </p>
              <p>
                Although not IFR rated, I read many books on IFR procedures, and I love to read about the Apollo era space flight and vintage space. I am very happy that we can witness a new era of space exploration, after the relatively boring space shuttle era—"SCE TO AUX" :)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}

export default Home
