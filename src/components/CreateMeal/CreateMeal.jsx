import React, { useState } from "react";
import {
  Form,
  FormLabel,
  TextInput,
  Button,
  IngredientsContainer,
  IngredientInputGroup,
  CreateMealContainer,
  TextInputContainer,
  InlineTitle,
  TextSelect
} from "./CreateMeal.styles";

const Ingredient = ({ ingredient, index, onChange, onRemove }) => (
  <IngredientInputGroup>
    <FormLabel>
      <TextInput
        placeholder="Nom de l'ingrédient"
        value={ingredient.name}
        style={{ fontSize: "14px" }}
        onChange={(e) => onChange(index, "name", e.target.value)}
      />
    </FormLabel>
    <FormLabel>
      <TextInput
        type="number"
        value={ingredient.quantity}
        style={{ width: "70px", fontSize: "14px" }}
        onChange={(e) => onCehange(index, "quantity", e.target.value)}
      />
    </FormLabel>
    <FormLabel>
      <TextSelect
        value={ingredient.unit}
        onChange={(e) => onChange(index, "unit", e.target.value)}
      >
        <option value="g">g</option>
        <option value="ml">ml</option>
        <option value="autre">autre</option>
      </TextSelect>
    </FormLabel>
    <Button type="button" onClick={() => onRemove(index)}>
      X
    </Button>
  </IngredientInputGroup>
);

function CreateMeal({ onSubmit }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setName(text);
  };

  const handleIngredientChange = (index, field, value) => {
    setIngredients((prevIngredients) => {
      const newIngredients = [...prevIngredients];
      newIngredients[index][field] = value;
      return newIngredients;
    });
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 1, unit: "" }]);
  };

  const removeIngredient = (index) => {
    setIngredients((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, ingredients });
  };

  return (
    <CreateMealContainer>
      <InlineTitle>Entrez le nom et les ingrédients de la recette !</InlineTitle>
      <Form onSubmit={handleSubmit}>
        <TextInputContainer>
          <TextInput
            placeholder="Nom de la nouvelle recette"
            value={name}
            onChange={handleInputChange}
          />
          <Button type="button" onClick={addIngredient}>
            Ajouter ingrédient
          </Button>
        </TextInputContainer>

        <IngredientsContainer>
          <div style={{ width: "100%" }}>
            {ingredients.map((ingredient, index) => (
              <Ingredient
                key={index}
                ingredient={ingredient}
                index={index}
                onChange={handleIngredientChange}
                onRemove={removeIngredient}
              />
            ))}
          </div>
        </IngredientsContainer>
        <Button type="submit" style={{ alignSelf: "center" }}>
          Créer ma recette
        </Button>
      </Form>
    </CreateMealContainer>
  );
}

export default CreateMeal;
