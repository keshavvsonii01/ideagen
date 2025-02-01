import { LightBulbIcon, MusicalNoteIcon, HashtagIcon, VideoCameraIcon } from "@heroicons/react/24/outline"

const features = [
  {
    name: "AI-Powered Ideas",
    description: "Get creative content ideas based on your input and preferences.",
    icon: LightBulbIcon,
  },
  {
    name: "Music Suggestions",
    description: "Discover trending music to enhance your videos.",
    icon: MusicalNoteIcon,
  },
  {
    name: "Hashtag Recommendations",
    description: "Find popular hashtags to increase your reach.",
    icon: HashtagIcon,
  },
  {
    name: "Editing Tips",
    description: "Learn about transitions and editing techniques for your videos.",
    icon: VideoCameraIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Features</h2>
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-start">
            <div className="flex-shrink-0">
              <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

