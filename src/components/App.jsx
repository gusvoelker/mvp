import React, {useState, useEffect} from 'react';
import Calendar from './Calendar/Calendar.jsx';
const App = () => {

  const style = {
    position: "relative",
    margin: "auto"
  }

  return (
    <>
      <h1>Dinner Time</h1>
      <Calendar style={style} width="50vw"/>
    </>
  )
}

export default App;