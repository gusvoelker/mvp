import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RadioButtonsGroup from './Radio.jsx';
import Filters from './Filters.jsx';
import Button from '@mui/material/Button';


const OptContainer = styled.div`
  height: 452px;
  width: 20%;
  position: absolute;
  margin: 5% 0 0 5%;
  text-align: center;
  padding-top: 40px;
  font-size: 1.4em;
  border: 2px solid grey;
  `

const Form = styled.form`
  margin-top: 6%;
`
const FilterTitle = styled.div`
margin-top: 10%;
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
      Options
      <Form >
        <RadioButtonsGroup />
        <FilterTitle>Random Options</FilterTitle>
        <Filters />
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