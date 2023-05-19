// hooks/useGenerateRecipe.js
import { useState } from "react";
import * as api from "../components/Api";

const useGenerateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRecipe = () => {
    setIsLoading(true);
    api
      .generateRecipe(recipeName)
      .then((response) => {
        console.log("Generated recipe:", response);
        setGeneratedRecipe(response);
      })
      .catch((error) => {
        console.error("Error generating recipe:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return { recipeName, setRecipeName, generatedRecipe, generateRecipe, isLoading };
};

export default useGenerateRecipe;
