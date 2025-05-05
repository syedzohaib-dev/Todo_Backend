import express from "express";
import todoRoutes from './routes/todoRoutes.js'
// import mongoose from "mongoose";
import { connectDB } from "./utils/connectDB.js";

const app = express()

connectDB()

app.get('/', (req, res) => {
    res.send('<h1>server running</h1>')
})

app.use('/todo', todoRoutes)

app.listen(3000, () => {
    console.log('Server running on port no 3000') 
})


// Router
// Controllers
// Model