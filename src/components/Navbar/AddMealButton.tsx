import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddContainer, AddText } from "./NavbarStyles";
import { RootState } from "../redux/store";
import axios, { AxiosResponse } from "axios";
import { addCalendarMeals } from "../redux/slices/calendarSlice";

const initialStyles = {
  backgroundColor: "#faeed0",
  color: "#ababab",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const activeStyles = {
  backgroundColor: "#f2d184",
  color: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

interface ApiResponse {
  data: any; // Modify the type according to the actual response structure
}

const AddMealButton = () => {
  const selectedDay = useSelector(
    (state: RootState) => state.calendar.selectedDay
  );
  const meals = useSelector((state: RootState) => state.mealList);
  type Meal = (typeof meals)[number];
  const calendarMeals = useSelector(
    (state: RootState) => state.calendar.calendarMeals
  );
  type CalendarMeal = (typeof calendarMeals)[number];
  const dispatch = useDispatch();

  const [containerStyles, setContainerStyles] = useState(initialStyles);
  useEffect(() => {
    if (selectedDay) {
      setContainerStyles(activeStyles);
    } else {
      setContainerStyles(initialStyles);
    }
  }, [selectedDay]);

  const handleAddMeal = async (): Promise<void> => {
    if (meals.length === 0) {
      return;
    }
    const getRandomIndex = (maxIndex: number): number => {
      return Math.floor(Math.random() * maxIndex);
    };
    if (selectedDay) {
      try {
        const randomIdex = getRandomIndex(meals.length);
        const randomMeal: Meal = meals[randomIdex];
        const res: AxiosResponse<ApiResponse> = await axios.post(
          "http://localhost:3060/days",
          {
            date: selectedDay,
            title: randomMeal.title,
          }
        );
        if (res.data) {
          const calendarMeals = [];
          const calendarMeal: CalendarMeal = {
            date: selectedDay,
            meal: {
              cost: randomMeal.cost,
              id: randomMeal.id,
              title: randomMeal.title,
              description: randomMeal.description,
              category: randomMeal.category,
              rating: randomMeal.rating,
              recipe_link: randomMeal.recipe_link,
              difficulty: randomMeal.difficulty,
            },
          };
          calendarMeals.push(calendarMeal);
          dispatch(addCalendarMeals({ CMeals: calendarMeals }));
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  return (
    <AddContainer styles={containerStyles} onClick={() => handleAddMeal()}>
      <AddText>Add Meal</AddText>
    </AddContainer>
  );
};

export default AddMealButton;
