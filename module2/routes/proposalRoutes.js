const express = require("express");

const router = express.Router();

const { createProposal } = require("../controllers/proposalController");

router.post("/generate", createProposal);

module.exports = router;