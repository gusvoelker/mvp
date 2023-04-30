import { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar.jsx";
import Navbar from "./Navbar.jsx";
import Options from "./Options.jsx";
import AddRecipe from "./Add.jsx";
import RecipeList from "./RecipeList.jsx";
import Login from "./Login.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserMeals } from "./redux/slices/mealListSlice.js";
import { addCalendarMeals } from "./redux/slices/calendarSlice.js";
import Test from "./Test.jsx";

const App = () => {
  const [calendarMeals, setCalendarMeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const page = useSelector((state: { navbar: string }) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ddd", page);
  }, [page]);
  useEffect(() => {
    // console.log('this is selected day', selectedDay)
    // console.log({calendarMeals})
  }, [calendarMeals]);

  useEffect(() => {
    axios.get("http://localhost:3060/meals").then(({ data }) => {
      dispatch(addUserMeals([...data]));
    });
    axios.get;
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
      dispatch(addCalendarMeals({ calendarMeals }));
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
        <Navbar />
        <Options
          selectedDay={selectedDay}
          calendarMeals={calendarMeals}
          setCalendarMeals={setCalendarMeals}
        />
        <Calendar
          setSelectedDay={setSelectedDay}
          style={style}
          meals={calendarMeals}
        />
      </>
    );
  }
  if (page === "test") {
    return (
      <>
        <Test />
      </>
    );
  }
  if (page === "login") {
    return (
      <>
        <Login />
      </>
    );
  }
  if (page === "add-recipe") {
    return (
      <>
        <Navbar />
        <AddRecipe />
      </>
    );
  }
  if (page === "recipe-list") {
    return (
      <>
        <Navbar />
        <RecipeList />
      </>
    );
  }
  if (page === "my-account") {
    return (
      <>
        <Navbar />
        My Account
      </>
    );
  }
  return <div>page not found</div>;
};

export default App;
