import axios from "axios";

export const getMealData = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/meals/");
  return data;
};
