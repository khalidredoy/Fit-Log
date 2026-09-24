import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={22}
            height={22}
            className="object-contain"
          />

          <span className="text-xl font-black tracking-tight text-white">
            FITLOG
          </span>
        </div>

       
        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;