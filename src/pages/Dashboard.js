
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutContext";

export default function Dashboard() {
  const { myWorkouts } = useContext(WorkoutContext);

  const totalWorkouts = myWorkouts.length;

  const completedWorkouts = myWorkouts.filter(
    (workout) => workout.completed
  ).length;

  const pendingWorkouts = totalWorkouts - completedWorkouts;

  const totalMinutes = myWorkouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const completedMinutes = myWorkouts
    .filter((workout) => workout.completed)
    .reduce(
      (total, workout) => total + Number(workout.duration || 0),
      0
    );

  const progress =
    totalWorkouts === 0
      ? 0
      : Math.round((completedWorkouts / totalWorkouts) * 100);

  useEffect(() => {
    document.title = "Dashboard | FitForge";
  }, []);

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">FITFORGE OVERVIEW</p>
          <h1>Fitness Dashboard</h1>
          <p>
            Track your training, monitor your progress,
            and stay motivated.
          </p>
        </div>

        <Link to="/workouts" className="primary-btn">
          + Add Workout
        </Link>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <p>Total Workouts</p>
          <h2>{totalWorkouts}</h2>
          <span>Workouts in your plan</span>
        </div>

        <div className="dashboard-stat-card">
          <p>Completed</p>
          <h2>{completedWorkouts}</h2>
          <span>Successfully finished</span>
        </div>

        <div className="dashboard-stat-card">
          <p>Pending</p>
          <h2>{pendingWorkouts}</h2>
          <span>Workouts remaining</span>
        </div>

        <div className="dashboard-stat-card">
          <p>Training Time</p>
          <h2>{completedMinutes} <small>min</small></h2>
          <span>Of {totalMinutes} planned minutes</span>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="dashboard-panel">
          <h2>Workout Progress</h2>
          <p>Your overall completion rate</p>

          <div className="dashboard-progress-value">
            {progress}%
          </div>

          <div className="dashboard-progress-bar">
            <div
              className="dashboard-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>
            {completedWorkouts} of {totalWorkouts} workouts completed
          </p>

          <div className="dashboard-progress-details">
            <span>Completed: {completedWorkouts}</span>
            <span>Remaining: {pendingWorkouts}</span>
          </div>
        </section>

        <section className="dashboard-panel">
          <h2>Workout Status</h2>
          <p>Overview of your training plan</p>

          <div className="dashboard-status-list">
            <div className="dashboard-status-item">
              <span>Completed Workouts</span>
              <strong>{completedWorkouts}</strong>
            </div>

            <div className="dashboard-status-item">
              <span>Pending Workouts</span>
              <strong>{pendingWorkouts}</strong>
            </div>

            <div className="dashboard-status-item">
              <span>Total Training Minutes</span>
              <strong>{totalMinutes} min</strong>
            </div>

            <div className="dashboard-status-item">
              <span>Completed Minutes</span>
              <strong>{completedMinutes} min</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="dashboard-recent">
        <div className="dashboard-recent-header">
          <div>
            <h2>Your Workouts</h2>
            <p>Check the status of your training activities.</p>
          </div>

          <Link to="/my-plan" className="secondary-btn">
            View My Plan
          </Link>
        </div>

        {myWorkouts.length === 0 ? (
          <div className="dashboard-empty">
            <h3>No Workouts Yet</h3>
            <p>
              Start your fitness journey by adding workouts
              to your personal plan.
            </p>
            <Link to="/workouts" className="primary-btn">
              Explore Workouts
            </Link>
          </div>
        ) : (
          <div className="dashboard-workout-list">
            {myWorkouts.slice(0, 5).map((workout) => (
              <div
                className="dashboard-workout-item"
                key={workout.id}
              >
                <div>
                  <h3>{workout.name}</h3>
                  <p>
                    {workout.muscle} • {workout.duration} minutes
                  </p>
                </div>

                <span
                  className={
                    workout.completed
                      ? "dashboard-completed"
                      : "dashboard-pending"
                  }
                >
                  {workout.completed ? "Completed" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
