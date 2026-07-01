import { savedProducts } from "../data/cartData";

export default function SavedProducts() {
  return (
    <div className="bg-white border rounded-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Saved for later
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {savedProducts.map((product) => (

          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-contain"
            />

            <h3 className="font-bold mt-4">
              ${product.price}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {product.name}
            </p>

            <button className="mt-4 w-full border border-blue-600 text-blue-600 rounded py-2 hover:bg-blue-600 hover:text-white">
              Move to cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}