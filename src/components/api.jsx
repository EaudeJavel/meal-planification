import axios from 'axios';

const API_URL = 'http://localhost:1337/api';


export const fetchMeals = async (startDate, endDate) => {
  try {
    const queryParams = new URLSearchParams({
      populate: 'ingredients',
      date_gte: startDate,
      date_lte: endDate,
    });

    const response = await axios.get(`${API_URL}/meals`, {
      params: queryParams,
    });
    console.log('Meals response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};

// Fetch the list of ingredients
export const fetchIngredients = async () => {
  try {
    const response = await axios.get(`${API_URL}/ingredients`);
    console.log('Ingredients response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw error;
  }
};

// Add a new meal
export const addMeal = async (mealData) => {
  try {
    const response = await axios.post(`${API_URL}/meals`, { data: mealData });
    return response;
  } catch (error) {
    console.error('Error adding meal:', error);
    throw error;
  }
};

// Add a new ingredient
export const addIngredient = async (ingredientData) => {
  try {
    const response = await axios.post(`${API_URL}/ingredients`, ingredientData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding ingredient:', error);
    throw error;
  }
};