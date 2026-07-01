import { Link } from 'react-router-dom'
import { ShoppingBag, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import ReactCountryFlag from "react-country-flag";

const getFlagEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );

const footerCols = [
  {
    title: 'About',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Partnership',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Information',
    links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'],
  },
  {
    title: 'For users',
    links: ['Login', 'Register', 'Settings', 'My Orders'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-col mt-8">
      {/* Newsletter */}
      <div className="bg-bg-light border-b border-border-col">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h3 className="font-semibold text-text-primary mb-1">Subscribe on our newsletter</h3>
          <p className="text-sm text-text-muted mb-4">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <div className="flex justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-border-col rounded-l px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="btn-primary rounded-l-none px-6">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-primary rounded p-1.5">
                <ShoppingBag size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-primary">Brand</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="text-text-muted hover:text-primary transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-text-primary mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-sm text-text-muted hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get app */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3 text-sm">Get app</h4>
            <div className="space-y-2">
  <a href="#">
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="App Store"
      className="w-32"
    />
  </a>

  <a href="#">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Google Play"
      className="w-32"
    />
  </a>
</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-col">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-text-muted">© 2023 Ecommerce.</p>
          <button className="text-xs text-text-muted flex items-center gap-1 hover:text-primary">
  <img
  src="https://flagcdn.com/w20/us.png"
  alt="USA"
  className="w-5 h-4 object-cover rounded-sm"
/>
  English
  <span>▲</span>
</button>
        </div>
      </div>
    </footer>
  )
}
