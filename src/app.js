import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

import HealthCheckRouter from "./router/healthCheck.route.js"
app.use('/api', HealthCheckRouter)

export { app };