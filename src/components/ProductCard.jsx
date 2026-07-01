import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import { img, formatPrice } from '../utils/helpers'

// ── Grid Card ──────────────────────────────────────────────────────────────
function GridCard({ product, onWishlist, wishlisted }) {
  return (
    <div className="product-card overflow-hidden group relative">
      {/* Wishlist button */}
      <button
        onClick={(e) => { e.preventDefault(); onWishlist(product.id) }}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow"
        aria-label="Save to wishlist"
      >
        <Heart
          size={16}
          className={wishlisted ? 'fill-danger text-danger' : 'text-text-muted'}
        />
      </button>

      <Link to={`/products/${product.id}`}>
        {/* Product image */}
        <div className="aspect-square bg-bg-light flex items-center justify-center overflow-hidden">
          <img
            src={img(product.image)}
            alt={product.name}
            className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.src = `https://placehold.co/300x300/f7f7f7/999?text=Image` }}
          />
        </div>

        {/* Info */}
        <div className="p-3">
          {/* Price row */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={product.rating} />
            <span className="text-xs text-text-muted">{product.rating}</span>
          </div>

          {/* Name */}
          <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-snug">
            {product.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

// ── List Card ──────────────────────────────────────────────────────────────
function ListCard({ product, onWishlist, wishlisted }) {
  return (
    <div className="product-card p-4 flex gap-4">
      <Link to={`/products/${product.id}`} className="flex-shrink-0">
        <div className="w-32 h-32 bg-bg-light rounded overflow-hidden flex items-center justify-center">
          <img
            src={img(product.image)}
            alt={product.name}
            className="object-contain w-full h-full p-2"
            onError={(e) => { e.target.src = `https://placehold.co/200x200/f7f7f7/999?text=Image` }}
          />
        </div>
      </Link>

      <div className="flex-1 min-w-0">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-text-primary hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price + rating */}
        <div className="flex items-center gap-3 mt-1">
          <span className="font-semibold text-lg text-text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-text-muted line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-sm text-text-muted">{product.rating}</span>
          <span className="text-text-muted">•</span>
          <span className="text-sm text-text-muted">{product.orders} orders</span>
          {product.freeShipping && (
            <span className="text-sm text-success font-medium">Free Shipping</span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mt-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <Link to={`/products/${product.id}`}>
          <span className="text-sm text-primary hover:underline mt-1 inline-block">View details</span>
        </Link>
      </div>

      {/* Right: wishlist */}
      <button
        onClick={() => onWishlist(product.id)}
        className="flex-shrink-0 self-start p-1"
        aria-label="Save to wishlist"
      >
        <Heart
          size={18}
          className={wishlisted ? 'fill-danger text-danger' : 'text-text-muted hover:text-danger'}
        />
      </button>
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────
export default function ProductCard({ product, mode = 'grid', wishlistIds = [], onWishlist = () => {} }) {
  const wishlisted = wishlistIds.includes(product.id)

  return mode === 'grid'
    ? <GridCard product={product} onWishlist={onWishlist} wishlisted={wishlisted} />
    : <ListCard product={product} onWishlist={onWishlist} wishlisted={wishlisted} />
}
