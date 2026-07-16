import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import ServiceFeatures from "../components/ServiceFeatures";
import SavedProducts from "../components/SavedProducts";
import PromoBanner from "../components/PromoBanner";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">
            My Cart ({items.length})
          </h1>

          {items.length === 0 ? (
            <div className="bg-white rounded-lg border p-12 text-center">
              <p className="text-lg text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400 mb-6">
                Looks like you haven't added anything yet.
              </p>
              <Link
                to="/products"
                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left */}
              <div className="lg:col-span-2">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}

                <div className="flex justify-between mt-4">
                  <Link
                    to="/products"
                    className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Back to shop
                  </Link>

                  <button
                    onClick={clearCart}
                    className="border px-5 py-2 rounded text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    Remove all
                  </button>
                </div>
              </div>

              {/* Right */}
              <CartSummary />
            </div>
          )}

          <ServiceFeatures />

          <SavedProducts />

          <PromoBanner />
        </div>
      </div>

      <Footer />
    </>
  );
}
