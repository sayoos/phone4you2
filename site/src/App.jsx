import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Features from './components/Features'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Results />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
