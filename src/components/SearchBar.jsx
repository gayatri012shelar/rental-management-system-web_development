/* src/components/SearchBar.jsx */
import { useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

import LocationDropdown from "./search/LocationDropdown";
import DateDropdown from "./search/DateDropdown";
import GuestsDropdown from "./search/GuestsDropdown";
import FiltersModal from "./search/FiltersModal";

export default function SearchBar() {
  const [open, setOpen] = useState(null);

  const [location, setLocation] = useState("Search destinations");

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
    pets: false,
  });

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })
      : "Add dates";

  const totalGuests = guests.adults + guests.children;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="bg-white rounded-full shadow-md px-6 py-4 flex items-center gap-4">
        
        {/* LOCATION */}
        <div className="relative flex-1">
          <div
            className="cursor-pointer"
            onClick={() => setOpen(open === "location" ? null : "location")}
          >
            <p className="text-xs font-semibold text-gray-700">Location</p>
            <p className="text-sm text-gray-400">{location}</p>
          </div>

          {open === "location" && (
            <LocationDropdown
              onSelect={(loc) => {
                setLocation(loc);
                setOpen(null);
              }}
            />
          )}
        </div>

        <div className="h-8 w-px bg-gray-200" />

        {/* CHECK IN */}
        <div className="relative flex-1">
          <div
            className="cursor-pointer"
            onClick={() => setOpen(open === "dates" ? null : "dates")}
          >
            <p className="text-xs font-semibold text-gray-700">Check in</p>
            <p className="text-sm text-gray-400">
              {formatDate(checkIn)}
            </p>
          </div>

          {open === "dates" && (
            <DateDropdown
              startDate={checkIn}
              endDate={checkOut}
              onChange={(start, end) => {
                setCheckIn(start);
                setCheckOut(end);
              }}
              onClose={() => setOpen(null)}
            />
          )}
        </div>

        <div className="h-8 w-px bg-gray-200" />

        {/* CHECK OUT */}
        <div className="relative flex-1">
          <div
            className="cursor-pointer"
            onClick={() => setOpen(open === "dates" ? null : "dates")}
          >
            <p className="text-xs font-semibold text-gray-700">Check out</p>
            <p className="text-sm text-gray-400">
              {formatDate(checkOut)}
            </p>
          </div>
        </div>

        <div className="h-8 w-px bg-gray-200" />

        {/* GUESTS */}
        <div className="relative flex-1">
          <div
            className="cursor-pointer"
            onClick={() => setOpen(open === "guests" ? null : "guests")}
          >
            <p className="text-xs font-semibold text-gray-700">Guests</p>
            <p className="text-sm text-gray-400">
              {totalGuests > 0
                ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
                : "Select"}
            </p>
          </div>

          {open === "guests" && (
            <GuestsDropdown
              value={guests}
              onChange={setGuests}
            />
          )}
        </div>

        {/* SEARCH */}
        <button className="ml-2 h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaSearch />
        </button>

        {/* FILTERS */}
        <button
          onClick={() => setOpen("filters")}
          className="ml-2 px-6 py-3 rounded-full border flex items-center gap-2 text-sm font-medium"
        >
          <FaSlidersH />
          Filters
        </button>
      </div>

      {open === "filters" && (
        <FiltersModal onClose={() => setOpen(null)} />
      )}
    </div>
  );
}
