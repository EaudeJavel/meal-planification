import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMeal } from "./Api";
import {
  MealName,
  MealDate,
  IngredientsTitle,
  IngredientList,
  IngredientItem,
  MealPageContainer,
} from "../styles";

function MealPage() {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMeal(id);
      console.log("result : ", result);

      if (result) {
        setMeal(result);
      } else {
        console.error("No meal found for the given ID");
      }
    };
    fetchData();
  }, [id]);

  if (!meal) {
    return <p>Loading meal...</p>;
  }

  return (
    <MealPageContainer>
      <MealName>{meal.attributes.name}</MealName>
      <MealDate>{meal.attributes.date}</MealDate>
      <IngredientsTitle>Ingredients:</IngredientsTitle>
      <IngredientList>
        {meal.attributes.ingredients.data.map((ingredient, index) => (
          <IngredientItem key={index}>
            {ingredient.attributes.name}
          </IngredientItem>
        ))}
      </IngredientList>
    </MealPageContainer>
  );
}

export default MealPage;
