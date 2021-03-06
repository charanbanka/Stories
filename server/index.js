import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Routes from './routes/posts.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
const PORT = process.env.PORT || 5000
app.use('/posts',Routes)
app.use('/user',userRoutes)

mongoose.connect(process.env.DB_CON,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)) )
    .catch((error)=>console.log(error))
