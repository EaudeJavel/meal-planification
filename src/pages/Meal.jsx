import React, { useState, useEffect } from "react";
import MealDetails from "../components/MealDetails";
import * as api from "../components/Api";

function Meal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchMeals();
      setMeals(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Meal Planner</h1>
      <MealDetails meals={meals} />
    </div>
  );
}

export default Meal;
