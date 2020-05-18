import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import connect from "../src/api/connect.route"

const app = express()

app.use(cors())
process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Register api routes
app.use("/api/v1/connect", connect)
app.use("/status", express.static("build"))
app.use("/", express.static("build"))
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
