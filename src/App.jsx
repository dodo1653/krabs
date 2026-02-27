import Hero from './components/Hero'
import Story from './components/Story'
import Token from './components/Token'
import Support from './components/Support'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Token />
      <Support />
      <Footer />
    </div>
  )
}

export default App
