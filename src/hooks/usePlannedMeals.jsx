import { useState, useEffect } from "react";
import { fetchPlannedMeal } from "../components/Api";

const usePlannedMeal = (id) => {
  const [plannedMeal, setPlannedMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPlannedMeal(id);
      if (result) {
        setPlannedMeal(result);
      } else {
        console.error("No planned meal found for the given ID");
      }
    };
    fetchData();
  }, [id]);

  return plannedMeal;
};

export default usePlannedMeal;
