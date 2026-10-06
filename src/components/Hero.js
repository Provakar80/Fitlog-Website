import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:py-10 md:py-12">
      <div className="flex flex-col-reverse items-center justify-between gap-8 rounded-2xl border border-zinc-800/80 bg-[#18181b] p-6 sm:p-8 md:flex-row md:gap-12 md:p-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-4 text-center sm:space-y-5 md:text-left">
          <span className="inline-block text-[11px] font-bold tracking-widest text-[#ccff00] sm:text-xs">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Train with intent. <br className="hidden sm:inline" /> Log every set.
          </h1>

          <p className="mx-auto max-w-md text-xs leading-relaxed text-zinc-400 sm:text-sm md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <Link
              href="#library"
              className="inline-block w-full rounded-lg bg-[#ccff00] px-6 py-3 text-center text-xs font-black uppercase text-black transition-transform duration-200 hover:scale-[1.02] active:scale-95 sm:w-auto sm:text-sm"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full flex-1 items-center justify-center md:justify-end">
          <div className="relative aspect-4/3 w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
            <Image
              src="/assets/banner.png"
              alt="Gym Banner"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
              className="rounded-xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}