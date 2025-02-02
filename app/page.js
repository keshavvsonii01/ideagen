import IdeaGenerator from "./components/IdeaGenerator";
import Features from "./components/Features";
import First from "./components/First";
export default function Home() {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="w-full p-2 m-4">
        <First />
        <IdeaGenerator />
        <Features />
      </div>
    </div>
  );
}
