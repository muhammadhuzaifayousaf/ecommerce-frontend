import { useState } from "react";

export default function CartItem({ item }) {
  const [qty, setQty] = useState(item.qty);

  return (
    <div className="flex flex-col md:flex-row justify-between border rounded-lg p-4 mb-4 bg-white">

      <div className="flex gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-contain border rounded"
        />

        <div>

          <h3 className="font-semibold text-lg">
            {item.name}
          </h3>

          <p className="text-gray-500 text-sm">
            Size: {item.size}, Color: {item.color}, Material: {item.material}
          </p>

          <p className="text-gray-500 text-sm">
            Seller: {item.seller}
          </p>

          <div className="mt-3 flex gap-2">

            <button className="px-3 py-1 text-red-500 border rounded hover:bg-red-50">
              Remove
            </button>

            <button className="px-3 py-1 text-blue-500 border rounded hover:bg-blue-50">
              Save for later
            </button>

          </div>

        </div>

      </div>

      <div className="mt-4 md:mt-0 flex md:flex-col items-center gap-4">

        <p className="font-bold text-xl">
          ${item.price.toFixed(2)}
        </p>

        <select
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {[1,2,3,4,5,6,7,8,9,10].map(number=>(
            <option key={number}>
              {number}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}