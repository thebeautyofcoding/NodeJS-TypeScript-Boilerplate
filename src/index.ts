import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { todoRoutes } from "./routes/todos"
import { connectToDatabase } from "./db/db"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000

app.use(todoRoutes)
app.get("/", (req, res) => res.send("Hello from server!"))

app.listen(PORT, () => {
  connectToDatabase()
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
})
