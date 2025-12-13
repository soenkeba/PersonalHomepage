import { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import SectionCard from './SectionCard'
import ImageCarousel from './ImageCarousel'
import Contact from './Contact'

const Home = () => {
  useEffect(() => {
    // Scroll to top when Home component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Hero />
      <About />
      <SectionCard
        title="Radiology"
        image="/assets/img/SoenkeRadiology.png"
        imageAlt="Radiology"
        content={
          <p>
            I´m a German board-certified radiologist, university hospital attending level trained with experiences in Neuroimaging, whole-body MRI incl. cardiac-MRI, as well as interventional radiology. I have worked in 25 different setups
            ranging from private practices through community hospitals, including three university hospitals in Germany, Switzerland, and the USA. I prefer the inspiring environment of a university hospital, the thrill of emergency
            interventions, and the interactions with residents and students over other setups. I contentiously restructure our profession's culture to adopt to the demands of Generation Y and digitization. Currently, I freelance in private practices. I´m member of several national and international radiological and interventional societies.
          </p>
        }
        imagePosition="left"
      />
      <SectionCard
        title="Blockchain For Science"
        image="/assets/img/IMG_0478.jpg"
        imageAlt="Blockchain For Science"
        content={
          <p>
            I was always interested in what novel online technologies can do for research, science communication, and open science; I was involved in the early stages of the Web 2.0 revolution in science as my friends founded <a href="https://www.researchgate.net" className="text-primary hover:underline">ResearchGate</a>.
            I edited a living book on <a href="http://www.openingscience.org/get-the-book/" className="text-primary hover:underline">'Opening Science"</a>, which became SpringerNature´s <a href="https://twitter.com/hiig_berlin/status/1059371213561180162?s=20" className="text-primary hover:underline">most downloaded book</a>.
            And after falling down the bitcoin rabbit hole, I founded a thinktank around all <a href="http://www.blockchainforscience.com/" className="text-primary hover:underline">Blockchain For Science</a> and published the <a href="https://zenodo.org/record/60223" className="text-primary hover:underline">first full-blown paper</a> around
            the potential of blockchain for research and innovation in 2016. I became a trailblazer of the decentralized future of research, creating and organizing the <a href="http://www.blockchainforsciencecon.com/" className="text-primary hover:underline">International conference on Blockchain For Science, Research and Knowledge Creation</a> series.
            I see the blockchain revolution as a means to break with artificial and unnecessary constraints that limit the flow of information and great ideas as well as overhead reduction in the research culture. Currently, I´m passionate
            about kickstarting the <a href="https://medium.com/blockchainforscience/the-emerging-crypteconomy-for-science-and-knowledge-creation-6cfe2a79f514" className="text-primary hover:underline">emerging crypto-economy for research</a> with its open and onboarding business
            models, and unconstrained data flows as well as new access paradigms around data and privacy. My work influenced and I consult research institutes (e.g. dkfz, KIT, CODE university), research infrastructure providers
            (e.g. Max-Planck Digital library), publisher/science associations (SpringerNature, science europe, Alexander von Humboldt assoc, UNESCO, NFAIS) and companies (e.g. BASF, Roche). I´m member of the European as well as German
            Blockchain associations. I was invited by companies as well as well-know research institutes (e.g. <a href="https://www.youtube.com/watch?v=-MnDC_1LCn4" className="text-primary hover:underline">IST Austria</a>) to talk about the blockchain future of science.
            My interviews were featured on 3sat, Handelsblatt, WIRED, ZDF, as well as several online news channels. I´m the chief speciality editor of the <a href="https://www.frontiersin.org/journals/blockchain/sections/blockchain-for-science" className="text-primary hover:underline">Blockchain For Science section of Frontiers</a>.
          </p>
        }
        imagePosition="right"
      />
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageCarousel />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Science: Basic Medical imaging research</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  I´m doing moonshot research, with potential high gains, but also more moon rocky roads towards the next publication and grant application. Amidst <a href="http://www.ajnr.org/content/25/8/1417.short" className="text-primary hover:underline">my doctoral thesis</a> in
                  which I researched applications of flat-panel-based Volume-CT in the head and skull base region, I discovered that the position of cochlear implants <a href="https://journals.lww.com/otology-neurotology/Abstract/2006/06000/Flat_Panel_Volume_Computed_Tomography_for_Cochlear.10.aspx" className="text-primary hover:underline">can be evaluated with respect to the basal lamina using flat-panel-CT</a> - a method that is routinely used in clinical setups today. I discovered that there is navigatable <a href="https://journals.lww.com/otology-neurotology/Abstract/2008/02000/A_True_Minimally_Invasive_Approach_for_Cochlear.5.aspx" className="text-primary hover:underline">drilling access to the cochlea</a> and <a href="https://journals.lww.com/otology-neurotology/Abstract/2007/01000/Increase_of_Accuracy_in_Intraoperative_Navigation.22.aspx" className="text-primary hover:underline">we performed the world´s first </a><a href="https://europepmc.org/article/med/17713878" className="text-primary hover:underline">truly minimal cochleostomy</a> in Hannover Medical school using flat-panel CT in a preclinical setup. <a href="https://pubs.acs.org/doi/abs/10.1021/nl101019s" className="text-primary hover:underline">After excursions into molecular (CT) imaging</a>, <a href="https://journals.lww.com/investigativeradiology/Abstract/2007/10000/Retrospective_Motion_Gating_in_Small_Animal_CT_of.7.aspx" className="text-primary hover:underline">I programmed a retrospective gating method for small-animal cardiac-CT-imaging</a>,
                  allowing functional analysis in preclinical studies. Furthermore, I developed and tested the <a href="https://journals.lww.com/investigativeradiology/Abstract/2011/03000/First_Multimodal_Embolization_Particles_Visible_on.5.aspx" className="text-primary hover:underline">first multimodal visible embolization particles</a> in a preclinical setting. I realized that a continuous rotating flat-panel CT might be a great <a href="https://arxiv.org/pdf/1610.02959v2.pdf" className="text-primary hover:underline">setup for intervention guidance in the future</a>, <a href="https://link.springer.com/article/10.1007/s00330-012-2761-2" className="text-primary hover:underline">potentially providing for the first time real 4D (3D + t) data sets</a>.
                  <a href="https://iopscience.iop.org/article/10.1088/0031-9155/58/10/3283/meta" className="text-primary hover:underline">I produced very early, basic results on this potentially revolutionary prospect</a>. Today, I m working with Prof. Kachelrieß (dkfz) on
                  making 4D intervention guidance in interventional radiology a reality in the 2020s. My tasks shifted from basic research towards guiding its integration into current interventional radiology. I wrote several patent (applications),
                  have some high-ranking publications and won several prices and awards. I m reviewer of several journals and worked on <a href="https://www.icrp.org/publication.asp?id=ICRP%20Publication%20129" className="text-primary hover:underline">international regulatory policy.</a>
                </p>
                <div className="text-center mt-8">
                  <a href="https://www.researchgate.net/profile/Soenke_Bartling">
                    <img src="https://www.researchgate.net/images/public/profile_share_badge.png" alt="ResearchGate" className="inline-block" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default Home

