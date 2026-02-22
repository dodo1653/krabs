import { useEffect, useRef, useState } from 'react'

const Support = () => {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  const USDT_ADDRESS = "TKwAgK9dFsFi2g43VW2kHdBs2XZDmZEgvu"
  const TX_HASH = "fe51d9b3f6374b96aa357a5162e77f1af3380120c4f51c4917340e2c7ab8fdc3"

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const copyAddress = () => {
    navigator.clipboard.writeText(USDT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section ref={ref} id="support" className="py-20 md:py-24" style={{ backgroundColor: 'var(--color-terminal-bg)' }}>
      <div className="terminal-container">
        <div 
          className="text-center mb-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)' }}
        >
          <p className="label mb-3">Support Gaza</p>
          <h2 className="text-2xl sm:text-3xl font-medium mb-3">Direct Aid to Families</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Verified relief campaigns providing humanitarian aid directly to those who need it most.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <a href="https://donate.khairchallenge.com/" target="_blank" rel="noopener noreferrer" className="p-6 border text-center transition-all hover:bg-white/5 group" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <img src="https://donate.khairchallenge.com/storage/logo.png" alt="Khair Challenge" className="h-10 mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <p className="text-sm font-medium mb-1">Khair Challenge</p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Verified Gaza Relief</p>
          </a>

          <a href="https://khairchallenge.ensany.com/campaign/7616/donation/no" target="_blank" rel="noopener noreferrer" className="p-6 border text-center transition-all hover:bg-white/5 group" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <svg className="w-10 h-10 mx-auto mb-3 transition-colors" style={{ color: 'var(--color-text-muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
            </svg>
            <p className="text-sm font-medium mb-1">PayPal / Card</p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Global Payment</p>
          </a>

          <div className="p-6 border text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <svg className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--color-text-muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"/>
            </svg>
            <p className="text-sm font-medium mb-1">USDT (TRC20)</p>
            <button onClick={copyAddress} className="text-xs transition-colors hover:text-white" style={{ color: 'var(--color-text-muted)' }}>
              {copied ? '✓ Address Copied' : '[ Copy Wallet Address ]'}
            </button>
          </div>
        </div>

        <div 
          className="max-w-lg mx-auto p-5 border transition-all duration-700 delay-200"
          style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)', opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 border flex-shrink-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium mb-1">Proof of Validity</p>
              <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                Verified on-chain transaction demonstrating our commitment to transparency and accountability.
              </p>
              <a href={`https://tronscan.org/#/transaction/${TX_HASH}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white" style={{ color: 'var(--color-text-muted)' }}>
                <span>View Transaction</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div 
          className="mt-10 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <p className="text-xs text-center mb-4" style={{ color: 'var(--color-text-muted)' }}>Connect With Us</p>
          <div className="flex justify-center gap-3">
            <a href="https://x.com/i/communities/2025543066569056377" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="X Community">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com/kha_irchallenge" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/970569060016" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://tiktok.com/@khairchallenge" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            </a>
            <a href="https://youtube.com/@alkhairchallenge" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://facebook.com/khairChallenge" target="_blank" rel="noopener noreferrer" className="p-3 border transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }} title="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support