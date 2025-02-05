# IdeaGen - AI-Powered Script Generator for Instagram & TikTok

## 🚀 Introduction
**IdeaGen** is an AI-driven web application designed to help content creators instantly generate engaging scripts for Instagram Reels and TikTok videos. Whether you're a solo creator or a team, IdeaGen provides a seamless way to craft video ideas, storylines, and scripts tailored to your needs.

## 🎯 Features
### 1. **AI-Powered Script Generation**
- Uses **Gemini API** to generate unique and engaging scripts on the go.
- Provides multiple variations based on trends, tone, and content type.

### 2. **Content Type Selection**
- Choose between **comedy, educational, dramatic, storytelling, vlogs, interviews,** and more.

### 3. **Customizable Storylines**
- Define the **number of people** involved (solo, duo, group collaboration).
- Select the **shooting location** (indoor, outdoor, office, studio, city streets, etc.).
- Customize the **mood and tone** of the video.

### 4. **Social Media Optimization**
- Suggests **trending hashtags** and **popular audio/music tracks**.
- Provides **editing tips** and **best video practices** to maximize engagement.

### 5. **User Authentication & Profile Management**
- Secure authentication with **Next.js Auth**.
- Users can **save favorite scripts**, track past generations, and receive personalized recommendations.
- **Login with Instagram and TikTok** to personalize content ideas based on past trends.

## 🛠️ Tech Stack
### **Frontend:**
- **Next.js** – Fast, optimized React framework.
- **Tailwind CSS** – For sleek UI and responsive design.

### **Backend:**
- **Node.js & Next.js API Routes** – Handles API calls and integrations.
- **MongoDB** – Stores user data and saved scripts.

### **AI Integration:**
- **Gemini API** – Powers script and storyline generation.

### **Authentication:**
- **NextAuth.js** – Supports email, Google, Instagram, and TikTok logins.

## 🚀 Getting Started
### **1. Clone the Repository**
```bash
 git clone https://github.com/yourusername/IdeaGen.git
 cd IdeaGen
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
Create a `.env.local` file and add:
```
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
MONGODB_URI=your-mongodb-connection-string
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
INSTAGRAM_CLIENT_ID=your-instagram-client-id
INSTAGRAM_CLIENT_SECRET=your-instagram-client-secret
```

### **4. Run the Development Server**
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

## 📌 Deployment
### Deploying to **Vercel**
```bash
vercel deploy
```
- Ensure environment variables are added in the **Vercel Dashboard**.

## 📖 Roadmap & Future Enhancements
- 🔹 **AI Video Editing Suggestions** – Provide step-by-step editing instructions.
- 🔹 **Collaboration Feature** – Allow multiple users to co-create scripts.
- 🔹 **Monetization** – Premium plans for advanced script suggestions.
- 🔹 **TikTok & Instagram API Integration** – Fetch trending data for personalized recommendations.

## 🤝 Contributing
Feel free to fork the repo and submit pull requests. We welcome contributions to improve **IdeaGen**!

## 📜 License
This project is **open-source** under the **MIT License**.

## 📞 Contact & Support
- 💡 **Website:** [yourwebsite.com](https://yourwebsite.com)
- 📧 **Email:** support@yourwebsite.com
- 🐦 **Twitter:** [@yourhandle](https://twitter.com/yourhandle)

---
🎬 **Turn your ideas into viral videos with IdeaGen! 🚀**

