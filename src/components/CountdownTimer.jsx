import { useState, useEffect } from 'react'

// Target: 4 days + 13:34:56 from first render (demo only — reset on page load)
const DURATION_MS = (4 * 86400 + 13 * 3600 + 34 * 60 + 56) * 1000

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(DURATION_MS)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1000, 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const days    = Math.floor(remaining / 86400000)
  const hours   = Math.floor((remaining % 86400000) / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  const pad = (n) => String(n).padStart(2, '0')

  const Unit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white rounded px-2 py-1 min-w-[40px]">
      <span className="text-sm font-bold text-text-primary leading-none">{pad(value)}</span>
      <span className="text-[10px] text-text-muted mt-0.5">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center gap-1">
      <Unit value={days}    label="Days" />
      <span className="text-text-muted font-bold text-sm">:</span>
      <Unit value={hours}   label="Hour" />
      <span className="text-text-muted font-bold text-sm">:</span>
      <Unit value={minutes} label="Min"  />
      <span className="text-text-muted font-bold text-sm">:</span>
      <Unit value={seconds} label="Sec"  />
    </div>
  )
}
