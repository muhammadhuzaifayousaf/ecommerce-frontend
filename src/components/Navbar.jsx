import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingCart, User, MessageSquare, Package,
  Search, ChevronDown, Menu, X, ShoppingBag,
} from 'lucide-react'
import { navCategories } from '../data/products'
import ReactCountryFlag from "react-country-flag";

const getFlagEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );

// ── Brand Logo ─────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 flex-shrink-0">
      <div className="bg-primary rounded p-1.5">
        <ShoppingBag size={18} className="text-white" />
      </div>
      <span className="text-xl font-bold text-primary">Brand</span>
    </Link>
  )
}

// ── Search Bar ─────────────────────────────────────────────────────────────
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/products?q=${encodeURIComponent(query.trim())}`)
      onSearch?.()
    }
  }

  return (
    <div className="flex flex-1 max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Search"
        className="flex-1 border border-border-col border-r-0 rounded-l px-4 py-2 text-sm outline-none focus:border-primary"
      />
      <select className="border border-border-col border-r-0 px-2 py-2 text-sm bg-white text-text-secondary outline-none cursor-pointer">
        <option>All category</option>
        <option>Electronics</option>
        <option>Clothes</option>
        <option>Home</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-primary text-white px-5 py-2 rounded-r text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        Search
      </button>
    </div>
  )
}

// ── Desktop Icon Buttons ───────────────────────────────────────────────────
function IconBtn({ icon: Icon, label, to, badge }) {
  return (
    <Link to={to} className="flex flex-col items-center gap-0.5 text-text-secondary hover:text-primary transition-colors relative">
      {badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-danger text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
          {badge}
        </span>
      )}
      <Icon size={20} />
      <span className="text-[11px] leading-none">{label}</span>
    </Link>
  )
}

// ── Navbar ──────────────────────────────────────────────────────────────────
export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* ── Top bar: Logo | Search | Icons ── */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Logo />

        {/* Desktop search */}
        <div className="hidden md:flex flex-1">
          <SearchBar />
        </div>

        {/* Desktop icons */}
        <nav className="hidden md:flex items-center gap-6">
          <IconBtn icon={User}          label="Profile"  to="/"     />
          <IconBtn icon={MessageSquare} label="Message"  to="/"     />
          <IconBtn icon={Package}       label="Orders"   to="/"     />
          <IconBtn icon={ShoppingCart}  label="My cart"  to="/cart"  badge={cartCount} />
        </nav>

        {/* Mobile: cart icon only */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          <Link to="/cart" className="relative text-text-secondary">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-danger text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/" className="text-text-secondary">
            <User size={22} />
          </Link>
        </div>
      </div>

      {/* ── Mobile search ── */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar onSearch={() => setMobileOpen(false)} />
      </div>

      {/* ── Secondary nav bar (desktop) ── */}
      <div className="hidden md:flex border-t border-border-col">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary">
              <Menu size={16} /> All category
            </button>
            {navCategories.slice(1).map((cat) => (
              <Link
                key={cat}
                to="/products"
                className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
              >
                {cat}
                {cat === 'Help' && <ChevronDown size={12} />}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
  <button className="flex items-center gap-1 hover:text-primary">
    English, USD
    <ChevronDown size={12} />
  </button>

  <button className="flex items-center gap-1 hover:text-primary">
    {/* <span className="text-lg">{getFlagEmoji("US")}</span> */}
    Ship to <img
  src="https://flagcdn.com/w20/us.png"
  alt="USA"
  className="w-5 h-4 object-cover rounded-sm"
/>
    <ChevronDown size={12} />
  </button>
</div>
        </div>
      </div>

      {/* ── Mobile category chips ── */}
      <div className="md:hidden border-t border-border-col">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-2">
          {['All category', 'Gadgets', 'Clothes', 'Accessories', 'Electronics', 'Sports'].map((cat) => (
            <Link
              key={cat}
              to="/products"
              className="flex-shrink-0 text-sm text-primary font-medium whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile drawer menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-col px-4 py-3 space-y-3 shadow-lg">
          {navCategories.map((cat) => (
            <Link
              key={cat}
              to="/products"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-secondary hover:text-primary py-1 border-b border-border-col last:border-0"
            >
              {cat}
            </Link>
          ))}
          <Link to="/cart" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-sm text-text-secondary py-1">
            <ShoppingCart size={16} /> Cart ({cartCount})
          </Link>
        </div>
      )}
    </header>
  )
}
