"use client";

import { useState } from "react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function getMonthMatrix(year, month) {
  // month: 0–11
  const firstDay = new Date(year, month, 1).getDay(); // 0–6 (Sun–Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  // empty cells before 1st
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  // actual days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
  }

  return cells;
}

export default function CalendarSection() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0–11
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const monthMatrix = getMonthMatrix(currentYear, currentMonth);

  const monthLabel = new Date(currentYear, currentMonth).toLocaleString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  const handlePrev = () => {
    setSelectedDay(null);
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setSelectedDay(null);
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const isToday = (day) =>
    day &&
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-xl rounded-lg border border-border bg-surface-100 p-6 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary hover:bg-secondary hover:text-white transition"
          >
            ‹ Prev
          </button>

          <h2 className="font-serif text-lg text-primary">{monthLabel}</h2>

          <button
            onClick={handleNext}
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary hover:bg-secondary hover:text-white transition"
          >
            Next ›
          </button>
        </div>

        {/* Weekdays */}
        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {WEEKDAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-[4px] text-center text-xs">
          {monthMatrix.map((day, idx) => {
            if (!day) return <span key={idx} />;

            const selected = selectedDay === day;
            const todayCell = isToday(day);

            let base =
              "flex h-9 w-9 items-center justify-center text-[11px] transition";
            let styles =
              "text-primary border border-transparent hover:border-secondary/60";

            if (todayCell) {
              styles =
                "text-primary border border-secondary/60 bg-[#f8f1e4]";
            }

            if (selected) {
              styles =
                "bg-primary text-white border-primary hover:border-primary";
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`${base} ${styles}`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Selected date display */}
        <div className="mt-4 text-center text-sm text-primary">
          {selectedDay ? (
            <p>
              Selected:{" "}
              <span className="font-semibold">
                {selectedDay}{" "}
                {new Date(currentYear, currentMonth, selectedDay).toLocaleString(
                  "en-US",
                  { month: "long", year: "numeric" }
                )}
              </span>
            </p>
          ) : (
            <p className="text-muted">Select a date from the calendar.</p>
          )}
        </div>
      </div>
    </section>
  );
}
