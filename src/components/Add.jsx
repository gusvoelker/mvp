import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import axios from 'axios';




const Add = styled.form`
  background-color: whitesmoke;
  width: 40%;
  height: 70vh;
  margin: auto;
`

const AddContainer = styled.div`
  text-align: center;
`

const AddRecipe = (props) => {
  //Add description
  const [description, setDescription] = useState('');
  const [mealName, setMealName] = useState('');
  const [recipeLink, setRecipeLink] = useState('');
  const [cost, setCost] = useState('');
  const [rating, setRating] = useState('1');
  const [difficulty, setDifficulty] = useState('1');

  const handleMealNameChange = (event) => {
    event.persist();
    setMealName(event.target.value);
  };

  const handleRatingChange = (event) => {
    event.persist();
    setRating(event.target.value);
  };

  const handleLinkChange = (event) => {
    event.persist();
    setRecipeLink(event.target.value);
  };

  const handleCostChange = (event) => {
    event.persist();
    setCost(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    event.persist();
    setDifficulty(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.persist();
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    let obj = {
      mealName: mealName,
      description: description,
      recipeLink: recipeLink,
      cost: cost,
      rating: rating,
      difficulty: difficulty
    }
    console.log('this is obj', obj);
    axios.post('http://localhost:3060/meals', obj)
    .then(() => {
      axios.get('http://localhost:3060/meals')
      .then(({data}) => {props.setMeals(data)});
    })
  }

  return (
    <AddContainer>
      <h1>Add Recipe</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '65%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="meal-name"
          label="Meal Name"
          value={mealName}
          onChange={handleMealNameChange}
        />
        <TextField
          id="description"
          label="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          id="recipe-link"
          label="Recipe Link"
          value={recipeLink}
          onChange={handleLinkChange}
        />
        <TextField
          id="cost"
          label="Cost"
          value={cost}
          onChange={handleCostChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="rating"
          label="Rating 1-3"
          type="number"
          value={rating}
          onChange={handleRatingChange}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
        />
        <TextField
          id="difficulty"
          label="Difficulty 1-5"
          type="number"
          value={difficulty}
          onChange={handleDifficultyChange}
          InputProps={{ inputProps: { min: 1, max: 5 } }}
        />
        <Button onClick={handleSubmit} variant="contained" sx={{fontSize: 24, width: '65%'}}> Add </Button>
      </div>
    </Box>
    </AddContainer>
  )
};

export default AddRecipe;