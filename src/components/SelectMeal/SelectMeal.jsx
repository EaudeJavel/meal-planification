import React from 'react';
import { SubHeading, Button, SelectMealContainer } from "./SelectMeal.styles";

function SelectMeal({ meals, onSelect }) {
  return (
    <SelectMealContainer>
      <SubHeading>Choisir une recette existante</SubHeading>
      {meals.map((meal) => (
        <Button key={meal.id} onClick={() => onSelect(meal)}>
          {meal.attributes.name}
        </Button>
      ))}
    </SelectMealContainer>
  );
}

export default SelectMeal;
