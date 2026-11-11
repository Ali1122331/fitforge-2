
import { createContext, useState, useEffect } from "react";

export const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [myWorkouts, setMyWorkouts] = useState(() => {
    const saved = localStorage.getItem("fitforgeWorkouts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "fitforgeWorkouts",
      JSON.stringify(myWorkouts)
    );
  }, [myWorkouts]);

  const addWorkout = (workout) => {
    const exists = myWorkouts.some(
      (item) => item.id === workout.id
    );

    if (!exists) {
      setMyWorkouts([...myWorkouts, { ...workout, completed: false }]);
    }
  };

  const removeWorkout = (id) => {
    setMyWorkouts(myWorkouts.filter((item) => item.id !== id));
  };

  const completeWorkout = (id) => {
    setMyWorkouts(
      myWorkouts.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <WorkoutContext.Provider
      value={{ myWorkouts, addWorkout, removeWorkout, completeWorkout }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}
