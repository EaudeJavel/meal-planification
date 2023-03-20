import React, { useState, useEffect } from "react";
import * as component from "./api";

function MealDetails() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await component.fetchMeals();
      setMeals(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {meals.map((meal, i) => (
        <div key={i}>
          <h2>{meal.attributes.name}</h2>
          <h3>{meal.attributes.day}</h3>
          <h3>Ingredients:</h3>
          <ul>
            {meal.attributes.ingredients.data.map((ingredient, index) => (
              <li key={index}>{ingredient.attributes.name}</li>
            ))}
          </ul>
          <br />
        </div>
      ))}
    </div>
  );
}

export default MealDetails;
