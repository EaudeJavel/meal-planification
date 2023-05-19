import React from "react";
import { useParams } from "react-router-dom";
import usePlannedMeal from '../../hooks/usePlannedMeals';
import GenerateSteps from "../GenerateSteps/GenerateSteps";
import {
  MealName,
  MealDate,
  IngredientsTitle,
  // IngredientList,
  // IngredientItem,
  MealPageContainer,
} from "./MealPage.styles";

function MealPage() {
  const { id } = useParams();
  const plannedMeal = usePlannedMeal(id);

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
      <GenerateSteps />
    </MealPageContainer>
  );
}

export default MealPage;
