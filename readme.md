# AI-Powered Product Categorization API

This project is a backend service that uses **Artificial Intelligence** to automatically classify ecommerce products based on their name and description. The system analyzes product details and returns structured information such as category, subcategory, SEO tags, sustainability indicators, and an AI confidence score.

The goal of this project is to demonstrate how **AI can assist ecommerce platforms** in organizing product catalogs and improving product discoverability.

---

## Project Overview

Manually categorizing thousands of products in an ecommerce platform can be time-consuming and inconsistent. This API automates that process using an AI model.

When a product name and description are sent to the API, the system:

1. Sends the product information to an AI model.
2. The AI analyzes the product context.
3. It returns structured metadata for the product.
4. The backend validates the AI response.
5. The product is stored in MongoDB.

This allows ecommerce platforms to **quickly organize products and generate useful search tags automatically.**

---

## Key Features

 **Automatic Product Categorization**
  AI determines the most relevant category and subcategory.

  **SEO Tag Generation**
  The system generates multiple search-friendly keywords for better discoverability.

  **Sustainability Detection**
  Products related to eco-friendly materials or reuse can be flagged.

  **AI Confidence Score**
  The model returns a confidence value (0–100) representing how certain it is about the classification.

  **Duplicate Product Check**
  Prevents creating duplicate entries if the product already exists.

  **Response Validation**
  AI responses are validated to ensure the structure is correct before saving to the database.

  **Logging**
  Prompts and responses are logged to help monitor AI behavior and debug issues.

---

## Technology Stack

This project uses a modern backend stack:

Node.js – JavaScript runtime environment
Express.js– REST API framework
MongoDB– NoSQL database for product storage
Google Gemini API – AI model used for product classification
AJV – JSON schema validation for AI responses
dotenv – Environment variable management
Nodemon – Development server auto-reload

---

## Project Folder Structure

```id="struct01"
backend
│
├── config
│   └── db.js                # MongoDB connection setup
│
├── controllers
│   └── productController.js # API logic
│
├── models
│   └── Product.js           # MongoDB schema
│
├── routes
│   └── productRoutes.js     # API routes
│
├── services
│   └── aiService.js         # AI integration
│
├── utils
│   ├── validator.js         # Response validation
│   └── logger.js            # Logging utility
│
├── server.js                # Application entry point
└── package.json
```

---

## Installation and Setup

### 1. Clone the Repository

```id="setup01"
git clone <repository-url>
cd rayeva-ai-assignment/backend
```

---

### 2. Install Dependencies

```id="setup02"
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```id="setup03"
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

---

### 4. Start the Server

```id="setup04"
npm run dev
```

The server will start at:

```id="setup05"
http://localhost:5000
```

---

## API Endpoints

### 1. Generate Product Category

**POST**

```id="api01"
/api/products/generate
```

This endpoint sends product information to the AI model and returns structured data.

#### Example Request

```json id="api02"
{
  "name": "Linen Summer Shirt",
  "description": "Lightweight breathable linen shirt suitable for hot weather and casual wear"
}
```

---

#### Example Response

```json id="api03"
{
  "success": true,
  "product": {
    "name": "Linen Summer Shirt",
    "description": "Lightweight breathable linen shirt suitable for hot weather and casual wear",
    "category": "Apparel",
    "subcategory": "Linen Shirts",
    "seo_tags": [
      "linen shirt",
      "summer shirt",
      "breathable shirt",
      "casual wear",
      "lightweight clothing"
    ],
    "sustainability_filters": [],
    "confidence_score": 90
  }
}
```

---

### 2. Get All Stored Products

**GET**

```id="api04"
/api/products
```

Returns all products stored in the database.

Example response:

```json id="api05"
{
  "success": true,
  "products": []
}
```

---

## AI Processing Flow

The backend follows this process when generating product metadata:

```id="flow01"
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
Response Validation
      │
      ▼
MongoDB Storage
      │
      ▼
Final API Response
```

This ensures that **only valid and structured AI results are stored.**

---

## Testing the API

You can test the API using tools like:

* Postman
* Thunder Client (VS Code)
* cURL

Example request body:

```json id="test01"
{
 "name": "Wireless Bluetooth Earbuds",
 "description": "Noise cancelling earbuds with long battery life and charging case"
}
```

---

## Possible Future Improvements

Some additional features that could enhance the system:

* AI-based **duplicate product similarity detection**
* Automatic **product title optimization**
* Smart **SEO tag ranking**
* Product **search API**
* AI fallback system for low confidence predictions

---

## Conclusion

This project demonstrates how AI can be integrated into a backend system to automate tasks commonly found in ecommerce platforms. By combining **AI classification, validation, and database storage**, the system can efficiently organize product data while maintaining reliability.

---

## Author

Backend AI Assignment
Node.js + Express + MongoDB + Gemini AI
