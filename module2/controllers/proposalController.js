const { generateProposal } = require("../services/aiProposalService");

async function createProposal(req, res) {

  try {

    const data = req.body;

    if (!data.company_name || !data.budget) {
      return res.status(400).json({
        error: "company_name and budget are required"
      });
    }

    const proposal = await generateProposal(data);

    res.json({
      success: true,
      proposal
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Proposal generation failed"
    });

  }

}

module.exports = { createProposal };