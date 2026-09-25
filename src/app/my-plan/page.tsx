import type { Workout } from "@/types/workout";

const MyPlanPage = () => {
  const workout: Workout = {
    id: 1,
    name: "Barbell Bench Press",
    image:
      "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    muscleGroups: ["Chest", "Arms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 25,
    caloriesBurned: 180,
    sets: 4,
    reps: "8-10",
    rating: 4.8,
    description:
      "A compound upper-body exercise that primarily targets the chest, shoulders, and triceps.",
    instructions: [
      "Lie flat on the bench.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar toward your chest.",
      "Press the bar back up to the starting position.",
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            TODAY&apos;S TRAINING
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Your selected workouts for today. Keep the plan focused and complete
            the work.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#171b21] p-5">
            <p className="text-xs font-bold text-gray-500">WORKOUTS</p>

            <p className="mt-2 text-3xl font-black text-white">1</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#171b21] p-5">
            <p className="text-xs font-bold text-gray-500">TOTAL TIME</p>

            <p className="mt-2 text-3xl font-black text-white">
              {workout.duration} min
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#171b21] p-5">
            <p className="text-xs font-bold text-gray-500">CALORIES</p>

            <p className="mt-2 text-3xl font-black text-white">
              {workout.caloriesBurned} kcal
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-black uppercase text-white">
            TODAY&apos;S WORKOUTS
          </h2>

          <p className="mt-1 text-sm text-gray-500">1 workout in your plan</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#171b21]">
          <div className="h-64 bg-[#222831] sm:h-80">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">
              {workout.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Equipment: {workout.equipment}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Difficulty: {workout.difficulty}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
              <span>
                <strong className="text-white">{workout.duration}</strong> min
              </span>

              <span>
                <strong className="text-white">{workout.caloriesBurned}</strong>{" "}
                kcal
              </span>

              <span>
                <strong className="text-white">{workout.sets}</strong> sets
              </span>

              <span>
                <strong className="text-white">{workout.reps}</strong> reps
              </span>

              <span>
                <strong className="text-white">★ {workout.rating}</strong>
              </span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-black uppercase text-white">
                Description
              </h4>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
                {workout.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-white"
              >
                MARK AS DONE
              </button>

              <button
                type="button"
                className="rounded-full border border-red-500/50 px-6 py-3 text-sm font-black text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
