import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Musclegroup = () => {
  const [muscleGroupWkout, setMuscleGroupWkout] = useState([]);

  const getWorkoutMG = async (muscle) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}?limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0de2017cb2msh31d23ba8200d806p1cf1a2jsna4b99eb183c6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMuscleGroupWkout(result);
    } catch (error) {
      console.error(error);
      setMuscleGroupWkout([]); 
    }
  };

  return (
    <div>
     <div className='buttons'>
      <Button variant="primary" onClick={() => getWorkoutMG('all')}>
        All
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('cardio')}>
        Cardio
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('chest')}>
        Chest
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('back')}>
        Back
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('upper%20arms')}>
        Upper Arms
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('lower%20arms')}>
        Lower Arms
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('upper%20legs')}>
        Upper Legs
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('lower%20legs')}>
        Lower Legs
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('shoulders')}>
        Shoulders
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('neck')}>
        Neck
      </Button>{' '}
      <Button variant="primary" onClick={() => getWorkoutMG('waist')}>
        Waist
      </Button>{' '}
      </div>
      <div>
        
        {muscleGroupWkout.map((workout, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={workout.gifUrl} />
            <Card.Body>
              <Card.Title>{workout.name}</Card.Title>
              <Card.Text>{workout.equipment}</Card.Text>
              <Card.Text>{workout.instructions}</Card.Text>
             
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Musclegroup;
