import React, { useState, useEffect } from 'react';
import SelectMeal from '../SelectMeal/SelectMeal';
import CreateMeal from '../CreateMeal/CreateMeal';
import { fetchMealTemplates, addMealTemplate } from '../Api';
import { SubHeading, Button, MealPlannerContainer } from "../../styles";


function MealPlanner({ onCancel }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchAndSetMeals = async () => {
    const fetchedMeals = await fetchMealTemplates();
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    fetchAndSetMeals();
  }, []);

  const handleSubmit = async (mealData) => {
    const mealDataWithDate = { ...mealData, date: selectedDate.toISOString() };
  console.log(mealDataWithDate);
  const createdMeal = await addMealTemplate(mealDataWithDate);
  setSelectedMeal(createdMeal);
  };

  if (!selectedMeal) {
    return (
      <MealPlannerContainer>
        <SelectMeal meals={meals} onSelect={setSelectedMeal} selectedDate={selectedDate} />
        <CreateMeal onSubmit={handleSubmit} selectedDate={selectedDate} />
      </MealPlannerContainer>
    );
  }
  return (
    <div>
      <SubHeading>Selected Meal: {selectedMeal.attributes ? selectedMeal.attributes.name : selectedMeal.name}</SubHeading>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
} 

export default MealPlanner;