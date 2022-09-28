import React, {useState, useEffect} from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Navbar from './Navbar.jsx';
import Options from './Options.jsx';
import AddRecipe from './Add.jsx';
import RecipeList from './RecipeList.jsx';
import axios from 'axios';

const App = () => {

  const [page, setPage] = useState('recipe-list');
  const [meals, setMeals] = useState([])

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
        <Options />
        <Calendar style={style} width="50vw"/>
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
        <RecipeList meals={meals}/>
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