import React from 'react';
import { CardContainer, CardTitle, CardSubtitle } from './PreferedRecipeCard.styles';

function PreferedRecipeCard({ recipe }) {
  return (
    <CardContainer>
      <img src="https://picsum.photos/180/120" alt="recipe" />
      <CardTitle>{recipe.name}</CardTitle>
      <CardSubtitle>{recipe.description}</CardSubtitle>
    </CardContainer>
  );
}

export default PreferedRecipeCard;
