const mongoose = require('mongoose')
const express = require('express')
const userRoute = require('./router/userRoute')
const taskRoute = require('./router/taskRoute')
const app = express()

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

app.listen(3000, ()=>{
    console.log('Server is up')
})