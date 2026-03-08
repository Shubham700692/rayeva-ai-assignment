const express = require("express");
const router = express.Router();

const { generateCategory } = require("../controllers/productController");
console.log("generateCategory:", generateCategory);
router.post("/generate", generateCategory);

module.exports = router;
