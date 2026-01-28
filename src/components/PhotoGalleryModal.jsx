/* src/components/PhotoGalleryModal.jsx */
export default function PhotoGalleryModal({ images, onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* HEADER */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Photos</h2>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg"
          >
            ✕
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-4 text-sm">
          <h3 className="text-base font-medium">Living room</h3>
          <ul className="text-gray-600 space-y-1">
            <li>5 Seater sofa</li>
            <li>Sofa cum bed</li>
            <li>Air conditioning</li>
            <li>TV</li>
          </ul>
        </div>

        {/* RIGHT IMAGES */}
        <div className="lg:col-span-2 space-y-6">

          {/* MAIN IMAGE */}
          <img
            src={images[0]}
            alt=""
            className="w-full h-[420px] object-cover rounded-2xl"
          />

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-56 w-full object-cover rounded-xl"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
