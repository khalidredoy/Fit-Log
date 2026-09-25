"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const [isInPlan, setIsInPlan] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const updateButtonState = () => {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      const plan: Workout[] = savedPlan ? JSON.parse(savedPlan) : [];

      const saved: Workout[] = savedWorkouts ? JSON.parse(savedWorkouts) : [];

      setIsInPlan(plan.some((item) => item.id === workout.id));

      setIsSaved(saved.some((item) => item.id === workout.id));
    };

    updateButtonState();

    window.addEventListener("fitlog-storage-update", updateButtonState);

    return () => {
      window.removeEventListener("fitlog-storage-update", updateButtonState);
    };
  }, [workout.id]);

  const handleAddToPlan = () => {
    const savedPlan = localStorage.getItem("fitlog-plan");

    const plan: Workout[] = savedPlan ? JSON.parse(savedPlan) : [];

    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      setIsInPlan(true);

      toast.warning("This workout is already in your plan.");

      return;
    }

    if (plan.length >= 5) {
      toast.warning("You can add maximum 5 workouts to today's plan.");

      return;
    }

    const updatedPlan = [...plan, workout];

    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

    setIsInPlan(true);

    window.dispatchEvent(new Event("fitlog-storage-update"));

    toast.success("Added to today's plan.");
  };

  const handleSaveWorkout = () => {
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    const saved: Workout[] = savedWorkouts ? JSON.parse(savedWorkouts) : [];

    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      setIsSaved(true);

      toast.warning("This workout is already saved.");

      return;
    }

    const updatedSaved = [...saved, workout];

    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

    setIsSaved(true);

    window.dispatchEvent(new Event("fitlog-storage-update"));

    toast.success("Workout saved for later.");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        className={`rounded-full px-6 py-3 text-xs font-black transition ${
          isInPlan
            ? "bg-[#30352a] text-[#ccff00] hover:bg-[#3a4032]"
            : "bg-[#ccff00] text-black hover:bg-white"
        }`}
      >
        {isInPlan ? "✓ IN TODAY'S PLAN" : "ADD TO TODAY'S PLAN"}
      </button>

      <button
        type="button"
        onClick={handleSaveWorkout}
        className={`rounded-full border px-6 py-3 text-xs font-black transition ${
          isSaved
            ? "border-[#ccff00] text-[#ccff00] hover:bg-[#30352a]"
            : "border-white/20 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
        }`}
      >
        {isSaved ? "✓ ALREADY SAVED" : "SAVE FOR LATER"}
      </button>
    </div>
  );
};

export default WorkoutActions;
