import "./globals.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "AI TikTok/Reels Idea Generator - Get Viral Ideas",
  description: "Generate trending TikTok and Reels video ideas with AI-powered scripts and storyline suggestions.",
  keywords: ["TikTok ideas", "Reels ideas", "AI video content", "trending content", "viral video ideas", "script generator", "reels script generator", "tiktok script generator"],
  openGraph: {
    title: "AI TikTok/Reels Idea Generator",
    description: "AI-driven platform for brainstorming creative TikTok and Instagram Reels video concepts.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI TikTok Reels Generator",
      },
    ],
    type: "website",
    url: "https://www.ideagenie.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI TikTok/Reels Idea Generator",
    description: "AI-driven tool to brainstorm viral TikTok & Reels ideas.",
    images: ["https://example.com/twitter-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black`}>
        <div className=" flex flex-col">
          <nav className=" bg-transparent fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    <span className="text-2xl md:text-3xl lg:tex-4xl font-extrabold text-zinc-100">
                      IdeaGen
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-gray-700 px-3 py-2 rounded-md text-sm md:text-lg lg:text-xl font-medium"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex">
            <SmoothScrolling>{children}</SmoothScrolling>
            </main>
          <footer className="bg-black border-gray-900 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} AI-Powered TikTok/Reels Idea
                Generator. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
