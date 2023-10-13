import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/musclegroup.css';
import ezbarbell from '../assets/equipmentIcons/ezbar.png'
import cable from '../assets/equipmentIcons/machine.png'
import assisted from '../assets/equipmentIcons/help.png'
import kettlebell from '../assets/equipmentIcons/kettlebell.png'
import medicine from '../assets/equipmentIcons/medicine-ball.png'
import bodyWeight from '../assets/equipmentIcons/scale.png'
import smith from '../assets/equipmentIcons/smith.png'
import weighted from '../assets/equipmentIcons/weight.png'
import barbell from '../assets/equipmentIcons/barbell.png'
import dumbbell from '../assets/equipmentIcons/dumbbells.png'
import '../styles/equipment.css'
import EquipmentHero from './EquipmentHero';

const Equipment = () => {
  const [equipmentMuscles, setEquipmentMuscles] = useState([]);
  const [offSetNum, setOffSetNum] = useState(1);
  const [selectedEquipmentGroup, setSelectedEquipmentGroup] = useState('dumbbell');
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const getEquipmentApi = async (equipment) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}?limit=12&offset=${offSetNum}`;
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
      <EquipmentHero />
      <div className='buttons'>
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('barbell')}>
          <img className='equipmentIcon' src={barbell} alt="" /> Barbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('ez%20barbell')}>
          <img className='equipmentIcon' src={ezbarbell} alt="" /> Ez Barbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('dumbbell')}>
          <img className='equipmentIcon' src={dumbbell} alt="" /> Dumbbell
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('body%20weight')}>
          <img className='equipmentIcon' src={bodyWeight} alt="" /> Body Weight
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('assisted')}>
          <img className='equipmentIcon' src={assisted} alt="" /> Assisted
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('weighted')}>
          <img className='equipmentIcon' src={weighted} alt="" /> Weighted
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('cable')}>
          <img className='equipmentIcon' src={cable} alt="" /> Cable
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('medicine%20ball')}>
          <img className='equipmentIcon' src={medicine} alt="" /> Medicine Ball
        </Button>{' '}
        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('kettlebell')}>
          <img className='equipmentIcon' src={kettlebell} alt="" />  Kettlebell
        </Button>{' '}

        <Button className='equipment' variant="primary" onClick={() => handleEquipmentGroupClick('smith%20machine')}>
          <img className='equipmentIcon' src={smith} alt="" /> Smith Machine
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
      <div style={{display:'flex',justifyContent:'center',margin:'25px'}}>
      <Button style={{width:'10vw',height:'10vh',fontSize:'x-large'}}  onClick={() => setOffSetNum(offSetNum + 10)}>Next</Button>
      </div>

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
