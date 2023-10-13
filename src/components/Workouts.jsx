import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/workouts.css';
import SpecificHero from './SpecificHero';

const Workouts = () => {
  const [specificwkout, setSpecificwkout] = useState([]);
  const [muscleSearch, setMuscleSearch] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setMuscleSearch(e.target.value);
  };

  const handleSearch = () => {
    getWorkoutMuscle(muscleSearch);
  };

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getWorkoutMuscle = async (specificWorkout) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${specificWorkout}?limit=12`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_EXERCISEDB,
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

  useEffect(() => {
    getWorkoutMuscle('dumbbell');
  }, []);

  return (
    <div>
      <SpecificHero/>
      <div className="mainContainer">
        <div className="dropdown">
          <div className="searchBar">
            <input className='actualSearch' type="text" placeholder='Type in Your Exercise Here!' value={muscleSearch} onChange={handleInputChange} />
            <Button className='buttonSearch' variant="primary" onClick={handleSearch}>
              Search Your Workout
            </Button>
          </div>
          <div className="workoutcard">
            {specificwkout.length === 0 ? (
              <p>No workout found.</p>
            ) : (
              specificwkout.map((workout, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={workout.gifUrl}
                    onClick={() => openModal(workout)}
                    style={{ cursor: 'pointer' }}
                  />
                  <Card.Body>
                    <Card.Title>{workout.name}</Card.Title>
                    <Card.Text>Target: {workout.target}</Card.Text>
                    <Card.Text>Secondary Muscles: <br /> {workout.secondaryMuscles.toString().replace(/,/g, ', ')}</Card.Text>
                    <Card.Text>Equipment: {workout.equipment}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWorkout && selectedWorkout.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Text>Instructions: <br /> {selectedWorkout && selectedWorkout.instructions.toString().replace(/,/g, ' ')}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Workouts;
