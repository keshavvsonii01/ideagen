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

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [usedAdvanced, setUsedAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ Build payload based on intent
    const payload = {
      phrase,
      ...(usedAdvanced && {
        contentType,
        people,
        location,
        tone,
      }),
    };

    try {
      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to generate idea");

      const data = await response.json();
      router.push(`/result/${encodeURIComponent(JSON.stringify(data))}`);
    } catch (error) {
      console.error(error);
      alert("Failed to generate idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Generator" className="flex items-center justify-center min-h-screen">
      <div className="w-4/5 md:w-2/3">
        <MagicCard
          className="flex-col items-center justify-center shadow-2xl p-6 md:p-12 lg:p-20"
          gradientColor="#262626"
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-200">
              Describe your idea. We’ll handle the rest.
            </h2>
            <p className="text-lg font-light text-zinc-400 mt-2">
              You can be as vague or specific as you want.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main input */}
            <div>
              <label className="block text-base text-zinc-300 mb-2">
                What do you want ideas for?
              </label>
              <input
                type="text"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                required
                placeholder="e.g. YouTube video ideas for fitness beginners"
                className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-neutral-600 outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>

            {/* Advanced options toggle */}
            <button
              type="button"
              onClick={() => {
                setShowAdvanced(!showAdvanced);
                setUsedAdvanced(true);
              }}
              className="text-sm text-zinc-400 hover:text-white transition flex items-center gap-2"
            >
              Customize output
              <span
                className={`transition-transform ${
                  showAdvanced ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* Advanced options */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                showAdvanced
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Select
                  label="Content Type"
                  value={contentType}
                  onChange={setContentType}
                  options={[
                    ["skit", "Skit"],
                    ["tutorial", "Tutorial"],
                    ["trend", "Trend"],
                    ["montage", "Montage"],
                  ]}
                />

                <Select
                  label="People"
                  value={people}
                  onChange={setPeople}
                  options={[
                    ["solo", "Solo"],
                    ["duo", "Duo"],
                    ["group", "Group"],
                  ]}
                />

                <Select
                  label="Location"
                  value={location}
                  onChange={setLocation}
                  options={[
                    ["indoor", "Indoor"],
                    ["outdoor", "Outdoor"],
                    ["city", "City"],
                    ["home", "Home"],
                  ]}
                />

                <Select
                  label="Video Tone"
                  value={tone}
                  onChange={setTone}
                  options={[
                    ["comedy", "Comedy"],
                    ["educational", "Educational"],
                    ["dramatic", "Dramatic"],
                    ["inspirational", "Inspirational"],
                  ]}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-zinc-200 text-black py-3 rounded-lg font-medium
              hover:bg-black hover:text-white hover:scale-[1.02]
              transition-all"
            >
              {isLoading ? "Generating..." : "Bring Your Idea to Life!"}
            </button>
          </form>
        </MagicCard>
      </div>
    </div>
  );
}

/* Reusable Select */
function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm text-zinc-300 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
      >
        {options.map(([val, label]) => (
          <option key={val} value={val}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}