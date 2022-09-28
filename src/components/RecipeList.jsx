import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';


const RecipeConatainer = styled.ul`
  width: 60%;
  margin: 4% auto auto auto;
  padding: 0;
  border: 2px solid black;
`
const RecipeTitle = styled.h1`
  text-align: center;
`

const fakeMeak = {
  name: 'Tacos',
  description: 'A meal that is very tasty and good and I like to eat'
}

const RecipeList = (props) => {
  if (props.meals.length === 0) {
    return <RecipeTitle>No Meals Yet Try Adding One</RecipeTitle>
  }

  return (
    <>
      {props.meals.map((meal, i) => {
        return (
          <Recipe meal={meal} key={meal._id} index={i} setMeals={props.setMeals} meals={props.meals}/>
        )
      })}
    </>
  )
}

export default RecipeList;