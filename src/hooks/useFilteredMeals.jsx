import { useState } from "react";

const useFilteredMeals = (meals) => {
  const [inputValue, setInputValue] = useState("");
  const [isFilteredMealsVisible, setIsFilteredMealsVisible] = useState(false);

  const filteredMeals = meals.filter(
    (meal) =>
      meal.attributes.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  );

  const handleMealSelect = (mealName) => {
    setInputValue(mealName);
    setIsFilteredMealsVisible(false);
  };

  const selectedMeal = meals.find(
    (meal) => meal.attributes.name === inputValue
  );

  return {
    inputValue,
    isFilteredMealsVisible,
    filteredMeals,
    selectedMeal,
    setInputValue,
    setIsFilteredMealsVisible,
    handleMealSelect,
  };
};

export default useFilteredMeals;
