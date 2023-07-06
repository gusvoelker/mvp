import { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";
import AddRecipe from "./Add";
import RecipeList from "./RecipeList/RecipeList";
import Login from "./Login/Login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserMeals, deleteUserMeal } from "./redux/slices/mealListSlice";
import { addCalendarMeals } from "./redux/slices/calendarSlice";
import styled from "@emotion/styled";
import useWidth from "../hooks/useWidth";
import { getMealData } from "../helpers/getMeals";

const App = () => {
  const page = useSelector((state: { navbar: string }) => state.navbar);
  const width = useWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    getMealData().then((meals) => dispatch(addUserMeals(meals)));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/meals/calendar").then(({ data }) => {
      dispatch(addCalendarMeals({ CMeals: data }));
    });
  }, []);

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
};

export default App;
