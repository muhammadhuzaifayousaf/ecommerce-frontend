// StarRating — displays filled/empty stars for a rating value (0–10 scale shown as 0–5 stars)
export default function StarRating({ rating, maxRating = 10, size = 'sm' }) {
  const stars = 5
  const filled = Math.round((rating / maxRating) * stars)
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-sm'

  return (
    <span className={`inline-flex items-center gap-0.5 ${sizeClass}`}>
      {Array.from({ length: stars }).map((_, i) => (
        <span key={i} className={i < filled ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      ))}
    </span>
  )
}
