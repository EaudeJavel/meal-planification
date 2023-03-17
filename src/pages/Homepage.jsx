import React, { useState } from "react";
import MealPlanner from "./MealPlanner";

function HomePage() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  return (
    <div>
      <h1>Meal Planner</h1>
      <h2>Meal of the Day</h2>
      <MealPlanner
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
      />
    </div>
  );
}

export default HomePage;