import React from "react";
import useFilteredMeals from "../../hooks/useFilteredMeals";
import {
  Input,
  SelectMealContainer,
  FilteredMealsContainer,
  FilteredMeal,
  SubmitButton,
} from "./SelectMeal.styles";

function SelectMeal({ meals, onSelect }) {
  const {
    inputValue,
    isFilteredMealsVisible,
    filteredMeals,
    selectedMeal,
    setInputValue,
    setIsFilteredMealsVisible,
    handleMealSelect,
  } = useFilteredMeals(meals);

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
            onClick={() => handleMealSelect(meal.attributes.name)}
          >
            {meal.attributes.name}
          </FilteredMeal>
        ))}
      </FilteredMealsContainer>
      <SubmitButton
        onClick={() => {
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
