import React from "react";

function MealDetails({ meals }) {
  if (!Array.isArray(meals)) {
    return <p>Loading meals...</p>;
  }

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
