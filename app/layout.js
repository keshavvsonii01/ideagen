import "./globals.css"
import { Montserrat } from "next/font/google" 
import Link from "next/link"


const montserrat = Montserrat({
  subsets: ['latin'],  
  weight: ['400', '700'],
});

export const metadata = {
  title: "AI-Powered TikTok/Reels Idea Generator",
  description: "Generate creative ideas for your TikTok and Reels content",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black`}>
        <div className=" flex flex-col">
          <nav className=" bg-transparent  fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    <span className="text-2xl md:text-3xl lg:tex-4xl font-extrabold text-zinc-100">IdeaGen</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm md:text-lg lg:text-xl font-medium">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex">{children}</main>
          <footer className="bg-neutral-800 bg-gradient-to-tl from-neutral-800 to-stone-800 border-t border-gray-900 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} AI-Powered TikTok/Reels Idea Generator. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

