type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workout = await response.json();

  return (
    <main className="min-h-screen bg-black px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#171b21] lg:grid-cols-2">
          <div className="h-[300px] bg-[#222831] sm:h-[400px] lg:h-full">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-3 text-sm font-semibold text-gray-500">
              Equipment: {workout.equipment}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-black p-4">
                <p className="text-xs text-gray-500">DURATION</p>

                <p className="mt-1 text-lg font-black text-white">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black p-4">
                <p className="text-xs text-gray-500">CALORIES</p>

                <p className="mt-1 text-lg font-black text-white">
                  {workout.caloriesBurned}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black p-4">
                <p className="text-xs text-gray-500">RATING</p>

                <p className="mt-1 text-lg font-black text-white">
                  ★ {workout.rating}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-black uppercase text-white">
                About This Workout
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                {workout.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-white">
                ADD TO TODAY&apos;S PLAN
              </button>

              <button className="rounded-full border border-[#ccff00] px-6 py-3 text-sm font-black text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black">
                SAVE WORKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
