import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlannedMeal } from "../Api";
import GenerateSteps from "../GenerateSteps/GenerateSteps";
import {
  MealName,
  MealDate,
  IngredientsTitle,
  IngredientList,
  IngredientItem,
  MealPageContainer,
} from "./MealPage.styles";

function MealPage() {
  const [plannedMeal, setPlannedMeal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPlannedMeal(id);
      if (result) {
        setPlannedMeal(result);
      } else {
        console.error("No planned meal found for the given ID");
      }
    };
    fetchData();
  }, [id]);

  if (!plannedMeal) {
    return <p>Loading planned meal...</p>;
  }

  return (
    <MealPageContainer>
      <MealName>{plannedMeal.mealTemplateName}</MealName>
      <MealDate>{plannedMeal.attributes.date}</MealDate>
      <MealDate>{plannedMeal.attributes.notes}</MealDate>
      <IngredientsTitle>Ingredients:</IngredientsTitle>
      {/* <IngredientList>
        {plannedMeal.relationships.mealTemplate.relationships.ingredients.data.map((ingredient, index) => (
          <IngredientItem key={index}>
            {ingredient.attributes.name}
          </IngredientItem>
        ))}
      </IngredientList> */}
      {/* <GenerateSteps
        mealTemplateId={plannedMeal.mealTemplateId}
        mealDate={plannedMeal.attributes.date}
      /> */}
    </MealPageContainer>
  );
}

export default MealPage;
