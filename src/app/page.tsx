import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

const Page = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WorkoutLibrary />
      </main>
    </>
  );
};

export default Page;