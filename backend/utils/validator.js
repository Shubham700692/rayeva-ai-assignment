const Ajv = require("ajv");

const schema = {
  type: "object",
  properties: {
    category: { type: "string" },
    subcategory: { type: "string" },
    seo_tags: {
      type: "array",
      items: { type: "string" }
    },
    sustainability_filters: {
      type: "array",
      items: { type: "string" }
    },
     confidence_score: {
      type: "number",
      minimum: 0,
      maximum: 100
    }
  },
  required: ["category", "subcategory", "seo_tags", "sustainability_filters","confidence_score"]
};

const ajv = new Ajv();
const validate = ajv.compile(schema);

module.exports = validate;