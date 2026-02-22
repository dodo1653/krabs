import { useEffect, useRef, useState } from 'react'

const Token = () => {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  const CA = "81ZjC8zjcTyFkppkPCqdCUi2Xtd99GEbihzpN2k2pump"

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section ref={ref} className="py-20 md:py-24" style={{ backgroundColor: 'var(--color-terminal-surface)' }}>
      <div className="terminal-container">
        <div 
          className="text-center mb-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)' }}
        >
          <p className="label mb-3">Token</p>
          <h2 className="text-2xl sm:text-3xl font-medium">$JAWAD</h2>
        </div>

        <div 
          className="max-w-xl mx-auto transition-all duration-700 delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <div className="p-5 border mb-6 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 border" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-text-muted)' }}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-7.5v-5l4.5 2.5-4.5 2.5z"/></svg>
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Contract Address</p>
                <p className="text-xs font-mono" style={{ color: 'var(--color-text-secondary)' }}>{CA.slice(0, 20)}...{CA.slice(-8)}</p>
              </div>
            </div>
            <button onClick={copyCA} className="px-3 py-1.5 border text-xs transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-8">
            <div className="p-4 border text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <svg className="w-5 h-5 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Network</p>
              <p className="text-sm">Solana</p>
            </div>
            <div className="p-4 border text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <svg className="w-5 h-5 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/></svg>
              <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Type</p>
              <p className="text-sm">SPL</p>
            </div>
            <div className="p-4 border text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <svg className="w-5 h-5 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Status</p>
              <p className="text-sm">Active</p>
            </div>
            <div className="p-4 border text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <svg className="w-5 h-5 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Purpose</p>
              <p className="text-sm">Awareness</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <a href={`https://pump.fun/coin/${CA}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border text-xs transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-7.5v-5l4.5 2.5-4.5 2.5z"/></svg>
              Pump.fun
            </a>
            <a href={`https://dexscreener.com/solana/${CA}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border text-xs transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>
              DexScreener
            </a>
            <a href={`https://solscan.io/token/${CA}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border text-xs transition-all hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Solscan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Token