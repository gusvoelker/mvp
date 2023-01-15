import React, { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar.jsx";
import Navbar from "./Navbar.jsx";
import Options from "./Options.jsx";
import AddRecipe from "./Add.jsx";
import RecipeList from "./RecipeList.jsx";
import Login from "./Login.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserMeals } from "./redux/slices/mealListSlice.js";

const App = () => {
  const [calendarMeals, setCalendarMeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [page, setPage] = useState("recipe-list");
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('this is selected day', selectedDay)
    // console.log({calendarMeals})
  }, [calendarMeals]);

  useEffect(() => {
    axios.get("http://localhost:3060/meals").then(({ data }) => {
      dispatch(addUserMeals([...data]));
      setMeals(data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3060/days").then(({ data }) => {
      let calendarMeals = data.map((item) => {
        let calendarMeal = {
          date: item.date,
          meal: {
            mealName: item.mealName,
          },
        };
        return calendarMeal;
      });
      setCalendarMeals(calendarMeals);
    });
  }, []);

  const style = {
    position: "relative",
    margin: "5% 0 0 40%",
    width: "50vw",
  };

  //return statements
  if (page === "home") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Options
          selectedDay={selectedDay}
          calendarMeals={calendarMeals}
          setCalendarMeals={setCalendarMeals}
          meals={meals}
        />
        <Calendar
          setSelectedDay={setSelectedDay}
          style={style}
          meals={calendarMeals}
        />
      </>
    );
  }
  if (page === "login") {
    return (
      <>
        <Login setPage={setPage} />
      </>
    );
  }
  if (page === "add-recipe") {
    return (
      <>
        <Navbar setPage={setPage} />
        <AddRecipe setMeals={setMeals} meals={meals} />
      </>
    );
  }
  if (page === "recipe-list") {
    return (
      <>
        <Navbar setPage={setPage} />
        <RecipeList meals={meals} setMeals={setMeals} />
      </>
    );
  }
  if (page === "my-account") {
    return (
      <>
        <Navbar setPage={setPage} />
        My Account
      </>
    );
  }
  return <div>page not found</div>;
};

export default App;
