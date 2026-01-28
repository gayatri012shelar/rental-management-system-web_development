/* src/components/search/FiltersModal.jsx */
import { useState } from "react";

export default function FiltersModal({ onClose }) {
  const [price, setPrice] = useState(2500);
  const [rooms, setRooms] = useState(4);
  const [type, setType] = useState("villa");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[640px] max-h-[85vh] rounded-lg shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="relative px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-center">
          Filter Your Search
        </h2>

        <button
          onClick={onClose}
          className="absolute right-6 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          ✕
        </button>
      </div>

        {/* BODY (scrollable) */}
        <div className="px-6 py-4 space-y-4 text-sm overflow-y-auto max-h-[65vh]">

          {/* PRICE */}
          <section>
            <p className="font-medium mb-2 text-sm">Price Range</p>

            <input
              type="range"
              min={0}
              max={5000}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ "--value": `${(price / 5000) * 100}%` }}
              className="w-full"
            />


            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹0</span>
              <span>₹5000</span>
            </div>
          </section>

          {/* PROPERTY TYPE */}
          <section>
            <p className="font-medium mb-2 text-sm">Property Type</p>

            <div className="flex gap-6 text-sm">
              {["villa", "apartment", "homestay"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio" className="accent-black"
                    checked={type === item}
                    onChange={() => setType(item)}
                  />
                  {item === "homestay" ? "Home Stay" : item[0].toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>
          </section>

          {/* ROOMS */}
          <section className="flex items-center justify-between">
            <p className="font-medium text-sm">Number of Rooms</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
              >
                −
              </button>

              <span className="w-6 text-center text-sm font-medium">
                {rooms}
              </span>

              <button
                onClick={() => setRooms(rooms + 1)}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </section>

          {/* POPULAR CATEGORY */}
          <section>
            <p className="font-medium mb-2 text-sm">Popular Category</p>

            <div className="flex gap-8 text-sm">
              {["Pool", "Pure Veg", "Pet Friendly"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-400 accent-black" />
                  {item}
                </label>
              ))}
            </div>
          </section>

          {/* AMENITIES */}
          <section>
            <p className="font-medium mb-2 text-sm">Amenities</p>

            <div className="grid grid-cols-3 gap-y-3 gap-x-8 text-sm">
              {["Refrigerator", "RO Purifier", "AC", "TV", "WiFi"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-400 accent-black"/>
                  {item}
                </label>
              ))}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-6 py-4 border-t">
          <button className="px-8 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50">
            Clear
          </button>

          <button className="bg-black text-white px-12 py-2.5 rounded-full text-sm">
            Apply
          </button>
        </div>

      </div>
    </div>
  );
}
