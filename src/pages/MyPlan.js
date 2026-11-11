
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutContext";

export default function MyPlan() {
  const { myWorkouts, removeWorkout, completeWorkout } =
    useContext(WorkoutContext);

  const totalWorkouts = myWorkouts.length;

  const completedWorkouts = myWorkouts.filter(
    (workout) => workout.completed
  ).length;

  const progress =
    totalWorkouts === 0
      ? 0
      : Math.round((completedWorkouts / totalWorkouts) * 100);

  return (
    <div className="myplan-page">

      <div className="myplan-header">
        <h1>My Workout Plan</h1>
        <p>Manage your exercises and track your progress.</p>
      </div>

      <div className="plan-summary">
        <div className="summary-card">
          <h3>Total Workouts</h3>
          <h2>{totalWorkouts}</h2>
        </div>

        <div className="summary-card">
          <h3>Completed</h3>
          <h2>{completedWorkouts}</h2>
        </div>

        <div className="summary-card">
          <h3>Progress</h3>
          <h2>{progress}%</h2>
        </div>
      </div>

      <div className="progress-section">
        <h3>Workout Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {completedWorkouts} of {totalWorkouts} workouts completed
        </p>
      </div>

      {myWorkouts.length === 0 ? (
        <div className="empty-plan">
          <h2>Your workout plan is empty</h2>
          <p>Explore workouts and add exercises to your plan.</p>

          <Link to="/workouts" className="primary-btn">
            Explore Workouts
          </Link>
        </div>
      ) : (
        <div className="plan-grid">
          {myWorkouts.map((workout) => (
            <div className="plan-card" key={workout.id}>
              <div className="plan-icon">🏋️</div>

              <h3>{workout.name}</h3>
              <p>Muscle Group: {workout.category}</p>
              <p>Duration: {workout.duration} minutes</p>

              <span
                className={
                  workout.completed
                    ? "status completed"
                    : "status pending"
                }
              >
                {workout.completed ? "Completed ✓" : "Not Completed"}
              </span>

              <div className="plan-actions">
                <button
                  className="complete-btn"
                  onClick={() => completeWorkout(workout.id)}
                >
                  {workout.completed
                    ? "Mark Incomplete"
                    : "Mark Complete"}
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeWorkout(workout.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
