const express = require("express");
const path = require("path");
const knowledgeBase = require("./knowledgeBase.js");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const OLLAMA_URL = "http://localhost:11434/api/chat";
const MODEL_NAME = "gemma4:e2b";

app.post("/api/advise", async (req, res) => {
  const { farmerMessage } = req.body;

  if (!farmerMessage || typeof farmerMessage !== "string") {
    return res.status(400).json({ error: "farmerMessage is required" });
  }

  const prompt = `You are an agricultural advisor helping smallholder farmers in Nigeria prevent post-harvest loss.

Reference knowledge base (use this to inform your answer, don't invent facts outside it if the crop is covered):
${JSON.stringify(knowledgeBase, null, 2)}

Farmer's situation: "${farmerMessage}"

Give clear, practical, specific advice in plain language, in 3-5 short sentences maximum — no headers or bullet lists, just direct advice a farmer could read in a few seconds. If the crop isn't in the knowledge base, say so honestly rather than guessing.`;

  try {
    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [{ role: "user", content: prompt }],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Ollama responded ${response.status}: ${errText}`);
    }

    const data = await response.json();
    res.json({ advice: data.message.content });
  } catch (err) {
    console.error("Error calling Gemma via Ollama:", err.message);
    res.status(500).json({
      error: "Couldn't reach Gemma via Ollama. Is Ollama running?",
      details: err.message,
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Harvest Guard running at http://localhost:${PORT}`);
});