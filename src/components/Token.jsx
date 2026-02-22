import { useEffect, useRef, useState } from 'react'

const Token = () => {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  const CA = "81ZjC8zjcTyFkppkPCqdCUi2Xtd99GEbihzpN2k2pump"

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="token" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-terminal-surface)' }}>
      <div className="terminal-container">
        <div 
          className="transition-all duration-700 ease-out mb-12"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
        >
          <p className="label">// 02 — Token Info</p>
        </div>

        <div className="max-w-2xl">
          <div 
            className="transition-all duration-700 ease-out delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">$JAWAD</h2>
          </div>

          <div 
            className="transition-all duration-700 ease-out delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <div className="mb-4">
              <p className="label mb-2">Contract Address</p>
              <div className="flex items-center gap-4">
                <p className="text-sm break-all" style={{ color: 'var(--color-text-secondary)' }}>{CA}</p>
                <button 
                  onClick={copyCA}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  [{copied ? 'copied' : 'copy'}]
                </button>
              </div>
            </div>
          </div>

          <div 
            className="divider my-6 transition-all duration-700 ease-out delay-200"
            style={{ opacity: visible ? 1 : 0 }}
          />

          <div 
            className="transition-all duration-700 ease-out delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="label mb-1">Network</p>
                <p className="text-sm">Solana</p>
              </div>
              <div>
                <p className="label mb-1">Type</p>
                <p className="text-sm">SPL Token</p>
              </div>
              <div>
                <p className="label mb-1">Status</p>
                <p className="text-sm">Active</p>
              </div>
              <div>
                <p className="label mb-1">Purpose</p>
                <p className="text-sm">Awareness</p>
              </div>
            </div>
          </div>

          <div 
            className="divider my-6 transition-all duration-700 ease-out delay-300"
            style={{ opacity: visible ? 1 : 0 }}
          />

          <div 
            className="flex gap-6 transition-all duration-700 ease-out delay-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(15px)' : 'translateY(15px)' }}
          >
            <a 
              href={`https://pump.fun/coin/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Pump.fun →
            </a>
            <a 
              href={`https://dexscreener.com/solana/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}
            >
              DexScreener →
            </a>
            <a 
              href={`https://solscan.io/token/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Solscan →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Token