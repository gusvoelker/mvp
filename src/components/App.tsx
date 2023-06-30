import { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";
import Options from "./Options";
import AddRecipe from "./Add";
import RecipeList from "./RecipeList/RecipeList";
import Login from "./Login/Login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserMeals, deleteUserMeal } from "./redux/slices/mealListSlice";
import { addCalendarMeals } from "./redux/slices/calendarSlice";
import { setPage } from "./redux/slices/navbarSlice";
import styled from "@emotion/styled";
import Test from "./Test";
import useWidth from "../hooks/useWidth";
import { getMealData } from "../helpers/getMeals";

const App = () => {
  const [calendarMeals, setCalendarMeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const page = useSelector((state: { navbar: string }) => state.navbar);
  const width = useWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    getMealData().then((meals) => dispatch(addUserMeals(meals)));
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
      dispatch(addCalendarMeals({ CMeals: calendarMeals }));
      setCalendarMeals(calendarMeals);
    });
  }, []);

  const style = {
    position: "relative",
    margin: "5% 0 0 40%",
    width: "50vw",
  };

  const HomePage = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 286px 1fr;
  `;

  const SmallHomePage = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 80px 1fr;
  `;

  const CalendarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 60px 0px 60px;
    box-sizing: border-box;
    background-color: #e7edf7;
    height: 100%;
  `;

  const components = {
    home: (
      <>
        <CalendarSection>
          <Calendar />
        </CalendarSection>
      </>
    ),
    recipeList: (
      <>
        <CalendarSection>
          <RecipeList />
        </CalendarSection>
      </>
    ),
    addRecipe: (
      <>
        <CalendarSection>
          <AddRecipe />
        </CalendarSection>
      </>
    ),
    discoverMeals: (
      <>
        <CalendarSection>Discover Meals</CalendarSection>
      </>
    ),
    myAccount: (
      <>
        <CalendarSection>My Account</CalendarSection>
      </>
    ),
    login: (
      <>
        <Login />
      </>
    ),
  };

  if (page === "login") {
    return <Login />;
  }

  if (width <= 1000) {
    return (
      <SmallHomePage>
        <Navbar />
        {components[page]}
      </SmallHomePage>
    );
  }
  return (
    <>
      <HomePage>
        <Navbar />
        {components[page]}
      </HomePage>
    </>
  );

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
