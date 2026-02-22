import { useEffect, useRef, useState } from 'react'
import storyImage from '../assets/HBw_X0WbYAAGbq3.jpg'
import storyImage2 from '../assets/jawad2.jpg'

const Story = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="story" className="py-20 md:py-24" style={{ backgroundColor: 'var(--color-terminal-bg)' }}>
      <div className="terminal-container">
        <div 
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)' }}
        >
          <p className="label mb-3">The Story</p>
          <h2 className="text-2xl sm:text-3xl font-medium">A Name That Echoes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className="transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <img src={storyImage} alt="" className="w-full aspect-square object-cover" style={{ filter: 'grayscale(50%) brightness(0.8)' }} />
          </div>
          <div 
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <img src={storyImage2} alt="" className="w-full aspect-square object-cover" style={{ filter: 'grayscale(50%) brightness(0.8)' }} />
          </div>
        </div>

        <div 
          className="max-w-2xl mx-auto text-center transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Jawad is not just a name. It represents every child whose morning begins with uncertainty instead of peace. 
            Every family displaced, every voice drowned out by the noise of the world.
          </p>
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Behind every statistic is a human being. Behind every headline, a story. Behind every number, a name.
            Jawad stands for all of them—the ones we scroll past, the ones we sometimes forget to remember.
          </p>
          <p className="text-sm italic" style={{ color: 'var(--color-text-muted)' }}>
            This is about presence, not politics. Humanity, not headlines.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story