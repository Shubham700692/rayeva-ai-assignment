function logPrompt(prompt) {
  console.log("AI PROMPT:");
  console.log(prompt);
}

function logResponse(response) {
  console.log("AI RESPONSE:");
  console.log(response);
}

module.exports = {
  logPrompt,
  logResponse
};