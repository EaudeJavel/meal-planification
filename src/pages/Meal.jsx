import React, { useState } from "react";
import MealDetails from "../partials/MealDetails";

function Meal() {
  const [meal, setmeal] = useState("");

  return (
    <div>
      <h1>Meal Planner</h1>
      <MealDetails
        meal={meal}
      />
    </div>
  );
}

export default Meal;