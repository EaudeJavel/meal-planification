import React from 'react';
import { useState } from 'react';
import { useForm } from './useForm';
import { addMeal } from './api';

function MealPlanner() {
  const [modifiedData, handleInputChange] = useForm({
    name: '',
    day: '',
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addMeal(modifiedData);
      console.log(response);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Planner</h3>
        <label>
          Name:
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            value={modifiedData.name}
          />
        </label>
        <label>
          Day:
          <input
            type='text'
            name='day'
            onChange={handleInputChange}
            value={modifiedData.day}
          />
        </label>
        <br />
        {error && <p>Error: {error.message}</p>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default MealPlanner;
