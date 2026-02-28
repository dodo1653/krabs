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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ 
        opacity: visible ? 1 : 0,
      }}
    >
      <div 
        className="flex items-center gap-1 px-1 py-1 rounded-full backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <a 
          href="#hero" 
          className="px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-white/10"
        >
          $KRABS
        </a>
        
        <div className="w-px h-4 mx-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
