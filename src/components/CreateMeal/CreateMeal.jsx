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
  Square
} from "./CreateMeal.styles";

function CreateMeal({ onSubmit }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [textWidth, setTextWidth] = useState(145);

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
    setIngredients([...ingredients, { name: "", quantity: 1 }]);
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
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    console.log(metrics.width);
    return metrics.width;
  }

  // Handle the input change to update the placeholder width
  const handleInputChange = (e) => {
    const text = e.target.value;
    setName(text);
    if (text === '') {
      setTextWidth(145);
      return;
    }
    const width = measureTextWidth(text, 'bold 1rem Inter');
    setTextWidth(width + 12);
  };

  return (
    <CreateMealContainer>
      <Form onSubmit={handleSubmit}>
        <TextInputContainer>
          <TextInput
            placeholder="Nom de la recette"
            value={name}
            onChange={handleInputChange}
          />
          <Square style={{ left: `${textWidth}px` }} />
        </TextInputContainer>
        <IngredientsContainer>
          {ingredients.map((ingredient, index) => (
            <IngredientInputGroup key={index}>
              <FormLabel>
                Ingredient:
                <TextInput
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              </FormLabel>
              <FormLabel>
                Quantity:
                <TextInput
                  type="number"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    setIngredients([
                      ...ingredients.slice(0, index),
                      { ...ingredient, quantity: e.target.value },
                      ...ingredients.slice(index + 1),
                    ])
                  }
                />
              </FormLabel>
              <Button type="button" onClick={() => removeIngredient(index)}>
                X
              </Button>
            </IngredientInputGroup>
          ))}
        </IngredientsContainer>
        <Button type="button" onClick={addIngredient}>
          Add Ingredient
        </Button>
        <Button type="submit">Submit</Button>
      </Form>
    </CreateMealContainer>
  );
}

export default CreateMeal;
