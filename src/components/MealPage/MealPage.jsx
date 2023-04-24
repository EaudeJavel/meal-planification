import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlannedMeal } from "../Api";
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
      console.log("MEALPAGE result : ", result);

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
      <MealName>{plannedMeal.attributes.notes}</MealName>
      <MealDate>{plannedMeal.attributes.date}</MealDate>
      <IngredientsTitle>Ingredients:</IngredientsTitle>
      {/* <IngredientList>
        {plannedMeal.attributes.mealTemplate.attributes.ingredients.data.map((ingredient, index) => (
          <IngredientItem key={index}>
            {ingredient.attributes.name}
          </IngredientItem>
        ))}
      </IngredientList> */}
    </MealPageContainer>
  );
}

export default MealPage;
