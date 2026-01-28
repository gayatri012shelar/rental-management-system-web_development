/* src/components/BookingCard.jsx */
import { useState } from "react";

export default function BookingCard({ price }) {
  const [adults, setAdults] = useState(12);
  const [children, setChildren] = useState(2);
  const [pets, setPets] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 space-y-5">

      {/* PACKAGE */}
      <div className="text-sm">
        <p className="text-gray-500">Package</p>
        <p className="font-medium">All meals included</p>
      </div>

      {/* DATES */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Check-in</p>
          <p className="font-medium">17 Jun 2025</p>
        </div>
        <div>
          <p className="text-gray-500">Check-out</p>
          <p className="font-medium">19 Jun 2025</p>
        </div>
      </div>

      {/* ADULTS */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Adults</p>
          <p className="text-xs text-gray-500">Age 12 and above</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
          <span>{adults}</span>
          <button onClick={() => setAdults(adults + 1)}>+</button>
        </div>
      </div>

      {/* CHILDREN */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Children</p>
          <p className="text-xs text-gray-500">Ages 5–12</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
          <span>{children}</span>
          <button onClick={() => setChildren(children + 1)}>+</button>
        </div>
      </div>

      {/* PETS */}
      <div className="flex justify-between items-center">
        <p className="font-medium">Travelling with pets</p>
        <button
          onClick={() => setPets(!pets)}
          className={`w-11 h-6 rounded-full ${
            pets ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span
            className={`block w-5 h-5 bg-white rounded-full transform transition ${
              pets ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* TOTAL */}
      <div>
        <p className="text-sm text-gray-500">Total (3 nights)</p>
        <p className="text-2xl font-bold">{price}</p>
      </div>

      {/* CTA */}
      <button className="w-full bg-black text-white py-3 rounded-xl">
        Reserve Now
      </button>

      <div className="flex gap-3">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl">
          Call
        </button>
        <button className="flex-1 bg-green-500 text-white py-2 rounded-xl">
          WhatsApp
        </button>
      </div>
    </div>
  );
}
