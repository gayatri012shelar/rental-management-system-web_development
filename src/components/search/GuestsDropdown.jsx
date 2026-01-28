/* src/components/search/GuestsDropdown.jsx */
export default function GuestsDropdown({ value, onChange }) {
  const { adults, children, pets } = value;

  const update = (changes) => {
    onChange({ ...value, ...changes });
  };

  return (
    <div className="absolute top-full mt-4 right-0 bg-white shadow-2xl rounded-2xl w-80 z-50">

      {/* Adults */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <div>
          <p className="text-base font-medium">Adults</p>
          <p className="text-sm text-gray-500">Age 12 and above</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => update({ adults: Math.max(1, adults - 1) })}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-lg"
          >
            −
          </button>

          <span className="w-6 text-center text-lg">{adults}</span>

          <button
            onClick={() => update({ adults: adults + 1 })}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <div>
          <p className="text-base font-medium">Children</p>
          <p className="text-sm text-gray-500">Ages 5–12</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => update({ children: Math.max(0, children - 1) })}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-lg"
          >
            −
          </button>

          <span className="w-6 text-center text-lg">{children}</span>

          <button
            onClick={() => update({ children: children + 1 })}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Pets */}
      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-base font-medium">Travelling with pets</p>

        <button
          onClick={() => update({ pets: !pets })}
          className={`relative w-11 h-6 rounded-full transition ${
            pets ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition ${
              pets ? "translate-x-5" : ""
            }`}
          />
        </button>
      </div>

    </div>
  );
}
