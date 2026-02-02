"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Result() {
  const params = useParams();
  const ideaParam = params.idea;
  const idea = ideaParam ? JSON.parse(decodeURIComponent(ideaParam)) : null;

  const [isCopied, setIsCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [currentIdea, setCurrentIdea] = useState(idea);

  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            No idea generated
          </h1>
          <p className="text-zinc-400 mb-4">
            Please try again to generate a new idea.
          </p>
          <Link
            href="/"
            className="bg-zinc-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, steps, hashtags, music, meta } = currentIdea;
  const copyToClipboard = () => {
    const formatted = `
${title}

${description}

Steps:
${steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Hashtags:
${hashtags.map((h) => `#${h}`).join(" ")}

Music:
${music.name} — ${music.reason}
    `.trim();

    navigator.clipboard.writeText(formatted).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const regenerateIdea = async () => {
    try {
      setIsRegenerating(true);

      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phrase: meta.phrase,
          contentType: meta.contentType,
          people: meta.people,
          location: meta.location,
          tone: meta.tone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to regenerate idea");
      }

      const newIdea = await response.json();
      setCurrentIdea(newIdea);
    } catch (err) {
      console.error(err);
      alert("Could not regenerate idea. Try again.");
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-4">
      <div className="w-full space-y-10 p-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-zinc-200">
          Your Generated Idea
        </h1>

        {/* Meta chips */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-400">
          <Chip label={meta.phrase} />
          {meta.tone && <Chip label={`Tone: ${meta.tone}`} />}
          {meta.people && <Chip label={`People: ${meta.people}`} />}
          {meta.location && <Chip label={`Location: ${meta.location}`} />}
        </div>

        {/* Main card */}
        <MagicCard
          className="shadow-2xl mx-auto p-6 md:p-14"
          gradientColor="#262626"
        >
          {/* Title + Description */}
          <section className="mb-2">
            <h2 className="text-2xl font-semibold text-zinc-200 mb-2">
              {title}
            </h2>
            <p className="text-zinc-300 leading-relaxed">{description}</p>
          </section>

          {/* Steps */}
          <section className="mb-2">
            <h3 className="text-lg font-semibold text-zinc-200 mb-3">
              Step-by-step outline
            </h3>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start text-zinc-300">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Hashtags */}
          <section className="mb-2">
            <h3 className="text-lg font-semibold text-zinc-200 mb-3">
              Suggested hashtags
            </h3>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          {/* Music */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">
              Music recommendation
            </h3>
            <p className="text-zinc-300">
              <span className="font-medium">{music.name}</span> —{" "}
              <span className="text-zinc-400">{music.reason}</span>
            </p>
          </section>

          {/* Copy */}
          <div className="flex justify-end">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-zinc-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition"
            >
              <ClipboardDocumentIcon className="h-5 w-5" />
              {isCopied ? "Copied!" : "Copy idea"}
            </button>
          </div>
        </MagicCard>

        {/* Actions */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-zinc-800 text-zinc-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-700 transition"
          >
            Generate another idea
          </Link>
        </div>
        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={regenerateIdea}
            disabled={isRegenerating}
            className="bg-zinc-200 text-black px-6 py-3 rounded-md text-sm font-medium
               hover:bg-white transition disabled:opacity-60"
          >
            {isRegenerating ? "Regenerating..." : "Regenerate idea"}
          </button>

          <Link
            href="/"
            className="bg-zinc-800 text-zinc-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-700 transition"
          >
            Start fresh
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Small reusable chip */
function Chip({ label }) {
  return (
    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700">
      {label}
    </span>
  );
}
