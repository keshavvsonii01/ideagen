import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyAzKBNNc_R4LT1m9a-lgobBUzqPQ2t_GaY')

export async function POST(request) {
  const { phrase, contentType, people, location, tone } = await request.json()

  const prompt = `Generate a TikTok/Reels video idea based on the following parameters:
    - Topic or phrase: ${phrase}
    - Content type: ${contentType}
    - Number of people: ${people}
    - Location: ${location}
    - Tone: ${tone}

    Please provide:
    1. A catchy title for the video
    2. A brief description of the video concept (2-3 sentences)
    3. A step-by-step outline of the video (3-5 steps)
    4. Suggested hashtags (5-7 hashtags)
    5. A music recommendation that fits the video concept`

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return new Response(JSON.stringify({ generatedIdea: text }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error("Error generating idea:", error)
    return new Response(JSON.stringify({ error: "Failed to generate idea" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}

