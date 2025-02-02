import {
  LightBulbIcon,
  MusicalNoteIcon,
  HashtagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI-Powered Ideas",
    description:
      "Get creative content ideas based on your input and preferences.",
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
    description:
      "Learn about transitions and editing techniques for your videos.",
    icon: VideoCameraIcon,
  },
];

export default function Features() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-2/3">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
          Features
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
