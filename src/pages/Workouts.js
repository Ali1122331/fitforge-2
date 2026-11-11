
import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";

export default function Workouts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const workouts = [
    { id: 1, name: "Bench Press", category: "Chest", duration: 30 },
    { id: 2, name: "Push Ups", category: "Chest", duration: 15 },
    { id: 3, name: "Pull Ups", category: "Back", duration: 20 },
    { id: 4, name: "Lat Pulldown", category: "Back", duration: 25 },
    { id: 5, name: "Squats", category: "Legs", duration: 30 },
    { id: 6, name: "Lunges", category: "Legs", duration: 20 },
    { id: 7, name: "Bicep Curls", category: "Arms", duration: 15 },
    { id: 8, name: "Tricep Dips", category: "Arms", duration: 15 }
  ];

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || workout.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="workouts-page">
      <h1>Explore Workouts</h1>
      <p>Find exercises and build your personal workout plan.</p>

      <div className="workout-filters">
        <input
          type="text"
          placeholder="Search exercises..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All Muscles</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Arms">Arms</option>
        </select>
      </div>

      <div className="workout-grid">
        {filteredWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <p>No exercises found.</p>
      )}
    </div>
  );
}
