import React, { useEffect, useState } from 'react';
import { fetchMealTemplates } from '../Api';
import { Heading, IngredientList, Ingredient, PageContainer } from '../../styles';

// Custom hook for fetching data
const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    asyncFunction().then(setData);
  }, [asyncFunction]);

  return data;
};

// Fetching weekly meals
const fetchWeeklyMeals = async () => {
  const result = await fetchMealTemplates();
  return result;
};

// Creating grocery list
const createGroceryList = (meals) => {
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
  return list;
};

function GroceryList() {
  const meals = useAsync(fetchWeeklyMeals);
  const groceryList = createGroceryList(meals);

  return (
    <PageContainer>
      <Heading>Grocery List</Heading>
      <IngredientList>
        {Object.entries(groceryList).map(([ingredient, count]) => (
          <Ingredient key={ingredient}>
            {ingredient}: {count}
          </Ingredient>
        ))}
      </IngredientList>
    </PageContainer>
  );
}

export default GroceryList;
