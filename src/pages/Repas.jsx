import React, { useState, useEffect } from "react";
import MealDetails from "../components/MealDetails/MealDetails";
import * as api from "../components/Api";
import { AppSection, Heading } from "../styles";

function Meal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.fetchPlannedMeals();
      setMeals(result);
    };
    fetchData();
  }, []);

  console.log(meals);


  return (
    <>
      <AppSection>
        <Heading>Tes prochains repas</Heading>
        <MealDetails meals={meals} />
      </AppSection>
    </>
  );
}

export default Meal;
