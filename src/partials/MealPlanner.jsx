import React from "react";

function MealPlanner({ selectedDay, setSelectedDay, selectedMeal, setSelectedMeal }) {
  const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  function handleDaySelect(event) {
    setSelectedDay(event.target.value);
  }

  function handleMealSelect(event) {
    setSelectedMeal(event.target.value);
  }

  return (
    <div>
      <select value={selectedDay} onChange={handleDaySelect}>
        <option value="">Select a Day</option>
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <input type="text" value={selectedMeal} onChange={handleMealSelect} placeholder="Choisi ton plat" />
    </div>
  );
}

export default MealPlanner;