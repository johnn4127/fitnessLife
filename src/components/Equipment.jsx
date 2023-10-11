import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/musclegroup.css';

const Equipment = () => {
  const [equipmentMuscles, setEquipmentMuscles] = useState([]);
  const [offSetNum, setOffSetNum] = useState(1);
  const [selectedEquipmentGroup, setSelectedEquipmentGroup] = useState('dumbbell');
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const getEquipmentApi = async (equipment) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}?limit=10&offset=${offSetNum}`;
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
      console.log(result);
      setEquipmentMuscles(result);
    } catch (error) {
      console.error(error);
      setEquipmentMuscles([]);
    }
  };

  const handleEquipmentGroupClick = (equipment) => {
    setSelectedEquipmentGroup(equipment);
    setOffSetNum(0);
    getEquipmentApi(equipment);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowCardModal(true);
  };

  useEffect(() => {
    console.log(selectedEquipmentGroup);
    getEquipmentApi(selectedEquipmentGroup);
  }, [offSetNum]);

  return (
    <div>
      <div className='buttons'>
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('barbell')}>
          Barbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('dumbbell')}>
          Dumbbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('body%20weight')}>
          Body Weight
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('cable')}>
          Cable
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('medicine%20ball')}>
          Medicine Ball
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('kettlebell')}>
          Kettlebell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('resistance%20band')}>
          Resistance Band
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('stability%20band')}>
          Stability Band
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('olympic%20barbell')}>
          Olympic Barbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('ez%20barbell')}>
          Ez Barbell
        </Button>{' '}
      </div>
      <div className='musclegroupcardcontainer'>
        {equipmentMuscles &&
          equipmentMuscles.map((equipmentswk, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={equipmentswk.gifUrl}
                onClick={() => handleCardClick(equipmentswk)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Title>{equipmentswk.name}</Card.Title>
                <Card.Text>Equipment Type: {equipmentswk.equipment}</Card.Text>
                <Card.Text>Target: {equipmentswk.target}</Card.Text>
                <Card.Text>Secondary Muscles: {equipmentswk.secondaryMuscles.join(', ')}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      <button onClick={() => setOffSetNum(offSetNum + 10)}>Next</button>

      <Modal show={showCardModal} onHide={() => setShowCardModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard && selectedCard.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <div>
              <Card.Img variant="top" src={selectedCard.gifUrl} />
              <Card.Text>Equipment Type: {selectedCard.equipment}</Card.Text>
              <Card.Text>Instructions: {selectedCard.instructions.join(' ')}</Card.Text>
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

export default Equipment;
