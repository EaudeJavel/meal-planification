import { useState, useEffect } from 'react';
import { fetchMealTemplates } from '../components/Api';

export const useFetchMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchAndSetMeals = async () => {
      const fetchedMeals = await fetchMealTemplates();
      setMeals(fetchedMeals);
    };
    fetchAndSetMeals();
  }, []);

  return meals;
};