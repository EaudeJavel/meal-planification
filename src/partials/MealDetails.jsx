import React, { useState, useEffect } from "react";
import * as component from "./fetch";

function MealDetails() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await component.readMeals();
      setMeals(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {meals.map((meal, i) => (
        <div key={i}>
          <h2>{meal.attributes.name}</h2>
          {/* <img src={meal.photo} alt={meal.title} /> */}
          {/* <p>Date Planned: {meal.date}</p> */}
          {/* <p>Preparation Time: {meal.preparationTime}</p> */}
          {/* <h3>Lunch:</h3>
          <p>{meal.lunch}</p>
          <h3>Dinner:</h3>
          <p>{meal.dinner}</p> */}
        </div>
      ))}
    </div>
  );
}

export default MealDetails;
