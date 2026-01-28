/* src/pages/PropertyDetail.jsx */
import { FaUtensils, FaLeaf, FaRegFileAlt } from "react-icons/fa";
import { FaSnowflake, FaWifi, FaSwimmingPool, FaTv, FaBath, FaWater, FaGamepad } from "react-icons/fa";
import { MdMicrowave, MdWaterDrop } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaVideo, FaWheelchair, FaParking, FaDoorOpen, FaClock, FaBan, FaPaw, FaInstagram, FaFacebookF, } from "react-icons/fa";

import { useState } from "react";
import BookingCard from "../components/BookingCard";
import PhotoGalleryModal from "../components/PhotoGalleryModal";

export default function PropertyDetail({ property, onBack }) {
  const [showPhotos, setShowPhotos] = useState(false);

  const images = property.images || [];

  return (
    <>
      {showPhotos && (
        <PhotoGalleryModal
          images={images}
          onClose={() => setShowPhotos(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* BACK */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
          >
            ← Back
          </button>

          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-semibold">{property.title}</h1>
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600">
                {property.rating} ({property.reviews} reviews)
              </span>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-3 gap-3 rounded-xl overflow-hidden">
            <img
              src={images[0]}
              className="col-span-2 row-span-2 object-cover h-full w-full"
            />

            {images.slice(1, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                className="object-cover h-full w-full"
              />
            ))}

            <div className="relative">
              <img
                src={images[3] || images[0]}
                className="object-cover h-full w-full"
              />
              <button
                onClick={() => setShowPhotos(true)}
                className="absolute bottom-3 right-3 bg-white px-4 py-1 rounded-lg shadow text-sm"
              >
                More photos
              </button>
            </div>
          </div>

          {/* BASIC INFO */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-700 border-b pb-4">
            <span>{property.guests}</span>
            <span>{property.beds}</span>
            <span>{property.baths}</span>
            <span>Living Room</span>
            <span>Kitchen</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>

          {/* MEALS */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">Meals</h2>

            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaUtensils className="text-gray-600" />
                <span>Meal Plan – {property.meals.plan}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaLeaf className="text-gray-600" />
                <span>{property.meals.type}</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm">
              {property.meals.description}
            </p>

            <button className="flex items-center gap-2 text-sm underline">
              <FaRegFileAlt />
              View sample menu
            </button>
          </div>

          {/* AMENITIES */}
          <div className="border-t pt-6 space-y-6">
            <h2 className="text-lg font-semibold">Amenities</h2>

            <div className="grid grid-cols-2 gap-6 text-sm">

              <div>
                <h3 className="font-medium mb-2">Basics</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"><FaSnowflake /> Air conditioning</li>
                  <li className="flex gap-2 items-center"><FaWifi /> Free WiFi</li>
                  <li className="flex gap-2 items-center"><FaSwimmingPool /> Private Pool</li>
                  <li className="flex gap-2 items-center"><FaTv /> Smart TV</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Kitchen</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"><MdMicrowave /> Microwave</li>
                  <li className="flex gap-2 items-center"><MdWaterDrop /> RO Water Purifier</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Bathroom</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"><FaBath /> Bathtub</li>
                  <li className="flex gap-2 items-center"><FaWater /> Hot Water</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Entertainment & Games</h3>
                <ul className="space-y-2">
                  {property.amenities.games.map((g) => (
                    <li key={g} className="flex gap-2 items-center">
                      <FaGamepad /> {g}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* LOCATION */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">Location</h2>

            <div className="h-60 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="mr-2" />
              Interactive map will be displayed here
            </div>

            <p className="text-sm text-gray-700">
              B12, Villa no 31, Wada Watermark Project, Palghar, Maharashtra
            </p>
          </div>

          {/* REVIEWS */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">
              Reviews <span className="text-sm font-normal">({property.reviews})</span>
            </h2>

            {[1, 2].map((_, i) => (
              <div key={i} className="border rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <FaUserCircle className="text-2xl text-gray-400" />
                  <div>
                    <p className="font-medium">Rajesh Kumar</p>
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Absolutely stunning property! The villa exceeded expectations.
                </p>
              </div>
            ))}

            <button className="border rounded-lg px-4 py-2 text-sm">
              Show all reviews
            </button>
          </div>

          {/* VIDEOS */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">Videos</h2>

            <div className="flex gap-4 overflow-x-auto">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="relative min-w-[180px] h-40 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center"
                >
                  <FaVideo className="text-white text-3xl absolute" />
                  <img
                    src={images[i] || images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ACCESSIBILITY */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">Accessibility</h2>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaParking className="mt-1 text-gray-600" />
                <div>
                  <p className="font-medium">Disabled Parking Spot</p>
                  <p className="text-gray-500">
                    Dedicated accessible parking space available
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <FaWheelchair className="mt-1 text-gray-600" />
                <div>
                  <p className="font-medium">Step-Free Access</p>
                  <p className="text-gray-500">
                    No stairs required to enter the property
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <FaDoorOpen className="mt-1 text-gray-600" />
                <div>
                  <p className="font-medium">Wide Doorways</p>
                  <p className="text-gray-500">
                    All doors including washrooms are wider than 30 inches
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* POLICIES */}
          <div className="border-t pt-8 space-y-8">
            <h2 className="text-lg font-semibold">Policies</h2>

            {/* Timings */}
            <section className="space-y-2 text-sm">
              <h3 className="font-medium">Property Timings</h3>
              <div className="grid grid-cols-2 gap-y-1 max-w-md">
                <span>Check-in</span>
                <span className="text-right">{property.policies.checkin}</span>

                <span>Check-out</span>
                <span className="text-right">{property.policies.checkout}</span>

                <span>Quiet hours</span>
                <span className="text-right">{property.policies.quietHours}</span>
              </div>
            </section>

            {/* Cancellation */}
            <section className="space-y-2 text-sm">
              <h3 className="font-medium">Cancellation Policy</h3>
              <div className="space-y-1 text-gray-700">
                {property.policies.cancellation.map((c) => (
                  <p key={c}>• {c}</p>
                ))}
              </div>
            </section>

            {/* Property Rules */}
            <section className="space-y-2 text-sm">
              <h3 className="font-medium">Property Rules</h3>
              <div className="space-y-1 text-gray-700">
                {property.policies.rules.map((r) => (
                  <p key={r}>• {r}</p>
                ))}
              </div>
            </section>

            {/* Pet Policy */}
            <section className="space-y-2 text-sm">
              <h3 className="font-medium">Pet Policy</h3>
              <div className="space-y-1 text-gray-700">
                {property.policies.petPolicy.map((p) => (
                  <p key={p}>• {p}</p>
                ))}
              </div>
            </section>

            {/* Additional Rules */}
            <section className="space-y-2 text-sm">
              <h3 className="font-medium">Additional Rules</h3>
              <div className="space-y-1 text-gray-700">
                {property.policies.additionalRules.map((r) => (
                  <p key={r}>• {r}</p>
                ))}
              </div>
            </section>
          </div>

          {/* ABOUT HOST */}
          <div className="border-t pt-6 space-y-4">
            <h2 className="text-lg font-semibold">About Host</h2>

            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?auto=format&fit=max&w=480"
                alt="Host"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="space-y-1">
                <h3 className="font-semibold flex items-center gap-2">
                  {property.host.company}
                  <FaCheckCircle className="text-black" />
                </h3>

                <p className="text-sm text-gray-600">
                  Host Name: {property.host.name}
                </p>

                <p className="text-sm text-gray-500">
                  Account Status: {property.host.verified ? "Verified" : "Unverified"}
                </p>

                <div className="flex gap-4 pt-2 text-gray-600">
                  <FaInstagram className="cursor-pointer hover:text-black" />
                  <FaFacebookF className="cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex justify-between text-sm text-gray-500">
            <div className="space-y-1">
              <p className="cursor-pointer hover:underline">Privacy Policy</p>
              <p className="cursor-pointer hover:underline">Terms & Conditions</p>
              <p className="cursor-pointer hover:underline">Disclaimer</p>
            </div>

            <div className="text-right space-y-1">
              <p className="font-medium text-gray-700">doorloom</p>
              <p>Your trusted platform for vacation rental management.</p>
              <p className="underline cursor-pointer">Be THE GREAT HOST! Get Started</p>
              <p className="text-xs mt-2">© 2024 doorloom. All rights reserved</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          <BookingCard price={property.price} />
        </div>
      </div>
    </>
  );
}
