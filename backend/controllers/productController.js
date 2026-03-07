const Product = require("../models/Product");
const { generateProductTags } = require("../services/aiService");
const validate = require("../utils/validator");

async function generateCategory(req, res) {
  try {

    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        error: "Name and description are required"
      });
    }

    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.json({
        success: true,
        message: "Product already exists",
        product: existingProduct
      });
    }

    const aiResult = await generateProductTags(name, description);

    console.log("AI RESULT OBJECT:", aiResult);

    if (!validate(aiResult)) {
      console.log("VALIDATION ERRORS:", validate.errors);
      throw new Error("AI returned invalid structure");
    }
    if (aiResult.confidence_score < 60) {
    console.log("⚠️ Low AI confidence. Manual review recommended.");
    }else{
      console.log("you can prefer");
    }

    const product = new Product({
      name,
      description,
      category: aiResult.category,
      subcategory: aiResult.subcategory,
      seo_tags: aiResult.seo_tags,
      sustainability_filters: aiResult.sustainability_filters,
      confidence_score: aiResult.confidence_score
    });

    await product.save();

    res.status(201).json({
      success: true,
      product
    });

  } catch (error) {

    console.error("Controller Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
}

module.exports = { generateCategory };