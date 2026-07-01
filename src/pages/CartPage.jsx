import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import ServiceFeatures from "../components/ServiceFeatures";
import SavedProducts from "../components/SavedProducts";
import DiscountBanner from "../components/DiscountBanner";

import cartItems from "../data/cartData";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-8">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-3xl font-bold mb-6">
            My Cart ({cartItems.length})
          </h1>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left */}

            <div className="lg:col-span-2">

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}

              <div className="flex justify-between mt-4">

                <button className="bg-blue-600 text-white px-5 py-2 rounded">
                  Back to shop
                </button>

                <button className="border px-5 py-2 rounded text-red-500">
                  Remove all
                </button>

              </div>

            </div>

            {/* Right */}

            <CartSummary items={cartItems} />

          </div>

          <ServiceFeatures />

          <SavedProducts />

          <DiscountBanner />

        </div>

      </div>

      <Footer />
    </>
  );
}