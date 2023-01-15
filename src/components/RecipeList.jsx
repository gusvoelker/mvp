import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.jsx";
import styled from "styled-components";
import { useSelector } from "react-redux";

const RecipeConatainer = styled.ul`
  width: 60%;
  margin: 4% auto auto auto;
  padding: 0;
  border: 2px solid black;
`;
const RecipeTitle = styled.h1`
  text-align: center;
`;

const RecipeList = (props) => {
  const meals = useSelector((state) => state.mealList);
  if (meals.length === 0) {
    return <RecipeTitle>No Meals Yet Try Adding One</RecipeTitle>;
  }

  return (
    <>
      {meals.map((meal, i) => {
        return (
          <Recipe
            meal={meal}
            key={meal.id}
            id={meal.id}
            index={i}
            setMeals={props.setMeals}
            meals={props.meals}
          />
        );
      })}
    </>
  );
};

export default RecipeList;
