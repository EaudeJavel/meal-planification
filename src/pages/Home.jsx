import React, { useState, useEffect } from "react";
import RecipeCard from "../components/PreferedRecipeCard/PreferedRecipeCard";
import {
  Heading,
  SubHeading,
  PageContainer,
  InlineTitle,
  InlineSubTitle,
  RecipeContainer,
  TestCard,
  TestCardHeading,
  TestCardSubHeading,
} from "../styles";

function HomePage() {
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const recipeCardHeight = 180;

  // need to adapt backend
  const preferredRecipes = [
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian dish with rich tomato meat sauce",
    },
    {
      name: "Chicken Parmesan",
      description: "Crispy fried chicken with marinara and melted cheese",
    },
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian dish with rich tomato meat sauce",
    },
    {
      name: "Chicken Parmesan",
      description: "Crispy fried chicken with marinara and melted cheese",
    },
    {
      name: "Chicken Parmesan",
      description: "Crispy fried chicken with marinara and melted cheese",
    },
    {
      name: "Chicken Parmesan",
      description: "Crispy fried chicken with marinara and melted cheese",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numItemsToRender = Math.floor(screenHeight / recipeCardHeight);

  return (
    <>
      <PageContainer>
        <Heading>Hey Paul !</Heading>
        <SubHeading style={{ margin: "6px 0 24px 0" }}>
          Comment est votre blanquette?
        </SubHeading>
        <InlineTitle>Your favorite recipes</InlineTitle>
        <InlineSubTitle>
          Whether they are quick to make, or delicious, or both, you love them, so they await you!
        </InlineSubTitle>
        <RecipeContainer>
          {preferredRecipes.slice(0, numItemsToRender).map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </RecipeContainer>

        <InlineTitle>You want to try a game ?</InlineTitle>
        <InlineSubTitle>Have fun. You can do it !</InlineSubTitle>
        <TestCard>
          <a target="blank" href="https://raclette.space">
            <img src="https://picsum.photos/179/120" alt="recipe" />
            <TestCardHeading>Pere lachaise guesser</TestCardHeading>
            <TestCardSubHeading>Play</TestCardSubHeading>
          </a>
        </TestCard>
      </PageContainer>
    </>
  );
}

export default HomePage;
