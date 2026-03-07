const { GoogleGenerativeAI } = require("@google/generative-ai");
const logger = require("../utils/logger");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateProductTags(name, description) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
You are an ecommerce product classification AI.

Your task:
Categorize products accurately and generate SEO tags.

Product Name: ${name}
Description: ${description}

Rules:
- Return ONLY valid JSON
- No explanation
- SEO tags must be lowercase
- Generate 5 to 10 tags
- Sustainability filters only if eco related
- Add a confidence_score between 0 and 100 based on how confident you are in the categorization


JSON Format:
{
 "category": "",
 "subcategory": "",
 "seo_tags": [],
 "sustainability_filters": [],
 "confidence_score": 0
}
`;

  logger.logPrompt(prompt);

  const result = await model.generateContent(prompt);
  const response = await result.response;

  let text = response.text();

  
  text = text.replace(/```json|```/g, "").trim();

  logger.logResponse(text);

  console.log("AI RAW RESPONSE:", text);

  
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("AI returned invalid ");
  }
}

module.exports = { generateProductTags };