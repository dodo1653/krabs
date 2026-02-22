import Hero from './components/Hero'
import Story from './components/Story'
import Token from './components/Token'
import WhyItMatters from './components/WhyItMatters'
import Support from './components/Support'
import Community from './components/Community'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <Token />
      <WhyItMatters />
      <Support />
      <Community />
      <CTA />
      <Footer />
    </div>
  )
}

export default App