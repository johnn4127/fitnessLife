import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/musclegroup.css'


const Musclegroup = () => {
  const [muscleGroupWkout, setMuscleGroupWkout] = useState([]);
  const [offSetNum, setOffSetNum] = useState(1);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('chest'); 

  const getWorkoutMG = async (muscle) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}?limit=12&offset=${offSetNum}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b89465e0a8msh3ce47971ac8469fp17c318jsnf6870ec3ca8e',
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

  const handleMuscleGroupClick = (muscle) => {
    setSelectedMuscleGroup(muscle);
    setOffSetNum(0);
    getWorkoutMG(muscle);
  };

  useEffect(() => {
    getWorkoutMG(selectedMuscleGroup);
  }, [offSetNum]);

  return (
    <div>
      <div className='buttons'>
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('all')}>
          All
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('cardio')}>
          Cardio
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('chest')}>
          Chest
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('back')}>
          Back
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('upper%20arms')}>
          Upper Arms
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('lower%20arms')}>
          Lower Arms
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('upper%20legs')}>
          Upper Legs
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('lower%20legs')}>
          Lower Legs
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('shoulders')}>
          Shoulders
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('neck')}>
          Neck
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('waist')}>
          Waist
        </Button>{' '}
      </div>
      <div className='musclegroupcardcontainer'>
        {muscleGroupWkout && muscleGroupWkout.map((workout, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={workout.gifUrl} />
            <Card.Body>
              <Card.Title>{workout.name}</Card.Title>
              <Card.Text>Equipment Type: <br /> {workout.equipment}</Card.Text>
              <Card.Text> Instructions: <br /> {workout.instructions}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <button onClick={() => setOffSetNum(offSetNum + 10)}>Next</button>
    </div>
  );
};

export default Musclegroup;