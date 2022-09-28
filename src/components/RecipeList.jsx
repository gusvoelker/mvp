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

const RecipeList = () => {
  // return (
  //   <>
  //     <RecipeTitle>Recipe List</RecipeTitle>
  //     <RecipeConatainer>
  //       <Recipe />
  //       <Recipe />
  //     </RecipeConatainer>
  //   </>
  // )
  return (
    <>
      <Recipe meal={fakeMeak}/>
      <Recipe meal={fakeMeak}/>
      <Recipe meal={fakeMeak}/>
      <Recipe meal={fakeMeak}/>

    </>
  )
}

export default RecipeList;