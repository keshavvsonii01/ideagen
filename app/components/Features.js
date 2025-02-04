import {
  LightBulbIcon,
  MusicalNoteIcon,
  HashtagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
 
const features = [
  {
    Icon: FileTextIcon,
    name: "AI-Powered Content Ideas",
    description: "Instantly generate trending TikTok/Reels video ideas based on user input.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Customizable Storylines",
    description: " Personalize video scripts by selecting the number of actors, location, and tone.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Fast and Simple",
    description: "Making your earned time matter more.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Music & Hashtag Suggestions",
    description: "Get AI-recommended trending music and hashtags for better reach.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Collaboration & Editing Tips",
    description:
      "Receive duet ideas, transition effects, and video structuring guidance.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


// const features = [
//   {
//     name: "AI-Powered Ideas",
//     description:
//       "Get creative content ideas based on your input and preferences.",
//     icon: LightBulbIcon,
//   },
//   {
//     name: "Music Suggestions",
//     description: "Discover trending music to enhance your videos.",
//     icon: MusicalNoteIcon,
//   },
//   {
//     name: "Hashtag Recommendations",
//     description: "Find popular hashtags to increase your reach.",
//     icon: HashtagIcon,
//   },
//   {
//     name: "Editing Tips",
//     description:
//       "Learn about transitions and editing techniques for your videos.",
//     icon: VideoCameraIcon,
//   },
// ];

export default function Features() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <div className="bg-white shadow-lg rounded-lg p-6 w-2/3">
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
      </div> */}

<BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </div>
  );
}
