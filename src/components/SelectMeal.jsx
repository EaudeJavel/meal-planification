import React from 'react';
import { SubHeading, Button, SelectMealContainer } from "../styles";

function SelectMeal({ meals, onSelect }) {
  return (
    <SelectMealContainer>
      <SubHeading>Choose an existing meal</SubHeading>
      {meals.map((meal) => (
        <Button key={meal.id} onClick={() => onSelect(meal)}>
          {meal.attributes.name}
        </Button>
      ))}
    </SelectMealContainer>
  );
}

export default SelectMeal;
