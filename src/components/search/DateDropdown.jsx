/* src/components/search/DateDropdown.jsx */
import { useState, useEffect } from "react";

export default function DateDropdown({
  startDate,
  endDate,
  onChange,
  onClose,
}) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const offset = (firstDay + 6) % 7;

  const handleDateClick = (day) => {
    const clickedDate = new Date(year, month, day);

    if (!startDate || (startDate && endDate)) {
      onChange(clickedDate, null);
    } else if (clickedDate >= startDate) {
      onChange(startDate, clickedDate);
    } else {
      onChange(clickedDate, null);
    }
  };

  // auto close when both dates are selected
  useEffect(() => {
    if (startDate && endDate) {
      onClose();
    }
  }, [startDate, endDate, onClose]);

  const isSelected = (day) => {
    const d = new Date(year, month, day);
    return (
      (startDate && d.toDateString() === startDate.toDateString()) ||
      (endDate && d.toDateString() === endDate.toDateString())
    );
  };

  const isInRange = (day) => {
    if (!startDate || !endDate) return false;
    const d = new Date(year, month, day);
    return d > startDate && d < endDate;
  };

  return (
    <div className="absolute top-full mt-4 left-0 bg-white shadow-2xl rounded-2xl p-6 w-[360px] z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            if (month === 0) {
              setMonth(11);
              setYear(year - 1);
            } else setMonth(month - 1);
          }}
        >
          ‹
        </button>

        <p className="font-medium">
          {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
          {year}
        </p>

        <button
          onClick={() => {
            if (month === 11) {
              setMonth(0);
              setYear(year + 1);
            } else setMonth(month + 1);
          }}
        >
          ›
        </button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 text-sm text-center">
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`p-2 rounded-full transition ${
                isSelected(day)
                  ? "bg-black text-white"
                  : isInRange(day)
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onChange(null, null)}
        className="text-xs underline mt-4"
      >
        Clear dates
      </button>
    </div>
  );
}
