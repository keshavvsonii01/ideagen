"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"

export default function Result() {
  const params = useParams()
  const ideaParam = params.idea
  const idea = ideaParam ? JSON.parse(decodeURIComponent(ideaParam)) : null
  const [isCopied, setIsCopied] = useState(false)

  if (!idea) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">No idea generated</h1>
          <p className="text-gray-600 mb-4">Please try again to generate a new idea.</p>
          <Link
            href="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    )
  }

  const { generatedIdea } = idea

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedIdea).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Your Generated TikTok/Reels Idea</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 relative">
          <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">{generatedIdea}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute bottom-4 right-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-150 ease-in-out flex items-center"
          >
            <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Generate Another Idea
          </Link>
        </div>
      </div>
    </div>
  )
}

