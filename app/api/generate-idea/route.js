import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  const {
    phrase,
    contentType,
    people,
    location,
    tone,
  } = await request.json();

  const prompt = `
You are an API that returns ONLY valid JSON. No markdown. No explanations.

Generate a TikTok/Reels video idea using the input below.

Topic: ${phrase}
${contentType ? `Content type: ${contentType}` : ""}
${people ? `People: ${people}` : ""}
${location ? `Location: ${location}` : ""}
${tone ? `Tone: ${tone}` : ""}

Return JSON strictly in this format:

{
  "title": "Catchy video title",
  "description": "2-3 sentence description",
  "steps": [
    "Step 1",
    "Step 2",
    "Step 3"
  ],
  "hashtags": [
    "hashtag1",
    "hashtag2"
  ],
  "music": {
    "name": "Song name or sound",
    "reason": "Why this music fits"
  }
}
`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 🔒 Parse + normalize (critical)
    const parsed = JSON.parse(text);

    const structuredResponse = {
      meta: {
        phrase,
        contentType: contentType ?? null,
        people: people ?? null,
        location: location ?? null,
        tone: tone ?? null,
      },
      title: parsed.title,
      description: parsed.description,
      steps: parsed.steps ?? [],
      hashtags: parsed.hashtags ?? [],
      music: {
        name: parsed.music?.name ?? "",
        reason: parsed.music?.reason ?? "",
      },
    };

    return new Response(JSON.stringify(structuredResponse), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error generating structured idea:", error);

    return new Response(
      JSON.stringify({ error: "Failed to generate idea" }),
      { status: 500 }
    );
  }
}