"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Workout } from "@/types/workout";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="overflow-hidden border-b border-white/10 bg-black px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="mt-6">
          <label
            htmlFor="sort"
            className="mr-3 text-sm font-semibold text-gray-400"
          >
            Sort By:
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-lg border border-white/10 bg-[#171b21] px-4 py-2 text-sm font-semibold text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {loading && (
          <div className="flex min-h-40 items-center justify-center">
            <p className="text-sm font-semibold text-gray-400">
              Loading workouts...
            </p>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workout/${workout.id}`}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#171b21] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]"
              >
                <div className="h-52 bg-[#222831]">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase text-black"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-black uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>{workout.duration} min</span>

                    <span>{workout.caloriesBurned} kcal</span>

                    <span>★ {workout.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
