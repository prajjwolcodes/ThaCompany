const express = require("express")
const app = express()
const dotenv = require("dotenv");
const cors = require("cors")

const dbConnection = require("./database/dbConnection");
const authRoutes = require("./routes/authRoutes");

app.use(express.json())
app.use(cors({
    origin: "*"
}))

dotenv.config()
dbConnection()

app.use("/auth", authRoutes)

app.listen(3000, () => {
    console.log("Running at port 3000");
})