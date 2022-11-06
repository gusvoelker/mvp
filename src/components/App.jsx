import React, {useState, useEffect} from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Navbar from './Navbar.jsx';
import Options from './Options.jsx';
import AddRecipe from './Add.jsx';
import RecipeList from './RecipeList.jsx';
import axios from 'axios';

const App = () => {
  let emptyMeal = {
    mealName: 'chicken',
    description: '',
    recipeLink: '',
    cost: '',
    rating: '',
    difficulty: ''
  }
  // let unplanned = [];
  // for (let i = 1; i < 32; i++) {
  //   let emptyMeal = {
  //     mealName: '',
  //     description: '',
  //     recipeLink: '',
  //     cost: '',
  //     rating: '',
  //     difficulty: ''
  //   }
  //   unplanned.push(emptyMeal);
  // }
  // const [calendarMeals, setCalendarMeals] = useState(unplanned)
  let example1 = {
    date: 16112022,
    meal: emptyMeal
  }
  let example2 = {
    date: 15112022,
    meal: emptyMeal
  }
  const [calendarMeals, setCalendarMeals] = useState
  ([example1, example2]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [page, setPage] = useState('home');
  const [meals, setMeals] = useState([])

  useEffect(() => {
    // console.log('this is selected day', selectedDay)
  }, [selectedDay])

  useEffect(() => {
    axios.get('http://localhost:3060/meals')
    .then(({data}) => {setMeals(data)});
  }, []);

  const style = {
    position: "relative",
    margin: "5% 0 0 40%",
    width: "50vw",
  }

  //return statements
  if (page === 'home') {
    return (
      <>
        <Navbar setPage={setPage}/>
        <Options selectedDay={selectedDay} calendarMeals={calendarMeals} setCalendarMeals={setCalendarMeals} meals={meals}/>
        <Calendar setSelectedDay={setSelectedDay} style={style}  meals={calendarMeals}/>
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