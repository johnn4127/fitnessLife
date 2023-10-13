import React from 'react'
import Planner from './Planner'
import '../styles/homepage.css'
import { createContext } from 'react'
import { useState } from 'react'
import Hero from './Hero'

export const Cardio = createContext()


const Homepage = () => {

  const [endOfWorkout, setEndOfWorkout] = useState('End the workout with walking on the treadmill on a incline of 12 and a speed of 3.0.')



  return (
    <>
    <Hero/>
      
      <Cardio.Provider value={{endOfWorkout}}>
        <Planner />
      </Cardio.Provider>


    </>
  )
}

export default Homepage