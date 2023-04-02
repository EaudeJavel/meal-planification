import React from 'react';

function SelectMeal({ meals, onSelect, selectedDate }) {
  return (
    <div>
      <h3>Choose an existing meal</h3>
      {meals.map((meal) => (
        <button key={meal.id} onClick={() => onSelect(meal)}>
          {meal.attributes.name}
        </button>
      ))}
    </div>
  );
}

export default SelectMeal;
