/* src/pages/Home.jsx */
import { FaMapMarkedAlt } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";
import { properties } from "../data/properties";
import { useState } from "react";

export default function Home({ onSelect }) {
  const [filtered, setFiltered] = useState(properties);

  const handleSearch = ({ location, guests }) => {
    const result = properties.filter((p) => {
      const matchesLocation =
        location === "Search destinations" ||
        p.location.toLowerCase().includes(location.toLowerCase());

      const guestCount = parseInt(p.guests);
      const matchesGuests = guestCount >= guests.adults + guests.children;

      return matchesLocation && matchesGuests;
    });

    setFiltered(result);
  };

  return (
    <>
      {/* MAIN CONTENT */}
      <main className="max-w-[1400px] mx-auto px-6 pt-6 pb-8">
        
        {/* Search */}
        <SearchBar onSearch={handleSearch} />

        {/* Meta row */}
        <div className="mt-6 mb-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-600">
            <span>Showing {filtered.length} Properties</span>
            <button className="text-blue-600 hover:underline">
              Clear filters
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-700 text-white text-xs">
            <FaMapMarkedAlt className="text-sm" />
            <span>Map</span>
          </button>
        </div>

        {/* Grid */}
        <PropertyGrid properties={filtered} onSelect={onSelect} />

        {/* Load more */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 rounded-full bg-gray-900 text-white text-sm">
            Load More Properties
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-500">
          
          {/* LEFT */}
          <div className="space-y-2">
            <p className="font-medium text-gray-600">Hosted by Navin</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms & Conditions</p>
            <p className="cursor-pointer hover:underline">Disclaimer</p>
          </div>

          {/* RIGHT */}
          <div className="space-y-2 max-w-sm">
            <p className="font-medium text-gray-700">doorloom</p>
            <p>Your trusted platform for vacation rental management.</p>
            <p>Be THE GREAT HOST!</p>
            <p className="underline cursor-pointer">Get Started</p>
            <p className="text-xs mt-3">© 2024 doorloom. All rights reserved</p>
          </div>
        </div>

      </main>
    </>
  );
}
