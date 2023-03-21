import React, { useState } from "react";
import { addIngredient, fetchIngredients } from "./Api";

function AddIngredients({ onAdd }) {
  const [newIngredient, setNewIngredient] = useState("");

  const handleNewIngredient = (e) => {
    setNewIngredient(e.target.value);
  };

  const addNewIngredient = async () => {
    try {
      await addIngredient({ name: newIngredient });
      setNewIngredient("");
      // Fetch the updated list of ingredients
      const updatedIngredients = await fetchIngredients();
      onAdd(updatedIngredients);
    } catch (error) {
      console.error("Error adding ingredient:", error);
    }
  };

  return (
    <>
      <label>
        New Ingredient:
        <input
          type="text"
          name="newIngredient"
          value={newIngredient}
          onChange={handleNewIngredient}
        />
      </label>
      <button onClick={addNewIngredient}>Add Ingredient</button>
    </>
  );
}

export default AddIngredients;
