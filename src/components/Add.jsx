import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';



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
          id="Meal Name"
          label="Meal Name"
          value={mealName}
          onChange={handleMealNameChange}
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
        <Button variant="contained" sx={{fontSize: 24, width: '65%'}}> Add </Button>
      </div>
    </Box>
    </AddContainer>
  )
};

export default AddRecipe;