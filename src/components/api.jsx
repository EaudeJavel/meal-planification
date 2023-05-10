import axios from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:1337/api";

export const fetchMealTemplates = async () => {
  try {
    const queryParams = new URLSearchParams({
      populate: "ingredients",
    });

    const response = await axios.get(`${API_URL}/meals`, {
      params: queryParams,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching meal templates:", error);
    throw error;
  }
};

// export const fetchPlannedMeals = async (startDate, endDate) => {
//   try {
//     const queryParams = new URLSearchParams({
//       populate: "mealTemplate",
//       date_gte: startDate,
//       date_lte: endDate,
//     });

//     const response = await axios.get(`${API_URL}/planned-meals`, {
//       params: queryParams,
//     });
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching planned meals:", error);
//     throw error;
//   }
// };

export const fetchPlannedMeals = async () => {
  try {
    const queryParams = new URLSearchParams({
      populate: "mealTemplate",
    });

    const response = await axios.get(`${API_URL}/planned-meals`, {
      params: queryParams,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching planned meals:", error);
    throw error;
  }
};

export const fetchPlannedMeal = async (mealId) => {
  try {
    const response = await axios.get(`${API_URL}/planned-meals/${mealId}`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch planned meal. Status code: ${response.status}`);
    }

    return response.data.data;
  } catch (error) {
    console.error(`Error fetching planned meal with ID ${mealId}:`, error);
    throw error;
  }
};

export const fetchIngredients = async () => {
  try {
    const response = await axios.get(`${API_URL}/ingredients`);
    console.log("Ingredients response:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};

export const addMealTemplate = async (mealTemplateData) => {
  try {
    const response = await axios.post(`${API_URL}/meals`, {
      data: mealTemplateData,
    });
    return response;
  } catch (error) {
    console.error("Error adding meal:", error);
    throw error;
  }
};

export const addPlannedMeal = async (plannedMealData) => {
  try {
    const response = await axios.post(`${API_URL}/planned-meals`, {
      data: plannedMealData,
    });
    return response;
  } catch (error) {
    console.error("Error adding planned meal:", error);
    throw error;
  }
};

export const addIngredient = async (ingredientData) => {
  try {
    const response = await axios.post(`${API_URL}/ingredients`, ingredientData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding ingredient:", error);
    throw error;
  }
};

export const generateRecipe = async (recipeName) => {
  try {
    const response = await axios.post(`${API_URL}/recipe/generate`, {
      recipe_name: recipeName,
    });
    return response.data.result;
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
};


export const useMealTemplates = () => {
  return useQuery('mealTemplates', fetchMealTemplates);
};

export const usePlannedMeals = () => {
  return useQuery('plannedMeals', fetchPlannedMeals);
};

export const usePlannedMeal = (mealId) => {
  return useQuery(['plannedMeal', mealId], () => fetchPlannedMeal(mealId), { enabled: Boolean(mealId) });
};

export const useIngredients = () => {
  return useQuery('ingredients', fetchIngredients);
};

export const useAddMealTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation(addMealTemplate, {
    onSuccess: () => {
      queryClient.invalidateQueries('mealTemplates');
    },
  });
};

export const useAddPlannedMeal = () => {
  const queryClient = useQueryClient();

  return useMutation(addPlannedMeal, {
    onSuccess: () => {
      queryClient.invalidateQueries('plannedMeals');
    },
  });
};

export const useAddIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation(addIngredient, {
    onSuccess: () => {
      queryClient.invalidateQueries('ingredients');
    },
  });
};

export const useGenerateRecipe = () => {
  return useMutation(generateRecipe);
};