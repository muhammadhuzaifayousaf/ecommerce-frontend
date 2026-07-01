import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LayoutGrid, List, SlidersHorizontal, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterSidebar from '../components/FilterSidebar'
import ProductCard from '../components/ProductCard'
import { products, initialCartItems } from '../data/products'

// ── Active filter chip ─────────────────────────────────────────────────────
function FilterChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 border border-border-col rounded px-2 py-0.5 text-sm text-text-secondary bg-white">
      {label}
      <button onClick={onRemove} className="text-text-muted hover:text-danger ml-0.5">
        <X size={12} />
      </button>
    </span>
  )
}

// ── Pagination ─────────────────────────────────────────────────────────────
function Pagination({ currentPage, totalPages, onChange }) {
  return (
    <div className="flex items-center justify-end gap-1 mt-6">
      <span className="text-sm text-text-muted mr-2">
        Show
        <select className="border border-border-col rounded px-2 py-1 text-sm ml-1 mr-1 bg-white">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </span>
      <button
        onClick={() => onChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-1 border border-border-col rounded hover:bg-bg-light disabled:opacity-40"
      >
        <ChevronLeft size={14} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-8 h-8 rounded border text-sm font-medium transition-colors ${
            p === currentPage
              ? 'bg-primary text-white border-primary'
              : 'border-border-col text-text-secondary hover:bg-bg-light'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-1 border border-border-col rounded hover:bg-bg-light disabled:opacity-40"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  )
}

// ── Product Listing Page ───────────────────────────────────────────────────
export default function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const [viewMode, setViewMode]           = useState('grid')   // 'grid' | 'list'
  const [sortBy, setSortBy]               = useState('featured')
  const [verifiedOnly, setVerifiedOnly]   = useState(false)
  const [wishlistIds, setWishlistIds]     = useState([])
  const [currentPage, setCurrentPage]     = useState(1)
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const [filters, setFilters] = useState({
    brands: [],
    features: [],
    categories: [],
    ratings: [],
    condition: 'Any',
    price: { min: 0, max: 999999 },
  })

  const ITEMS_PER_PAGE = 9

  // ── Apply filters ──
  const filtered = useMemo(() => {
    let list = [...products]

    if (query) {
      const q = query.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    if (filters.brands.length)
      list = list.filter((p) => filters.brands.includes(p.brand))
    if (filters.categories.length)
      list = list.filter((p) => filters.categories.includes(p.category))
    if (verifiedOnly)
      list = list.filter((p) => p.seller.includes('Artel'))

    list = list.filter(
      (p) => p.price >= filters.price.min && p.price <= filters.price.max
    )

    switch (sortBy) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price);  break
      case 'price-desc': list.sort((a, b) => b.price - a.price);  break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      default: break
    }

    return list
  }, [query, filters, sortBy, verifiedOnly])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated  = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const toggleWishlist = (id) =>
    setWishlistIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

  // Active filter chips
  const activeChips = [
    ...filters.brands.map((b)    => ({ label: b,    key: 'brands',     val: b })),
    ...filters.features.map((f)  => ({ label: f,    key: 'features',   val: f })),
    ...filters.categories.map((c)=> ({ label: c,    key: 'categories', val: c })),
  ]

  const removeChip = ({ key, val }) => {
    setFilters((prev) => ({ ...prev, [key]: prev[key].filter((v) => v !== val) }))
  }

  const clearAll = () =>
    setFilters({ brands: [], features: [], categories: [], ratings: [], condition: 'Any', price: { min: 0, max: 999999 } })

  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar cartCount={initialCartItems.length} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-text-muted">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-text-primary">Mobile accessory</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex gap-5">
          {/* ── Sidebar (desktop) ── */}
          <div className="hidden md:block w-60 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>

          {/* ── Mobile filter drawer ── */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div className="bg-black/40 flex-1" onClick={() => setShowMobileFilter(false)} />
              <div className="w-72 bg-white overflow-y-auto p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Filters</span>
                  <button onClick={() => setShowMobileFilter(false)}><X size={18} /></button>
                </div>
                <FilterSidebar filters={filters} onChange={setFilters} />
              </div>
            </div>
          )}

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded border border-border-col p-3 flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-sm text-text-muted">
                  <strong className="text-text-primary">12,911</strong> items in{' '}
                  <strong className="text-text-primary">Mobile accessory</strong>
                </span>
                <label className="flex items-center gap-1.5 text-sm text-text-secondary cursor-pointer ml-auto sm:ml-0">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="accent-primary"
                  />
                  Verified only
                </label>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border-col rounded px-3 py-1.5 text-sm bg-white outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                </select>

                {/* Grid/List toggle */}
                <div className="flex border border-border-col rounded overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-text-muted hover:bg-bg-light'}`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 ${viewMode === 'list' ? 'bg-primary text-white' : 'text-text-muted hover:bg-bg-light'}`}
                    aria-label="List view"
                  >
                    <List size={16} />
                  </button>
                </div>

                {/* Mobile filter button */}
                <button
                  className="md:hidden flex items-center gap-1 text-sm text-text-secondary border border-border-col rounded px-3 py-1.5"
                  onClick={() => setShowMobileFilter(true)}
                >
                  <SlidersHorizontal size={14} /> Filter
                </button>
              </div>
            </div>

            {/* Active filter chips */}
            {activeChips.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {activeChips.map((chip, i) => (
                  <FilterChip key={i} label={chip.label} onRemove={() => removeChip(chip)} />
                ))}
                <button onClick={clearAll} className="text-sm text-primary hover:underline">
                  Clear all filter
                </button>
              </div>
            )}

            {/* Products */}
            {paginated.length === 0 ? (
              <div className="bg-white rounded border border-border-col p-12 text-center text-text-muted">
                <p className="text-lg mb-1">No products found</p>
                <p className="text-sm">Try adjusting your filters or search query</p>
                <button onClick={clearAll} className="btn-primary mt-4">Clear all filters</button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {paginated.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    mode="grid"
                    wishlistIds={wishlistIds}
                    onWishlist={toggleWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {paginated.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    mode="list"
                    wishlistIds={wishlistIds}
                    onWishlist={toggleWishlist}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={(p) => { setCurrentPage(p); window.scrollTo(0, 0) }}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
