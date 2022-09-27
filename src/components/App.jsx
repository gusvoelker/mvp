import React, {useState, useEffect} from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Navbar from './Navbar.jsx';
import Options from './Options.jsx'

const App = () => {

  const style = {
    position: "relative",
    margin: "5% 0 0 40%"
  }

  return (
    <>
      <Navbar />
      <Options />
      <Calendar style={style} width="50vw"/>
    </>
  )
}

export default App;