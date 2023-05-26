import React, { useEffect, useState } from "react";
import Recipe from "../Recipe.jsx";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RecipeConatainer, RecipeTitle } from "./RecipeListStyles";

const RecipeList = (props) => {
  const meals = useSelector((state: { mealList: any[] }) => state.mealList);
  if (meals.length === 0) {
    return <RecipeTitle>No Meals Yet Try Adding One</RecipeTitle>;
  }

  return (
    <>
      {meals.map((meal, i) => {
        return (
          <RecipeConatainer>
            <Recipe
              meal={meal}
              key={meal.id}
              id={meal.id}
              index={i}
              setMeals={props.setMeals}
              meals={props.meals}
            />
          </RecipeConatainer>
        );
      })}
    </>
  );
};

export default RecipeList;
