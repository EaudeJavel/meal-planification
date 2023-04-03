import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, ingredients });
  };

  return (
    <div>
      <h3>Create a new meal</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Meal name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <div>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <label>
                Ingredient:
                <input
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, e)}
                />
              </label>
              <label>
                Quantity:
                <input
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
              </label>
            </div>
          ))}
        </div>
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateMeal;
