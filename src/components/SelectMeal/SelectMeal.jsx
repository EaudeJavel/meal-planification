import React, { useState } from "react";
import {
  Input,
  SelectMealContainer,
  FilteredMealsContainer,
  FilteredMeal,
  SubmitButton,
} from "./SelectMeal.styles";

function SelectMeal({ meals, onSelect }) {
  const [inputValue, setInputValue] = useState("");
  const [isFilteredMealsVisible, setIsFilteredMealsVisible] = useState(false);

  // Filter meals based on input value
  const filteredMeals = meals.filter(
    (meal) =>
      meal.attributes.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  );

  return (
    <SelectMealContainer>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsFilteredMealsVisible(true);
        }}
        onFocus={() => setIsFilteredMealsVisible(true)}
        onBlur={() => setIsFilteredMealsVisible(false)}
      />
      <FilteredMealsContainer isVisible={isFilteredMealsVisible}>
        {filteredMeals.map((meal) => (
          <FilteredMeal
            key={meal.id}
            onClick={() => {
              setInputValue(meal.attributes.name);
              setIsFilteredMealsVisible(false);
            }}
          >
            {meal.attributes.name}
          </FilteredMeal>
        ))}
      </FilteredMealsContainer>
      <SubmitButton
        onClick={() => {
          const selectedMeal = meals.find(
            (meal) => meal.attributes.name === inputValue
          );
          if (selectedMeal) {
            onSelect(selectedMeal);
          }
        }}
      >
        Selectionner la recette
      </SubmitButton>
    </SelectMealContainer>
  );
}

export default SelectMeal;
