"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

      
        <div className="flex min-h-20 w-full items-center">

         
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              width={35}
              height={35}
              className="h-[35px] w-[35px] object-contain"
            />

            <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
              FITLOG
            </span>
          </Link>

          
          <div className="mx-auto hidden items-center gap-6 md:flex lg:gap-10">

           
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                pathname === "/"
                  ? "bg-[#ccff00] text-black"
                  : "text-white hover:bg-[#ccff00] hover:text-black"
              }`}
            >
              Workouts
            </Link>

            
            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                pathname === "/my-plan"
                  ? "bg-[#ccff00] text-black"
                  : "text-white hover:bg-[#ccff00] hover:text-black"
              }`}
            >
              My Plan
            </Link>

          </div>

          
          <div className="ml-6 hidden items-center gap-2 md:flex">

            
            <Link
              href="/my-plan"
              className="rounded-full bg-[#ccff00] px-3 py-2 text-sm font-bold text-black"
            >
              Plan 0
            </Link>

            
            <Link
              href="/my-plan"
              className="rounded-full border border-[#ccff00] px-3 py-2 text-sm font-bold text-[#ccff00]"
            >
              Saved 0
            </Link>

          </div>

         
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-2xl leading-none">
              ☰
            </span>
          </button>

        </div>

       
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">

            <div className="flex flex-col gap-3">

              
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                  pathname === "/"
                    ? "bg-[#ccff00] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Workouts
              </Link>

             
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                  pathname === "/my-plan"
                    ? "bg-[#ccff00] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                My Plan
              </Link>

              
              <div className="flex flex-wrap gap-2 pt-2">

                
                <Link
                  href="/my-plan"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
                >
                  Plan 0
                </Link>

               
                <Link
                  href="/my-plan"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00]"
                >
                  Saved 0
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;