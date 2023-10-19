import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import MuscleGroupHero from './MuscleGroupHero';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/musclegroup.css';
import abs from '../assets/muscleIcons/abs.png'
import back from '../assets/muscleIcons/back.png'
import cardio from '../assets/muscleIcons/runner.png'
import chest from '../assets/muscleIcons/pectorals.png'
import calves from '../assets/muscleIcons/calves.png'
import lowerarms from '../assets/muscleIcons/competition.png'
import upperarms from '../assets/muscleIcons/muscle.png'
import shoulders from '../assets/muscleIcons/shoulder.png'
import upperleg from '../assets/muscleIcons/leg.png'

const Musclegroup = () => {
  const [muscleGroupWkout, setMuscleGroupWkout] = useState([]);
  const [offSetNum, setOffSetNum] = useState(1);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('chest');
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  const getWorkoutMG = async (muscle) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}?limit=12&offset=${offSetNum}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_EXERCISEDB,
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

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowCardModal(true);
  };

  useEffect(() => {
    getWorkoutMG(selectedMuscleGroup);
  }, [offSetNum, selectedMuscleGroup]);

  return (
    <div>
      <MuscleGroupHero/>
      <div className='buttons'>
        < Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('cardio')}>
          <img className='muscleIcon' src={cardio} alt="" /> Cardio
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('chest')}>
          <img className='muscleIcon' src={chest} alt="" /> Chest
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('back')}>
          <img className='muscleIcon' src={back} alt="" /> Back
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('upper%20arms')}>
          <img className='muscleIcon' src={upperarms} alt="" />
          Upper Arms
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('lower%20arms')}>
          <img className='muscleIcon' src={lowerarms} alt="" /> Lower Arms
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('upper%20legs')}>
          <img className='muscleIcon' src={upperleg} alt="" /> Upper Legs
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('lower%20legs')}>
          <img className='muscleIcon' src={calves} alt="" /> Lower Legs
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('shoulders')}>
          <img className='muscleIcon' src={shoulders} alt="" /> Shoulders
        </Button>{' '}
        <Button className='musclebutton' variant="primary" onClick={() => handleMuscleGroupClick('waist')}>
          <img className='muscleIcon' src={abs} alt="" /> Abs
        </Button>{' '}
      </div>
      
      <div className='musclegroupcardcontainer'>
        {muscleGroupWkout &&
          muscleGroupWkout.map((workout, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={workout.gifUrl}
                onClick={() => handleCardClick(workout)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>

                <Card.Text>Target: <br /> {workout.target}</Card.Text>
                <Card.Text>Secondary Muscles: <br /> {workout.secondaryMuscles.toString().replace(/,/g, ', ')}</Card.Text>

              </Card.Body>
            </Card>
          ))}
      </div>
      <div style={{display:'flex',justifyContent:'center',margin:'25px'}}>
      <Button style={{height:'10%',fontSize:'x-large'}}  onClick={() => setOffSetNum(offSetNum + 10)}>Next</Button>
      </div>
      <Modal show={showCardModal} onHide={() => setShowCardModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard && selectedCard.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <div>
              <Card.Img variant="top" src={selectedCard.gifUrl} />
              <Card.Text>Equipment Type: <br /> {selectedCard.equipment}</Card.Text>
              <Card.Text>Instructions: <br /> {selectedCard.instructions.toString().replace(/,/g, ' ')}</Card.Text>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCardModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default Musclegroup;
