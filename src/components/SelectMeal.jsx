import React from 'react';
import { SubHeading, Button } from '../styles'; // Import these from your styles.js

function SelectMeal({ meals, onSelect }) {
  return (
    <div>
      <SubHeading>Choose an existing meal</SubHeading>
      {meals.map((meal) => (
        <Button key={meal.id} onClick={() => onSelect(meal)}>
          {meal.attributes.name}
        </Button>
      ))}
    </div>
  );
}

export default SelectMeal;
