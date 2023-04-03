import React from "react";
import styled from "styled-components";

const MealDetailsContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
`;

const MealName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MealDate = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const IngredientsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const IngredientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const IngredientItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

function MealDetails({ meals }) {
  if (!Array.isArray(meals)) {
    return <p>Loading meals...</p>;
  }

  return (
    <MealDetailsContainer>
      {meals.map((meal, i) => (
        <div key={i}>
          <MealName>{meal.attributes.name}</MealName>
          <MealDate>{meal.attributes.day}</MealDate>
          <IngredientsTitle>Ingredients:</IngredientsTitle>
          <IngredientList>
            {meal.attributes.ingredients.data.map((ingredient, index) => (
              <IngredientItem key={index}>{ingredient.attributes.name}</IngredientItem>
            ))}
          </IngredientList>
          <br />
        </div>
      ))}
    </MealDetailsContainer>
  );
}

export default MealDetails;
