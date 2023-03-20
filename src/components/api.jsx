import axios from "axios";

const API_URL = "http://localhost:1337/api";

// Récupère la liste des recettes
export const fetchMeals = async (startDate, endDate) => {
  const response = await axios.get(`${API_URL}/meals?populate=ingredients&date_gte=${startDate}&date_lte=${endDate}`);
  console.log(response.data);
  return response.data;
};

// Récupère la liste des ingrédients
export const fetchIngredients = async () => {
  const response = await axios.get(`${API_URL}/ingredients`);
  return response.data;
};

// Ajoute une nouvelle recette
export const addMeal = async (mealData) => {
    try {
      const response = await axios.post(`${API_URL}/meals`, { data: mealData });
      return response;
    } catch (error) {
      throw error;
    }
  };