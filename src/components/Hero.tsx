import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-black">
      <div className="mx-auto grid min-h-[600px] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">

       
        <div className="min-w-0">
          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-full break-words text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:max-w-3xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-white"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

       
        <div className="flex min-w-0 w-full justify-center lg:justify-end">
          <Image
            src={banner}
            alt="FitLog workout banner"
            priority
            className="h-auto w-full max-w-[550px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;