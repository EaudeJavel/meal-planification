import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../components/Api';

function GroceryList() {
  const [meals, setMeals] = useState([]);
  const [groceryList, setGroceryList] = useState({});

  useEffect(() => {
    const fetchWeeklyMeals = async () => {
      const result = await fetchMeals();
      setMeals(result);
    };
    fetchWeeklyMeals();
  }, []);

  useEffect(() => {
    const list = {};
    if (Array.isArray(meals)) {
      meals.forEach((meal) => {
        meal.attributes.ingredients.data.forEach((ingredient) => {
          const { name } = ingredient.attributes;
          if (list[name]) {
            list[name] += 1;
          } else {
            list[name] = 1;
          }
        });
      });
    }
    setGroceryList(list);
  }, [meals]);


  return (
    <div>
      <h1>Liste de courses</h1>
      <ul>
        {Object.entries(groceryList).map(([ingredient, count]) => (
          <li key={ingredient}>
            {ingredient}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
