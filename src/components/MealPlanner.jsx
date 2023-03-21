import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { addMeal, fetchIngredients } from './Api';
import AddIngredient from './AddIngredient';

function MealPlanner({ selectedDate, onCancel }) {
  const [modifiedData, handleInputChange] = useForm({
    name: '',
    day: selectedDate,
    ingredients: [],
  });

  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  // Fetch ingredients from the API and store them in the `ingredients` state
  useEffect(() => {
    const loadIngredients = async () => {
      try {
        const data = await fetchIngredients();
        setIngredients(data);
      } catch (error) {
        setError(error);
      }
    };
    loadIngredients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addMeal(modifiedData);
      console.log('Meal added:', response);
      setError(null);
      onCancel();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form field for meal name */}
        <label>
          Name:
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            value={modifiedData.name}
          />
        </label>
        {/* Form field for day */}
        <label>
          Day:
          <input
            type='text'
            name='day'
            onChange={handleInputChange}
            value={modifiedData.day}
          />
        </label>
        {/* Multi-select dropdown to select existing ingredients */}
        <label>
          Ingredients:
                    <select
            multiple
            value={modifiedData.ingredients}
            onChange={(e) => {
              const selectedOptions = Array.from(
                e.target.selectedOptions,
                (option) => option.value
              );
              handleInputChange({
                target: { name: 'ingredients', value: selectedOptions },
              });
            }}
          >
            {ingredients.map((ingredient) => (
              <option key={ingredient.id} value={ingredient.id}>
                {/* Check if the 'attributes' property exists before accessing 'name' to prevent errors */}
                {ingredient.attributes ? ingredient.attributes.name : ''}
              </option>
            ))}
          </select>

        </label>
        {/* AddIngredient component to add new ingredients */}
        <AddIngredient
          onAdd={(newIngredient) => {
            setIngredients([...ingredients, newIngredient]);
          }}
        />
        {/* Error message display */}
        {error && <p>Error: {error.message}</p>}
        {/* Buttons for submitting and canceling */}
        <button type='submit'>Submit</button>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default MealPlanner;
