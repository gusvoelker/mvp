import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RadioButtonsGroup from './Radio.jsx';
import Filters from './Filters.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';




const OptContainer = styled.div`
  height: 482px;
  width: 20%;
  position: absolute;
  margin: 5% 0 0 5%;
  text-align: center;
  padding-top: 10px;
  font-size: 1.4em;
  border: 2px solid skyblue;
  border-radius: 2px;
  background-color: white;
  `
//
const Form = styled.form`
  margin-top: 4%;
`
const FilterTitle = styled.div`
margin-top: 4%;
`
const BttnContainer = styled.div`
margin-top: 10%;
`

const Options = (props) => {

  let emptyMeal = {
    mealName: '',
    description: '',
    recipeLink: '',
    cost: '',
    rating: '',
    difficulty: ''
  }
  const handleAddMeal = () => {
    Array.prototype.random = function () {
      return this[Math.floor((Math.random()*this.length))];
    }
    if (props.selectedDay) {
      props.calendarMeals[props.selectedDay] = props.meals.random();
      props.setCalendarMeals([...props.calendarMeals])
    }
  }

  const handleRemoveMeal = () => {
    props.calendarMeals[props.selectedDay] = emptyMeal;
    props.setCalendarMeals([...props.calendarMeals]);
  };

  return (
    <OptContainer>
      Meal Type
      <Form >
        <RadioButtonsGroup />
        <FilterTitle>Filters</FilterTitle>
        <Filters />
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75%' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          sx={{mt: 1}}
          id="max-cost"
          label="Max Cost"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="recent"
          label="Days Since Selected"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 3 } }}
        />
    </Box>
        <BttnContainer>
          <Button onClick={handleAddMeal} variant="contained" sx={{fontSize: 24, width: '90%'}}> Add Meal </Button>
        </BttnContainer>
        <BttnContainer>
          <Button onClick={handleRemoveMeal} variant="contained" sx={{fontSize: 24, width: '90%'}}> Remove Meal </Button>
        </BttnContainer>
      </Form>
    </OptContainer>
  )
}

export default Options;