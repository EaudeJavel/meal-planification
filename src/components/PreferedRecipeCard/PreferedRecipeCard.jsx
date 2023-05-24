import React from "react";
import {
  CardContainer,
  CardTitle,
  CardSubtitle,
} from "./PreferedRecipeCard.styles";

function PreferedRecipeCard({ recipe }) {
  return (
    <CardContainer>
      <a target="blank" href="https://raclette.webflow.io/pad" style={{ textDecoration:"none" }}>
        <img src="https://picsum.photos/180/120" alt="recipe" />
        <CardTitle>{recipe.name}</CardTitle>
        <CardSubtitle>{recipe.description}</CardSubtitle>
      </a>
    </CardContainer>
  );
}

export default PreferedRecipeCard;
