import React from "react";

function MealDetails({ meal }) {
  return (
    <div>
      <h2>{meal.title}</h2>
      <img src={meal.photo} alt={meal.title} />
      <p>Date Planned: {meal.date}</p>
      <p>Preparation Time: {meal.preparationTime}</p>
      <h3>Lunch:</h3>
      <p>{meal.lunch}</p>
      <h3>Dinner:</h3>
      <p>{meal.dinner}</p>
    </div>
  );
}

export default MealDetails;