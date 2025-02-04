import IdeaGenerator from "./IdeaGenerator";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
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
        
        <div className="mb-20 mt-24 md:mb-24 md:mt-28 lg:mb-28 lg:mt-32">
          <h1 className="z-20 text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-100 text-center">
            AUTOMATE YOUR CREATIVE WORKFLOW
          </h1>
          <p className="z-10 text-2xl text-zinc-300 text-center mt-8">
            Create and brainstorm your ideas with ease.
          </p>
          <DotPattern
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,#f3f4f6,transparent)]"
          )}
        />
          <div className="flex items-center justify-center mb-10  hover:-z-10 md:mt-4  ">
            <button className="border-gray-100 border text-zinc-400 hover:bg-zinc-100 hover:text-black text-lg font-semibold px-6 py-2 rounded-2xl mt-8">
              <Link href="/">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
