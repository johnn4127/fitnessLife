import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Planner = () => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (workout) => {
    setShowCardModal(true);
    setModalTitle(workout);
  };

  const closeModal = () => {
    setShowCardModal(false);
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Legs</td>
              <td>
                <Button onClick={() => openModal("Leg Workouts")}>
                  Leg Workouts
                </Button>
              </td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Chest and Triceps</td>
              <td>
                <Button onClick={() => openModal("Chest/Tri")}>
                  Chest/Tri
                </Button>
              </td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Back and Biceps</td>
              <td>
                <Button onClick={() => openModal("Back/Bi")}>
                  Back/Bi
                </Button>
              </td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Cardio and Shoulders</td>
              <td>
                <Button onClick={() => openModal("Cardio/Shoulders")}>
                  Cardio/Shoulders
                </Button>
              </td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Legs</td>
              <td>
                <Button onClick={() => openModal("Leg Workouts")}>
                  Legs
                </Button>
              </td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Hobbies</td>
              <td>
                <Button onClick={() => openModal("Hobbies")}>
                  Hobbies
                </Button>
              </td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Rest day</td>
              <td>
                <Button onClick={() => openModal("Rest")}>
                  Rest
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal show={showCardModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Planner;
