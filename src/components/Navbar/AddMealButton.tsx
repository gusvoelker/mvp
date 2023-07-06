import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddContainer, AddText } from "./NavbarStyles";
import { RootState } from "../redux/store";
import axios, { AxiosResponse } from "axios";
import { addCalendarMeals } from "../redux/slices/calendarSlice";
import { Meal, CMeal } from "../../types/Index";

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
  data: any; //TODO: Modify the type according to the actual response structure
}

const AddMealButton = () => {
  const selectedDay = useSelector(
    (state: RootState) => state.calendar.selectedDay
  );
  const calendarMealDates = useSelector((state: RootState) =>
    state.calendar.calendarMeals.map((meal) => meal.date)
  );

  const [currentDay, setCurrentDay] = useState("");
  const meals = useSelector((state: RootState) => state.mealList);
  const [containerStyles, setContainerStyles] = useState(initialStyles);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDay) {
      setContainerStyles(activeStyles);
    } else {
      setContainerStyles(initialStyles);
    }
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDay) {
      let day = selectedDay.replace(/-/g, "");
      setCurrentDay(day);
    }
  }, [selectedDay]);

  const handleAddMeal = async (): Promise<void> => {
    //TODO: actually retrieve the meals i guess
    //TODO: dont add the meal if it already exists instead just replace it.
    if (calendarMealDates.includes(selectedDay)) {
      return;
    }
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
          "http://127.0.0.1:8000/meals/calendar",
          {
            date: selectedDay,
            meal: randomMeal.id,
          }
        );
        if (res.data) {
          const calendarMeals = [];
          const calendarMeal: CMeal = {
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
