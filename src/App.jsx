import React from 'react'
import Homepage from './components/Homepage'
import Workouts from './components/Workouts'
import Navbars from './components/Navbars'
import Musclegroup from './components/Musclegroup'
import Equipment from './components/Equipment'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

import Bmi from './components/Bmi'
import './App.css'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Navbars/>

      <Routes>

      <Route path='/' element= {<Homepage/>}/>
      <Route path='/workouts' element= {<Workouts/>}/>
      <Route path='/musclegroup' element= {<Musclegroup/>}/>
      <Route path='/equipment' element= {<Equipment/>}/>
      <Route path='/bmi' element= {<Bmi/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
