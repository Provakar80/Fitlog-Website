"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const { plan = [], saved = [] } = usePlan();
  const onPlan = path.startsWith("/my-plan");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Logo & Brand */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="relative h-6 w-6">
            <Image 
              src="/assets/logo.png" 
              alt="FitLog logo" 
              fill 
              sizes="24px"
              className="object-contain" 
            />
          </div>
          <span className="text-base font-black tracking-wider text-white sm:text-lg">
            FITLOG
          </span>
        </Link>

        {/* Desktop / Tablet Center Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/50 p-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
              !onPlan
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
              onPlan
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Section: Counters & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Counters */}
          <Link
            href="/my-plan"
            onClick={closeMenu}
            className="flex items-center gap-2.5 text-xs font-bold uppercase text-zinc-400 transition-colors hover:text-white sm:gap-3.5"
          >
            {/* Plan Badge */}
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline">Plan</span>
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[11px] font-black text-black">
                {plan.length}
              </span>
            </div>

            {/* Saved Badge */}
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline">Saved</span>
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-1 text-[11px] font-semibold text-white">
                {saved.length}
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="border-t border-zinc-800/80 bg-[#09090b] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                !onPlan
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                onPlan
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}