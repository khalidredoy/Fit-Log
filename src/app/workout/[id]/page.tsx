type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black uppercase text-white">
          Workout Details
        </h1>

        <p className="mt-4 text-gray-400">
          Workout ID: {id}
        </p>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;