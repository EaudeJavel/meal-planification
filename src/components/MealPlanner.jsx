import React, { useState, useEffect } from 'react';
import SelectMeal from './SelectMeal';
import CreateMeal from './CreateMeal';
import { fetchMeals, addMeal } from './Api';

function MealPlanner({ selectedDate, onCancel }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchAndSetMeals = async () => {
    const fetchedMeals = await fetchMeals();
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    fetchAndSetMeals();
  }, []);

  const handleSubmit = async (mealData) => {
    const createdMeal = await addMeal(mealData);
    setSelectedMeal(createdMeal);
  };

  if (!selectedMeal) {
    return (
      <div>
        <SelectMeal meals={meals} onSelect={setSelectedMeal} selectedDate={selectedDate} />
        <CreateMeal onSubmit={handleSubmit} selectedDate={selectedDate} />
      </div>
    );
  }
  return (
    <div>
      <h3>Selected Meal: {selectedMeal.attributes ? selectedMeal.attributes.name : selectedMeal.name}</h3>
        {/* Ingredient feature should be displayed here now that a meal is selected /}
        {/ ... */}
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default MealPlanner;