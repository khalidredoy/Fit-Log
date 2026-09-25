import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0d0f12] px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0f1217] lg:grid-cols-2">
          <div className="p-4 sm:p-6">
            <div className="h-[420px] overflow-hidden rounded-xl bg-[#222831] sm:h-[550px] lg:h-full lg:min-h-[650px]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#171b21]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-xs text-gray-300">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs text-gray-300">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-xs text-gray-300">{workout.sets}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-xs text-gray-300">{workout.reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="text-xs text-gray-300">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="text-xs text-gray-300">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="text-xs text-gray-300">{workout.rating}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-xs text-gray-500">
                        {index + 1}.
                      </span>

                      <p className="text-xs leading-5 text-gray-400">
                        {instruction}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="mt-8">
              <WorkoutActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
