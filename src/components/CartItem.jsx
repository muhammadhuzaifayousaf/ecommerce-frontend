import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between border rounded-lg p-4 mb-4 bg-white">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-contain border rounded"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-500 text-sm">
            Size: {item.size || "N/A"}, Color: {item.color || "N/A"}, Material: {item.material || "N/A"}
          </p>
          <p className="text-gray-500 text-sm">Seller: {item.seller || "N/A"}</p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => removeItem(item.id)}
              className="px-3 py-1 text-red-500 border rounded hover:bg-red-50 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 flex md:flex-col items-center gap-4">
        <p className="font-bold text-xl">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQty(item.id, item.qty - 1)}
            disabled={item.qty <= 1}
            className="w-8 h-8 border rounded flex items-center justify-center text-lg font-bold hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.qty}</span>
          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
            className="w-8 h-8 border rounded flex items-center justify-center text-lg font-bold hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
