const model = require("../utils/geminiClient");
const fs = require("fs");
const path = require("path");

function calculateTotal(products) {
  return products.reduce((sum, item) => sum + item.total, 0);
}

function createPrompt(data) {
  return `
You are a sustainability B2B consultant.

Generate a sustainable product proposal.

Company: ${data.company_name}
Industry: ${data.industry}
Budget: ₹${data.budget} INR
Category: ${data.product_category}
Focus: ${data.sustainability_focus.join(", ")}

Return ONLY valid JSON:

{
 "product_mix": [
   {
     "product": "",
     "quantity": "",
     "unit_price": "",
     "total": ""
   }
 ],
 "budget_allocation": "",
 "estimated_cost_breakdown": {},
 "impact_summary": ""
}
`;
}

async function generateProposal(data) {

  const prompt = createPrompt(data);

  const result = await model.generateContent(prompt);

  const response = result.response.text();
 

  fs.appendFileSync(
    "logs/ai_logs.txt",
    `PROMPT:\n${prompt}\n\nRESPONSE:\n${response}\n\n`
  );
 const cleanJSON = response.replace(/```json|```/g, "");
 
const proposal = JSON.parse(cleanJSON);

const totalCost = calculateTotal(proposal.product_mix);

proposal.total_cost = totalCost;


if (totalCost > data.budget) {
  throw new Error("Generated proposal exceeds client budget");
}

return proposal;
}

module.exports = { generateProposal };