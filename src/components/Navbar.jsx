import { useEffect, useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [launchLive, setLaunchLive] = useState(true)

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
    <>
      {launchLive && (
        <div className="fixed top-0 left-0 right-0 z-[60] py-3 text-center font-bold text-lg" style={{ 
          background: 'linear-gradient(90deg, #16a34a, #22c55e)', 
          color: 'white',
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.5), 0 4px 20px rgba(0,0,0,0.3)',
          animation: 'glow 2s ease-in-out infinite alternate'
        }}>
          <span className="inline-flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="tracking-wider">🎉 CA IS LIVE: 0x1234...5678</span>
          </span>
          <style>{`
            @keyframes glow {
              from { box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 4px 20px rgba(0,0,0,0.3); }
              to { box-shadow: 0 0 40px rgba(34, 197, 94, 0.7), 0 4px 20px rgba(0,0,0,0.3); }
            }
          `}</style>
        </div>
      )}
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        style={{ 
          opacity: visible ? 1 : 0,
          marginTop: launchLive ? '32px' : '0',
        }}
      >
      <div 
        className="flex items-center gap-1 px-2 py-1.5 rounded-full backdrop-blur-xl"
        style={{ 
          backgroundColor: 'rgba(10, 10, 10, 0.6)', 
        }}
      >
        <a 
          href="#hero" 
          className="px-4 py-1.5 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-amber-500/20"
          style={{ background: 'linear-gradient(135deg, #fbbf24, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          $KRABS
        </a>
        
        <div className="w-px h-4 mx-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-1.5 text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:text-amber-400 hover:bg-amber-500/10"
            style={{ color: 'rgba(254, 254, 254, 0.6)' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
    </>
  )
}

export default Navbar
