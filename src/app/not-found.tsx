import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-4">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#ccff00]">
          404 ERROR
        </p>

        <h1 className="text-6xl font-black text-white sm:text-8xl">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          PAGE NOT FOUND
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/60">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-white"
        >
          GO TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
