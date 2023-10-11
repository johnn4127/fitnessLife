import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/workouts.css'

const Workouts = () => {
  const [specificwkout, setSpecificwkout] = useState([]);
  const [muscleSearch, setMuscleSearch] = useState('');


  const handleInputChange = (e) => {
    setMuscleSearch(e.target.value);
  };

  const handleSearch = () => {
    getWorkoutMuscle(muscleSearch);
  };

  
  const getWorkoutMuscle = async (specificWorkout) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${specificWorkout}?limit=12`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e996a1879dmshdbc548a3916aeeap1009ffjsnd2dd76ae7730',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSpecificwkout(result);
    } catch (error) {
      console.error(error);
    }
  };


    useEffect(()=>{
     getWorkoutMuscle("dumbbell") 
    },[])
  
  return (
    <div>
      <div className="mainContainer">
        <div className="dropdown">
          <div className="searchBar">
            <input type="text" value={muscleSearch} onChange={handleInputChange} />
            <Button variant="primary" onClick={handleSearch}>
              Search Your Workout
            </Button>
          </div>
          <div className='workoutcard'>
            {specificwkout.map((workout, index) => (
              <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={workout.gifUrl} />
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <Card.Text>{workout.equipment}</Card.Text>
                  <Card.Text>{workout.instructions}</Card.Text>
                  <Button variant="primary">Add to Daily Workout</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
