/* src/pages/Home.jsx */
import { FaMapMarkedAlt } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";

export default function Home({ onSelect }) {
  return (
    <main className="max-w-[1400px] mx-auto px-6 pt-6 pb-4">
      
      {/* Search */}
      <SearchBar />

      {/* Meta row: Showing properties + Map */}
      <div className="mt-6 mb-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3 text-gray-600">
          <span>Showing 10 Properties</span>
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
      <PropertyGrid onSelect={onSelect} />

      {/* Load more */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 rounded-full bg-gray-900 text-white text-sm">
          Load More Properties
        </button>
      </div>

    </main>
  );
}
