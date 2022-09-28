import React, {useState, useEffect} from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Navbar from './Navbar.jsx';
import Options from './Options.jsx';
import AddRecipe from './Add.jsx';
import RecipeList from './RecipeList.jsx';
import axios from 'axios';

const App = () => {

  let unplanned = [];
  for (let i = 1; i < 32; i++) {
    let emptyMeal = {
      mealName: '',
      description: '',
      recipeLink: '',
      cost: '',
      rating: '',
      difficulty: ''
    }
    unplanned.push(emptyMeal);
  }
  const [calendarMeals, setCalendarMeals] = useState(unplanned)
  const [selectedDay, setSelectedDay] = useState(null);
  const [page, setPage] = useState('home');
  const [meals, setMeals] = useState([])

  useEffect(() => {
    console.log('this is selected day', selectedDay)
  }, [selectedDay])

  useEffect(() => {
    axios.get('http://localhost:3060/meals')
    .then(({data}) => {setMeals(data)});
  }, []);

  const style = {
    position: "relative",
    margin: "5% 0 0 40%"
  }

  //return statements
  if (page === 'home') {
    return (
      <>
        <Navbar setPage={setPage}/>
        <Options selectedDay={selectedDay} calendarMeals={calendarMeals} setCalendarMeals={setCalendarMeals} meals={meals}/>
        <Calendar setSelectedDay={setSelectedDay} style={style} width="50vw" meals={calendarMeals}/>
      </>
    )
  }
  if (page === 'add-recipe') {
    return (
      <>
        <Navbar setPage={setPage}/>
        <AddRecipe setMeals={setMeals} meals={meals}/>
      </>
    )
  }
  if (page === 'recipe-list') {
    return (
      <>
        <Navbar setPage={setPage}/>
        <RecipeList meals={meals} setMeals={setMeals}/>
      </>
    )
  }
  if (page === 'my-account') {
    return (
      <>
        <Navbar setPage={setPage}/>
        My Account
      </>
    )
  }
  return (
    <div>page not found</div>
  )
}

export default App;