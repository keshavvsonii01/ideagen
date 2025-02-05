"use client";

import { MagicCard } from "@/components/magicui/magic-card";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IdeaGenerator() {
  const [phrase, setPhrase] = useState("");
  const [contentType, setContentType] = useState("skit");
  const [people, setPeople] = useState("solo");
  const [location, setLocation] = useState("indoor");
  const [tone, setTone] = useState("comedy");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phrase, contentType, people, location, tone }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate idea");
      }

      const data = await response.json();
      router.push(`/result/${encodeURIComponent(JSON.stringify(data))}`);
    } catch (error) {
      console.error("Error generating idea:", error);
      alert("Failed to generate idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Generator" className="flex items-center justify-center min-h-screen">
      <div className="w-4/5 md:w-2/3">
        <div className="bg-black shadow-xl rounded-lg mb-8">
          <div>
            <MagicCard
              className="cursor-pointer flex-col items-center justify-center  shadow-2xl p-5 md:p-12 lg:p-20"
              gradientColor={"#262626"}
            >
              <div className="flex items-center justify-center">
                <h2 className="text-2xl  lg:text-3xl text-center  mb-6 text-zinc-300">
                  Get your script in just a few clicks-
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="phrase"
                    className="block text-base font-medium text-zinc-300 mb-1"
                  >
                    Enter a phrase or topic:
                  </label>
                  <input
                    type="text"
                    id="phrase"
                    className="w-full md:px-3 md:py-2  border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contentType"
                      className="block text-base font-medium text-zinc-300 mb-1"
                    >
                      Content Type:
                    </label>
                    <select
                      id="contentType"
                      className="w-full md:px-3 md:py-2 p-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700"
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value)}
                    >
                      <option value="skit">Skit</option>
                      <option value="tutorial">Tutorial</option>
                      <option value="trend">Trend</option>
                      <option value="montage">Montage</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="people"
                      className="block text-base font-medium text-zinc-300 mb-1"
                    >
                      People:
                    </label>
                    <select
                      id="people"
                      className="w-full md:px-3 md:py-2 p-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700"
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                    >
                      <option value="solo">Solo</option>
                      <option value="duo">Duo</option>
                      <option value="group">Group</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-base font-medium text-zinc-300 mb-1"
                    >
                      Location:
                    </label>
                    <select
                      id="location"
                      className="w-full md:px-3 md:py-2 p-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="indoor">Indoor</option>
                      <option value="outdoor">Outdoor</option>
                      <option value="city">City</option>
                      <option value="home">Home</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="tone"
                      className="block text-base font-medium text-zinc-300 mb-1"
                    >
                      Video Tone:
                    </label>
                    <select
                      id="tone"
                      className="w-full md:px-3 md:py-2 p-1 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700"
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                    >
                      <option value="comedy">Comedy</option>
                      <option value="educational">Educational</option>
                      <option value="dramatic">Dramatic</option>
                      <option value="inspirational">Inspirational</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-400 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    "Bring Your Idea to Life!"
                  )}
                </button>
              </form>
            </MagicCard>
          </div>
        </div>
      </div>
    </div>
  );
}
