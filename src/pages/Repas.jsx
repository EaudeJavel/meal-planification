import React, { useState, useEffect } from "react";
import MealDetails from "../components/MealDetails/MealDetails";
import * as api from "../components/Api";
import { AppSection, Heading } from "../styles";

function Meal() {
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchMealTemplates();
      setMeals(result);
    };
    fetchData();
  }, []);


  return (
    <>
      <AppSection>
        <Heading>Meals</Heading>
        <MealDetails meals={meals} />
      </AppSection>
    </>
  );
}

export default Meal;
