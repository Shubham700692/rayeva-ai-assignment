require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

async function startServer() {
  try {
    await connectDB();

    app.use("/api/products", productRoutes);

    app.use(errorHandler);

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error);
  }
}

startServer();