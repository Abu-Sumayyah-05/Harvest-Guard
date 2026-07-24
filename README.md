# Harvest Guard

**Offline AI-Powered Post-Harvest Advisory System, Built with Gemma 4**

Built for GDGoC LASU's "Build with Gemma" Hackathon 2026 — Agriculture & Food Security Track
**Team Silo**

## Problem

Many smallholder farmers in Nigeria lose a large portion of their harvested crops before they reach the market — not from pests or disease, but from poor storage and handling after harvest. Many rural communities also have limited or no internet access, making typical online advisory tools difficult to use exactly when they're needed most.

## Who It's For

- **Primary users:** smallholder farmers growing crops such as tomatoes, peppers, onions, maize, and cassava in rural communities
- **Secondary users:** agricultural extension workers, farmer cooperatives, produce transporters

## Solution

Harvest Guard is an offline AI assistant that gives practical post-harvest storage and handling advice. The farmer describes:
- the crop
- quantity harvested
- weather conditions
- number of days before selling

The app responds with recommendations to reduce spoilage using locally available, affordable storage practices.

## How Gemma Is Used

Gemma 4 is the core intelligence behind Harvest Guard — not a bolt-on feature. Instead of hardcoded rules, the app provides Gemma with a structured post-harvest knowledge base covering tomatoes, maize, cassava, peppers, and onions. Gemma reasons over the farmer's specific situation together with this knowledge base and generates advice tailored to the exact conditions described.

**Integration method:**
- Gemma receives the farmer's request + the post-harvest knowledge base
- It reasons over both inputs and produces personalized recommendations
- Gemma 4 runs locally through Ollama
- A Node.js/Express backend communicates with Ollama via its local API
- All processing happens fully offline

## Tech Stack

- **Backend:** Node.js, Express
- **AI Model:** Gemma 4 (e2b), via Ollama, running locally
- **Frontend:** HTML/CSS/JavaScript
- **Knowledge Base:** Structured JSON, covering 5 crops and their post-harvest handling practices

## Development Process

1. Researched post-harvest handling practices for five major crops
2. Built a structured knowledge base using reliable agricultural information
3. Configured Gemma 4 with Ollama for offline inference
4. Developed a Node.js backend to communicate with Ollama
5. Designed a simple web interface for farmers
6. Tested the application across different farming scenarios

## Challenges & Solutions

**Challenge:** Generating responses locally on lower-powered hardware sometimes increased response time.
**Solution:** Reduced prompt size and simplified the knowledge base while preserving the important agricultural information.

## Results

Harvest Guard successfully runs without an internet connection and provides crop-specific post-harvest advice based on the farmer's input. The app was tested across scenarios involving tomatoes, maize, cassava, peppers, and onions to confirm recommendations matched the knowledge base.

## Demo & Repository

- **GitHub Repository:** https://github.com/Abu-Sumayyah-05/Harvest-Guard
- **Demo Video:** https://youtu.be/525VlmLK6Y0?si=R9j1RQ0j6RJ0RDL1
- **Offline Demonstration:** tested and confirmed working with no internet connection

## Innovation

Harvest Guard focuses on reducing post-harvest losses instead of the more common approach of detecting crop diseases. By running Gemma locally, farmers can receive useful agricultural advice even in areas where internet access is unavailable.

## Impact

Harvest Guard can help farmers reduce avoidable post-harvest losses, improve the quality of crops reaching the market, and support better food availability — while demonstrating how offline AI can solve practical challenges in agriculture.

## Future Improvements

- Support for Yoruba, Hausa, and Igbo
- Voice input for farmers who cannot read or write
- Support for additional crops
- Deployment on portable, low-cost devices such as Raspberry Pi
- Image-based crop assessment

## Conclusion

Harvest Guard shows how offline AI can support smallholder farmers with practical post-harvest advice. By combining Gemma 4 with a structured agricultural knowledge base, the application provides recommendations that are useful even without internet access — helping farmers make better storage decisions and reduce post-harvest losses.