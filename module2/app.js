require("dotenv").config();

const express = require("express");
const proposalRoutes = require("./routes/proposalRoutes");

const app = express();

app.use(express.json());

app.use("/api/proposal", proposalRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});