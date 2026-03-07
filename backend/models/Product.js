const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: String,
  subcategory: String,
  seo_tags: [String],
  sustainability_filters: [String],
    confidence_score: {
    type: Number,
    min: 0,
    max: 100
  }
}, {
  timestamps: true
},
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;