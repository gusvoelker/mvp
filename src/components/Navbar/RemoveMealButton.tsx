import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddContainer, AddText } from "./NavbarStyles";
import { RootState } from "../redux/store";
import axios, { AxiosResponse } from "axios";
import { removeCalendarMeal } from "../redux/slices/calendarSlice";

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

const RemoveMealButton = () => {
  const selectedDay = useSelector(
    (state: RootState) => state.calendar.selectedDay
  );
  const calendarMeals = useSelector(
    (state: RootState) => state.calendar.calendarMeals
  );
  const dispatch = useDispatch();

  const [containerStyles, setContainerStyles] = useState(initialStyles);
  useEffect(() => {
    if (selectedDay) {
      setContainerStyles(activeStyles);
    } else {
      setContainerStyles(initialStyles);
    }
  }, [selectedDay]);

  const handleRemove = async (): Promise<void> => {
    //TODO: this has to be implemented on the backend
    if (calendarMeals.some((meal) => meal.date === selectedDay)) {
      try {
        axios.delete("http://127.0.0.1:8000/meals/calendar", {
          params: { date: selectedDay },
        });
        dispatch(removeCalendarMeal({ date: selectedDay }));
      } catch (error) {
        // Handle error
      }
    }
  };

  return (
    <AddContainer styles={containerStyles} onClick={() => handleRemove()}>
      <AddText>Remove Meal</AddText>
    </AddContainer>
  );
};

export default RemoveMealButton;
