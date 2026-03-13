require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")

const productRoutes = require("./module1/routes/productRoutes")
const proposalRoutes = require("./module2/routes/proposalRoutes")

const app = express()

app.use(cors())
app.use(express.json())

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

/* API Routes */
app.use("/api/products", productRoutes)
app.use("/api/proposal", proposalRoutes)

/* Serve UI */
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"public/index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})