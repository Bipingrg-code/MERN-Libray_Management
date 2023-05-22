import express from 'express'
import dbConnection from './database/dbConnection.js'
import dotenv from 'dotenv'
import router from './routes/bookRoutes.js';
const app = express();

app.use(express.json())

//Routes
app.use('/api/v1/', router)

//end config
dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

dbConnection(username, password);
//Server
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is runiing on ${PORT}`)
})