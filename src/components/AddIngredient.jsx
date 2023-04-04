import React, { useState } from "react";
import { addIngredient, fetchIngredients } from "./Api";
import { FormLabel, TextInput, Button } from "../styles";


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
      <FormLabel>
        New Ingredient:
        <TextInput
          type="text"
          name="newIngredient"
          value={newIngredient}
          onChange={handleNewIngredient}
        />
      </FormLabel>
      <Button onClick={addNewIngredient}>Add Ingredient</Button>
    </>
  );
}

export default AddIngredients;
