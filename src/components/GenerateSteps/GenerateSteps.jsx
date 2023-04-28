import React, { useState } from "react";
import * as api from "../Api";

function GenerateSteps() {
  const [recipeName, setRecipeName] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = () => {
    setIsLoading(true);
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
      <div>
        {/* Remplacer l'input par l'automatisation de la génération. Le parmètre du nom doit être récupéré quand le composant est render. Ensuite, un bouton est le déclencheur*/}
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="Nom de la recette"
        />
        <button onClick={handleGenerateRecipe}>C'est parti !</button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : generatedRecipe ? (
        <>
          <h3>Generated Recipe</h3>
          <div>{generatedRecipe}</div>
        </>
      ) : null}
    </>
  );
}

export default GenerateSteps;