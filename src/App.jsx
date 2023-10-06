import React from 'react'
import Homepage from './components/Homepage'
import Workouts from './components/Workouts'
import Navbars from './components/Navbars'
import Musclegroup from './components/Musclegroup'
import Equipment from './components/Equipment'
import Timer from './components/Timer'
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbars/>

      <Routes>

      <Route path='/' element= {<Homepage/>}/>
      <Route path='/workouts' element= {<Workouts/>}/>
      <Route path='/musclegroup' element= {<Musclegroup/>}/>
      <Route path='/equipment' element= {<Equipment/>}/>
      <Route path='/timer' element= {<Timer/>}/>

      </Routes>
    </div>
  )
}

export default App
