import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'

config()

const app = express()
const PORT = process.env.PORT

app.use( express.json() )
app.use( cors() )

mongoose.connect( process.env.MONGO_URI ).then( () => console.log("Conectado a MongoDB") )  

app.listen( PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`)
} )