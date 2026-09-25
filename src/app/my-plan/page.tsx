"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Workout } from "@/types/workout";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState("duration");
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  useEffect(() => {
    const loadData = () => {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");
      const completedWorkouts = localStorage.getItem("fitlog-completed");

      const planData: Workout[] = savedPlan ? JSON.parse(savedPlan) : [];

      const savedData: Workout[] = savedWorkouts
        ? JSON.parse(savedWorkouts)
        : [];

      const completedData: number[] = completedWorkouts
        ? JSON.parse(completedWorkouts)
        : [];

      setPlan(planData);
      setSaved(savedData);
      setCompletedIds(completedData);
    };

    loadData();

    window.addEventListener("fitlog-storage-update", loadData);

    return () => {
      window.removeEventListener("fitlog-storage-update", loadData);
    };
  }, []);

  const handleRemoveFromPlan = (id: number) => {
    const workout = plan.find((item) => item.id === id);

    const updatedPlan = plan.filter((item) => item.id !== id);

    setPlan(updatedPlan);

    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

    window.dispatchEvent(new Event("fitlog-storage-update"));

    toast.success(`${workout?.name ?? "Workout"} removed from today's plan.`);
  };

  const handleRemoveFromSaved = (id: number) => {
    const workout = saved.find((item) => item.id === id);

    const updatedSaved = saved.filter((item) => item.id !== id);

    setSaved(updatedSaved);

    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

    window.dispatchEvent(new Event("fitlog-storage-update"));

    toast.success(`${workout?.name ?? "Workout"} removed from saved.`);
  };

  const handleMarkAsDone = (id: number) => {
    if (completedIds.includes(id)) {
      toast.info("Workout is already marked as done.");

      return;
    }

    const workout = plan.find((item) => item.id === id);

    const updatedCompletedIds = [...completedIds, id];

    setCompletedIds(updatedCompletedIds);

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(updatedCompletedIds),
    );

    toast.success(`${workout?.name ?? "Workout"} marked as done.`);
  };

  const getSortedWorkouts = (workouts: Workout[]) => {
    return [...workouts].sort((a, b) => {
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
  };

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = getSortedWorkouts(currentWorkouts);

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0d0f12] px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-[#13161c] sm:grid-cols-3">
          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Exercises</p>

            <p className="mt-1 text-3xl font-black text-[#ccff00]">
              {totalExercises}
            </p>
          </div>

          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Minutes</p>

            <p className="mt-1 text-3xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500">Calories</p>

            <p className="mt-1 text-3xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex w-fit rounded-lg border border-white/10 bg-[#13161c] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-5 py-2 text-xs font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-5 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="plan-sort" className="text-xs text-gray-500">
              Sort By
            </label>

            <select
              id="plan-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-lg border border-white/10 bg-[#171b21] px-3 py-2 text-xs font-semibold text-white outline-none"
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {sortedWorkouts.length === 0 && (
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0f1216] px-6 text-center">
            <h2 className="text-lg font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get your day moving."
                : "Save workouts for later and they will appear here."}
            </p>

            <Link
              href="/#library"
              className="mt-5 rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black text-black transition hover:bg-white"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        )}

        {sortedWorkouts.length > 0 && (
          <div className="space-y-3">
            {sortedWorkouts.map((workout) => {
              const isCompleted = completedIds.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className="rounded-xl border border-white/10 bg-[#13161c] p-3 transition hover:border-white/20 sm:p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg bg-[#222831] sm:h-20 sm:w-32">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-black uppercase text-white sm:text-base">
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-gray-400">
                        <span>◷ {workout.duration} min</span>

                        <span>🔥 {workout.caloriesBurned} kcal</span>

                        <span>★ {workout.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() => handleMarkAsDone(workout.id)}
                          disabled={isCompleted}
                          className={`rounded-full px-4 py-2 text-[11px] font-black transition ${
                            isCompleted
                              ? "cursor-not-allowed bg-[#30352a] text-[#ccff00]"
                              : "bg-[#ccff00] text-black hover:bg-white"
                          }`}
                        >
                          {isCompleted ? "✓ Done" : "✓ Mark as Done"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          activeTab === "plan"
                            ? handleRemoveFromPlan(workout.id)
                            : handleRemoveFromSaved(workout.id)
                        }
                        aria-label={`Remove ${workout.name}`}
                        className="px-2 py-2 text-lg leading-none text-gray-500 transition hover:text-red-400"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
