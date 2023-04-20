import React, { useState, useRef } from "react";
import {
  Form,
  FormLabel,
  TextInput,
  Button,
  IngredientsContainer,
  IngredientInputGroup,
  CreateMealContainer,
  TextInputContainer,
  Square,
} from "./CreateMeal.styles";

function CreateMeal({ onSubmit }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [textWidth, setTextWidth] = useState(175);

  const handleIngredientChange = (index, e) => {
    if (index >= ingredients.length) {
      return;
    }
    // Create a new array to avoid mutating the state
    const newIngredients = [...ingredients];
    newIngredients[index].name = e.target.value;
    setIngredients(newIngredients);
  };

  // Add an ingredient to the list
  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 1, unit: "" }]);
  };

  // Remove an ingredient from the list
  const removeIngredient = (index) => {
    setIngredients((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, ingredients });
  };

  // Helper to measure the text placeholder width
  function measureTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    console.log(metrics.width);
    return metrics.width;
  }

  // Handle the input change to update the placeholder width
  const handleInputChange = (e) => {
    const text = e.target.value;
    setName(text);
    if (text === "") {
      setTextWidth(175);
      return;
    }
    const width = measureTextWidth(text, "bold 1.2rem Inter");
    setTextWidth(width + 12);
  };

  return (
    <CreateMealContainer>
      <Form onSubmit={handleSubmit}>
        <TextInputContainer>
          <TextInput
            placeholder="Nom de la recette"
            value={name}
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            onChange={handleInputChange}
          />
          <Square style={{ left: `${textWidth}px` }} />
        </TextInputContainer>

        <IngredientsContainer>
          Ingredients

          <Button type="button" onClick={addIngredient}>
            Ajouter
          </Button>

          {/* Container so i can make it scrollable */}
          <div style={{ width:"70%" }}>
            {ingredients.map((ingredient, index) => (
              <IngredientInputGroup key={index}>
                <FormLabel>
                  <TextInput
                    placeholder="Pois chiches"
                    value={ingredient.name}
                    style={{ fontSize: "14px"}}
                    onChange={(e) => handleIngredientChange(index, e)}
                  />
                </FormLabel>
                <FormLabel>
                  <TextInput
                    type="number"
                    value={ingredient.quantity}
                    style={{ width: "70px",fontSize: "14px" }}
                    onChange={(e) =>
                      setIngredients([
                        ...ingredients.slice(0, index),
                        { ...ingredient, quantity: e.target.value },
                        ...ingredients.slice(index + 1),
                      ])
                    }
                  />
                </FormLabel>
                <FormLabel>
                  <select
                    value={ingredient.unit}
                    onChange={(e) =>
                      setIngredients([
                        ...ingredients.slice(0, index),
                        { ...ingredient, unit: e.target.value },
                        ...ingredients.slice(index + 1),
                      ])
                    }
                  >
                    <option value="g">g</option>
                    <option value="ml">ml</option>
                    <option value="autre">autre</option>
                  </select>
                </FormLabel>
                <Button type="button" onClick={() => removeIngredient(index)}>
                  X
                </Button>
              </IngredientInputGroup>
            ))}
          </div>
        </IngredientsContainer>
        <Button type="submit" style={{ alignSelf:"center" }}>Créer ma recette</Button>
      </Form>
    </CreateMealContainer>
  );
}

export default CreateMeal;
