

import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

import benchPress from "../assets/images/workouts/bench-press.png";
import pushUps from "../assets/images/workouts/push-ups.png";
import pullUps from "../assets/images/workouts/pull-ups.png";
import latPulldown from "../assets/images/workouts/lat-pulldown.png";
import squats from "../assets/images/workouts/squats.png";
import lunges from "../assets/images/workouts/lunges.png";
import bicepsCurl from "../assets/images/workouts/biceps-curl.png";
import tricepDips from "../assets/images/workouts/tricep-dips.png";

const workoutImages = {
  "Bench Press": benchPress,
  "Push Ups": pushUps,
  "Pull Ups": pullUps,
  "Lat Pulldown": latPulldown,
  "Squats": squats,
  "Lunges": lunges,
  "Bicep Curls": bicepsCurl,
  "Tricep Dips": tricepDips,
};

export default function WorkoutCard({ workout }) {
  const { myWorkouts, addWorkout } = useContext(WorkoutContext);

  const added = myWorkouts.some(
    (item) => item.id === workout.id
  );

  return (
    <div className="workout-card">
      <div className="workout-image">
        <img
          src={workoutImages[workout.name]}
          alt={workout.name}
        />
      </div>

      <h3>{workout.name}</h3>
      <p>{workout.category}</p>
      <p>{workout.duration} minutes</p>

      <button
        onClick={() => addWorkout(workout)}
        disabled={added}
      >
        {added ? "Added ✓" : "+ Add to My Plan"}
      </button>
    </div>
  );
}
