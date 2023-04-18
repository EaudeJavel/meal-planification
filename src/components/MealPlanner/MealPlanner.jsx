import React, { useState, useEffect } from 'react';
import SelectMeal from '../SelectMeal/SelectMeal';
import CreateMeal from '../CreateMeal/CreateMeal';
import { fetchMealTemplates, addMealTemplate } from '../Api';
import {
  SubHeading,
  Button,
  InlineButton,
  MealPlannerContainer,
} from "./MealPlanner.styles";


function MealPlanner({ onCancel }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeComponent, setActiveComponent] = useState(null);

  const fetchAndSetMeals = async () => {
    const fetchedMeals = await fetchMealTemplates();
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    fetchAndSetMeals();
  }, []);

  const handleSubmit = async (mealData) => {
    const mealDataWithDate = { ...mealData, date: selectedDate.toISOString() };
    const createdMeal = await addMealTemplate(mealDataWithDate);
    setSelectedMeal(createdMeal);
  };

  if (!selectedMeal) {
    return (
      <>
        <div style={{ display:'Flex',justifyContent:'space-around',width:'100%' }}>
          <InlineButton onClick={() => setActiveComponent("CreateMeal")}>
            Créer une nouvelle recette
          </InlineButton>
          <InlineButton onClick={() => setActiveComponent("SelectMeal")}>
            Choisir une recette existante
          </InlineButton>
        </div>
        <MealPlannerContainer>
          {activeComponent === "SelectMeal" && (
            <SelectMeal
              meals={meals}
              onSelect={setSelectedMeal}
              selectedDate={selectedDate}
            />
          )}
          {activeComponent === "CreateMeal" && (
            <CreateMeal onSubmit={handleSubmit} selectedDate={selectedDate} />
          )}
        </MealPlannerContainer>
      </>
    );
  }
  return (
    // CONFIRMATION
    <div>
      <SubHeading>
        Selected Meal:{" "}
        {selectedMeal.attributes
          ? selectedMeal.attributes.name
          : selectedMeal.name}
      </SubHeading>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
}

export default MealPlanner;
