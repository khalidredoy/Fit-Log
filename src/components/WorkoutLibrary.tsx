const WorkoutLibrary = () => {
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

        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#171b21]">
            <div className="h-52 bg-[#222831]">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Workout Image
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  CHEST
                </span>

                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  ARMS
                </span>
              </div>

              <h3 className="text-lg font-black uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Barbell
              </p>

              <div className="mt-4 flex gap-4 text-xs text-gray-500">
                <span>25 min</span>
                <span>180 kcal</span>
                <span>★ 4.8</span>
              </div>
            </div>
          </div>

          
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#171b21]">
            <div className="h-52 bg-[#222831]">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Workout Image
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  BACK
                </span>

                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  ARMS
                </span>
              </div>

              <h3 className="text-lg font-black uppercase text-white">
                Pull-Up
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Bodyweight
              </p>

              <div className="mt-4 flex gap-4 text-xs text-gray-500">
                <span>15 min</span>
                <span>120 kcal</span>
                <span>★ 4.7</span>
              </div>
            </div>
          </div>

          
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#171b21]">
            <div className="h-52 bg-[#222831]">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Workout Image
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  LEGS
                </span>

                <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black">
                  CORE
                </span>
              </div>

              <h3 className="text-lg font-black uppercase text-white">
                Back Squat
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Barbell
              </p>

              <div className="mt-4 flex gap-4 text-xs text-gray-500">
                <span>20 min</span>
                <span>140 kcal</span>
                <span>★ 4.9</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;