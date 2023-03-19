import axios from "axios";
const url = "http://localhost:1337/api/meals";
export const readMeals = () => axios.get(url);