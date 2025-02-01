import IdeaGenerator from "./components/IdeaGenerator"
import Features from "./components/Features"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">AI-Powered TikTok/Reels Idea Generator</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <IdeaGenerator />
        <Features />
      </div>
    </div>
  )
}

