import React from 'react'
import Planner from './Planner'
import '../styles/homepage.css'
import { createContext } from 'react'
import { useState } from 'react'


export const Cardio = createContext()


const Homepage = () => {

  const [endOfWorkout, setEndOfWorkout] = useState('End the workout with walking on the treadmill on a incline of 12 and a speed of 3.0.')



  return (
    <>
      <div className='mainContainer'>
        <div className='leftContainer' >leftside</div>
        <div >
          <img className='main-con-img' src="https://tropeaka.com/cdn/shop/articles/main_image_d517c79f-4ec7-4946-bb5e-db7e80623e85_1080x.jpg?v=1571697737" alt="" />
        </div>
        <div className='rightContainer'>rightside</div>
      </div>
      <Cardio.Provider value={{endOfWorkout}}>
        <Planner />
      </Cardio.Provider>
    </>
  )
}

export default Homepage