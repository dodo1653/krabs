import { useEffect, useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Vision', href: '#story' },
    { label: 'Token', href: '#token' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ]

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="absolute inset-0 border-b backdrop-blur-md" style={{ borderColor: 'rgba(255,255,255,0.03)', backgroundColor: 'rgba(0,0,0,0.2)' }} />
      <div className="relative max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-base font-semibold tracking-wider transition-all duration-300 hover:text-amber-400"
        >
          $KRABS
        </a>
        
        <div className="flex items-center gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-amber-400 group"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {item.label}
              <span 
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
