/* src/components/search/LocationDropdown.jsx */
import { FaSearch, FaMapMarkerAlt, FaChevronUp, FaTimes } from "react-icons/fa";

export default function LocationDropdown({ onSelect }) {
  const locations = [
    "Mahabaleshwar",
    "Lonavala",
    "Wada, Palghar",
    "Dahanu, Palghar",
    "Jaipur, Rajasthan",
  ];

  return (
    <div className="absolute top-full mt-4 left-0 w-[340px] bg-white rounded-2xl shadow-2xl z-50">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="text-sm font-medium text-gray-900">Location</span>
        <FaChevronUp className="text-gray-400 text-sm" />
      </div>

      {/* Search input */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
          <FaSearch className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Select Location"
            className="flex-1 text-sm outline-none placeholder-gray-400"
          />
          <FaTimes className="text-gray-400 text-sm cursor-pointer" />
        </div>
      </div>

      {/* Location list */}
      <div className="px-2 pb-3 space-y-1">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => onSelect(loc)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-left"
          >
            <FaMapMarkerAlt className="text-gray-500 text-sm" />
            <span className="text-sm text-gray-900">{loc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
