'use client'

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

import Link from "next/link";
export default function First() {
  return (
    <div>
      {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p> */}

      {/* <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1000}
          width={2560}
        />
      </div> */}
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <div className="mb-20 mt-24 md:mb-24 md:mt-28 lg:mb-32 lg:mt-28">
          <h1 className="z-20 text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 text-center">
            GENERATE CLEAR IDEAS IN SECONDS
          </h1>
          <p className="z-10 text-2xl text-zinc-300 text-center mt-8">
            IdeaGen helps founders and creators quickly generate ideas they can
            actually use.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,#f3f4f6,transparent)]",
            )}
          />
          <div className="flex items-center justify-center mb-10  hover:-z-10 md:mt-4  ">
            <button
              className=" text-black text-lg font-semibold px-6 py-2 rounded-2xl bg-zinc-50 mt-8 flex items-center justify-between hover:scale-105 transition-transform duration-200 hover:shadow-lg"
              onClick={() => {
                const el = document.getElementById("Generator");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                  el?.querySelector("input")?.focus();
                }, 500);
              }}
            >
              Generate Ideas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 26"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
