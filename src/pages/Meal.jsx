import React, { useState, useEffect } from "react";
import MealDetails from "../components/MealDetails";
import * as api from "../components/Api";
import { AppSection, ImageSection, Heading } from '../styles';

function Meal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchMeals();
      setMeals(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <AppSection>
        <Heading>Meal Planner</Heading>
        <MealDetails meals={meals} />
      </AppSection>
      <ImageSection />
    </>
  );
}

export default Meal;
