import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import PlannerDescription from './PlannerDescription';
import { Cardio } from './Homepage';
import { useContext } from 'react';


const Planner = () => {
  const endWk = useContext(Cardio)
  const [showCardModal, setShowCardModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [workoutDescriptions, setWorkoutDescriptions] = useState({
    'Leg Workouts': `Four sets of 10 reps: Squats, Lunges, Deadlifts, Leg Press, Leg Curls, and Step-Ups. ${endWk}`,
    'Chest/Tri': `Four sets of 10 reps: Bench Press, Dumbbell Flys, Incline Bench Press, Cable Crossover; Triceps: Tricep Dips, Tricep Pushdowns (Cable Machine), Close-Grip Bench Press, and Skull Crushers (Lying Tricep Extensions). ${endWk} `,
    'Back/Bi': `Four sets of 10 reps: Back: Pull-Ups, Bent-Over Rows, Lat Pulldowns, and Deadlifts; Biceps: Bicep Curls, Hammer Curls, Preacher Curls, and Concentration Curls. ${endWk}`,
    'Abs/Shoulders': `Four sets of 10 reps: Abs: Crunches, Leg Raises, Planks, and Russian Twists; Shoulders: Overhead Shoulder Press, Lateral Raises, Front Raises, and Upright Rows.${endWk}`,
    'Hobbies': 'Active Hobbies: hiking, swimming, yoga, pilates, and playing a sport (e.g., pickleball, basketball).',
    'Rest': 'Stretch and take a relaxing day. ',
  });

  

  const openModal = (workout) => {
    setShowCardModal(true);
    setModalTitle(workout);
  };

  const closeModal = () => {
    setShowCardModal(false);
  };

  return (
    <div>
      <h1>Sample Weekly Planner</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Day</th>
              <th>Target</th>
              <th>Workouts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Legs</td>
              <td>
                <Button onClick={() => openModal('Leg Workouts')}>
                  Leg Workouts
                </Button>
              </td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Chest and Triceps</td>
              <td>
                <Button onClick={() => openModal('Chest/Tri')}>
                  Chest/Tri
                </Button>
              </td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Back and Biceps</td>
              <td>
                <Button onClick={() => openModal('Back/Bi')}>
                  Back/Bi
                </Button>
              </td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Cardio and Shoulders</td>
              <td>
                <Button onClick={() => openModal('Abs/Shoulders')}>
                  Cardio/Shoulders
                </Button>
              </td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Legs</td>
              <td>
                <Button onClick={() => openModal('Leg Workouts')}>
                  Legs
                </Button>
              </td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Hobbies</td>
              <td>
                <Button onClick={() => openModal('Hobbies')}>
                  Hobbies
                </Button>
              </td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Rest day</td>
              <td>
                <Button onClick={() => openModal('Rest')}>
                  Rest
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <PlannerDescription
        show={showCardModal}
        title={modalTitle}
        description={workoutDescriptions[modalTitle]}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Planner;
