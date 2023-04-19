import React, { useState, useEffect } from "react";
import SelectMeal from "../SelectMeal/SelectMeal";
import CreateMeal from "../CreateMeal/CreateMeal";
import { fetchMealTemplates, addMealTemplate } from "../Api";
import { Square } from "../Square/Square.styles";
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InlineButton
              onClick={() => setActiveComponent("CreateMeal")}
              isActive={activeComponent === "CreateMeal"}
            >
              Créer une nouvelle recette
            </InlineButton>
            {activeComponent === "CreateMeal" && <Square />}
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InlineButton
              onClick={() => setActiveComponent("SelectMeal")}
              isActive={activeComponent === "SelectMeal"}
            >
              Choisir une recette existante
            </InlineButton>
            {activeComponent === "SelectMeal" && <Square />}
          </div>
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
