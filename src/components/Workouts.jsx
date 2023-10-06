import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${specificWorkout}?limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0de2017cb2msh31d23ba8200d806p1cf1a2jsna4b99eb183c6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSpecificwkout(result);
    } catch (error) {
      console.error(error);
    }
  };

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
          <div>
            {specificwkout.map((workout, index) => (
              <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={workout.gifUrl} />
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <Card.Text>{workout.equipment}</Card.Text>
                  <Card.Text>{workout.instructions}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
