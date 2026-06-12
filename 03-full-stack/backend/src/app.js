import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
import alumnosRouter from '../routes/alumnos.routes.js'
import authRoutes from '../routes/auth.routes.js'
import cookieParser from 'cookie-parser'

config()

const app = express()
const PORT = process.env.PORT

app.use( express.json() )
app.use( cors({
  origin: [
    "http://localhost:5173",
    "https://44-web-a-proyecto-final-five.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}) )
app.use( cookieParser() )
app.use( '/api/alumnos', alumnosRouter )
app.use( '/api', authRoutes )

mongoose.connect( process.env.MONGO_URI ).then( () => console.log("Conectado a MongoDB") )  

app.listen( PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`)
} )