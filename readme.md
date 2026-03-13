# Rayeva AI Assignment – AI Powered Backend Services

This project is a backend system that demonstrates how **Artificial Intelligence can automate business processes in ecommerce and B2B commerce systems**.

The project contains **two AI-powered modules**:

**Module 1 – AI Product Categorization API**
Automatically classifies ecommerce products using AI.

**Module 2 – AI B2B Proposal Generator**
Generates sustainability-focused product proposals for companies based on their requirements and budget.

The goal of this project is to demonstrate how **AI can be integrated with backend services to automate catalog management, generate business proposals, and improve operational efficiency.**

---

# Project Overview

Manual product classification and B2B proposal creation are time-consuming processes for many companies.

This project solves those problems using AI.

The system provides two core capabilities:

### Module 1 – Product Catalog Intelligence

Automatically analyzes product information and generates:

* Product category
* Subcategory
* SEO tags
* Sustainability indicators
* AI confidence score

This helps ecommerce platforms **organize product catalogs quickly and improve search discoverability.**

---

### Module 2 – AI B2B Proposal Generation

Generates sustainability-focused **product procurement proposals** for companies.

The system analyzes:

* Company information
* Industry
* Budget
* Sustainability goals

Then the AI produces a structured proposal including:

* Recommended sustainable product mix
* Budget allocation
* Cost breakdown
* Sustainability impact summary

Backend validation ensures that the **generated proposal stays within the client’s budget.**

---

# Key Features

## Module 1 – Product Categorization

**Automatic Product Categorization**

AI determines the most relevant category and subcategory.

**SEO Tag Generation**

The system generates multiple search-friendly keywords for product discoverability.

**Sustainability Detection**

Products related to eco-friendly materials or reuse can be flagged.

**AI Confidence Score**

The AI returns a confidence score (0–100) representing how certain the model is about its classification.

**Duplicate Product Detection**

Prevents duplicate products from being stored in the database.

**Response Validation**

AI responses are validated before being stored.

**Database Storage**

Validated products are saved in MongoDB.

---

## Module 2 – B2B Proposal Generator

**AI Generated Product Mix**

Generates a list of recommended sustainable products.

**Budget Based Planning**

Proposals are generated within the client's specified budget.

**Cost Breakdown**

Provides estimated cost distribution across product categories.

**Impact Summary**

Explains the environmental benefits of the proposal.

**Business Logic Validation**

Backend verifies that the total proposal cost does not exceed the budget.

**AI Logging**

All AI prompts and responses are logged for monitoring and debugging.

---

# Technology Stack

This project uses a modern backend architecture:

**Node.js** – JavaScript runtime environment
**Express.js** – REST API framework
**MongoDB** – Database for storing product data (Module 1)
**Google Gemini API** – AI model used for generation and classification
**AJV** – JSON schema validation
**dotenv** – Environment variable management
**Nodemon** – Development server auto reload

---

# Project Folder Structure

```
rayeva-ai-assignment
│
├── module1
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── productController.js
│   │
│   ├── models
│   │   └── Product.js
│   │
│   ├── routes
│   │   └── productRoutes.js
│   │
│   ├── services
│   │   └── aiService.js
│   │
│   ├── utils
│   │   ├── validator.js
│   │   └── logger.js
│   │
│   └── server.js
│
├── module2
│   ├── controllers
│   │   └── proposalController.js
│   │
│   ├── models
│   │   └── proposalModel.js
│   │
│   ├── routes
│   │   └── proposalRoutes.js
│   │
│   ├── services
│   │   └── aiProposalService.js
│   │
│   ├── utils
│   │   └── geminiClient.js
│   │
│   ├── logs
│   │   └── ai_logs.txt
│   │
│   └── app.js
│
└── README.md
```

---

# Installation and Setup

### 1 Clone Repository

```
git clone <repository-url>
cd rayeva-ai-assignment
```

---

### 2 Install Dependencies

```
npm install
```

---

### 3 Configure Environment Variables

Create a `.env` file.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

---

### 4 Start Servers

For Module 1:

```
npm run dev
```

For Module 2:

```
node app.js
```

---

# Module 1 API Endpoints

### Generate Product Category

POST

```
/api/products/generate
```

Example request:

```
{
  "name": "Linen Summer Shirt",
  "description": "Lightweight breathable linen shirt suitable for hot weather"
}
```

---

### Get All Products

GET

```
/api/products
```

Returns all products stored in MongoDB.

---

# Module 2 API Endpoints

### Generate B2B Proposal

POST

```
/api/proposal/generate
```

Example request:

```
{
  "company_name": "GreenTech Solutions",
  "industry": "IT",
  "budget": 50000,
  "product_category": "office supplies",
  "sustainability_focus": ["plastic-free","recycled"]
}
```

Example response:

```
{
 "success": true,
 "proposal": {
   "product_mix": [],
   "total_cost": 48000,
   "budget_allocation": "",
   "estimated_cost_breakdown": {},
   "impact_summary": ""
 }
}
```

---

# AI Processing Flow

```
Client Request
      │
      ▼
API Endpoint
      │
      ▼
AI Service (Gemini)
      │
      ▼
AI Response
      │
      ▼
Validation & Business Logic
      │
      ▼
Database Storage / API Response
```

---

# Testing the API

You can test using:

* Postman
* Thunder Client
* cURL

---

# Future Improvements

Possible enhancements:

* AI powered product similarity detection
* Smart SEO ranking
* Advanced proposal customization
* Frontend dashboard for proposals
* AI fallback models

---

# Conclusion

This project demonstrates how AI can be integrated into backend systems to automate real-world ecommerce and B2B business workflows.

By combining **AI generation, validation, and backend architecture**, the system provides scalable and intelligent automation for product catalog management and proposal generation.

---

# Author

Shubham Khanzode

AI Internship Backend Assignment
Node.js + Express + MongoDB + Gemini AI
