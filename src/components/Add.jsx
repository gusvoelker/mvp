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
        />
        <TextField
          id="recipe-link"
          label="Recipe Link"
        />
        <TextField
          id="cost"
          label="Cost"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="rating"
          label="Rating 1-3"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 3 } }}
        />
        <TextField
          id="difficulty"
          label="Difficulty 1-5"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 5 } }}
        />
        <Button variant="contained" sx={{fontSize: 24, width: '65%'}}> Add </Button>
      </div>
    </Box>
    </AddContainer>
  )
};

export default AddRecipe;