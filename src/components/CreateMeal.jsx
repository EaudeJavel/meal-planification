import React, { useState } from 'react';
import { Form, FormLabel, TextInput, Button, SubHeading, IngredientsContainer, IngredientInputGroup } from '../styles';

function CreateMeal({ onSubmit }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleIngredientChange = (index, e) => {
    const newIngredients = [...ingredients];
    newIngredients[index].name = e.target.value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 1 }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, ingredients });
  };

  return (
    <div>
      <SubHeading>Create a new meal</SubHeading>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Meal name:
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </FormLabel>
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
    </div>
  );
}

export default CreateMeal;
