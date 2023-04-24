import React, { useState, useEffect } from "react";
import MealDetails from "../components/MealDetails/MealDetails";
import * as api from "../components/Api";
import { AppSection, Heading } from "../styles";

function Meal() {
  const [meals, setMeals] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchMealTemplates();
      setMeals(result);
    };
    fetchData();
  }, []);

  const handleGenerateRecipe = () => {
    console.log("recipeName", recipeName);
    api
      .generateRecipe(recipeName)
      .then((response) => {
        console.log("Generated recipe:", response);
        setGeneratedRecipe(response);
      })
      .catch((error) => {
        console.error("Error generating recipe:", error);
      });
  };


  return (
    <>
      <AppSection>
        <Heading>Meals</Heading>
        <MealDetails meals={meals} />
        <Heading>Generate Recipe</Heading>
        <div>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter recipe name"
          />
          <button onClick={handleGenerateRecipe}>Generate Recipe</button>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : generatedRecipe ? (
          <>
            <h3>Generated Recipe</h3>
            <div>{generatedRecipe}</div>
          </>
        ) : null}
      </AppSection>
    </>
  );
}

export default Meal;
