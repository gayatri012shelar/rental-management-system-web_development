/* src/components/PropertyCard.jsx */
import {
  FaStar,
  FaUserFriends,
  FaBed,
  FaBath,
  FaPhoneAlt,
} from "react-icons/fa";

export default function PropertyCard({ property, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl transition cursor-pointer"
    >
      {/* Image */}
      <div className="p-3">
        <img
          src={property.images?.[0]}
          alt={property.title}
          className="h-48 w-full object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        {/* Location + Rating */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{property.location}</span>
          <span className="flex items-center gap-1 text-black">
            ⭐ <span className="font-medium">{property.rating}</span>
            <span className="text-gray-400">({property.reviews})</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-1 font-semibold text-lg leading-snug line-clamp-2">
          {property.title}
        </h3>

        {/* Meta */}
        <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
          <span>{property.guests}</span>
          <span>{property.beds}</span>
          <span>{property.baths}</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold">₹8,500</span>
            <span className="text-xs text-gray-500">(1 night)</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-orange-500 opacity-0 group-hover:opacity-100 transition">
            <span className="font-medium">View & Call</span>
          </div>
        </div>
      </div>
    </div>
  );
}
