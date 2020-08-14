const mongoose = require('mongoose')
const e = require('express')
const url = 'mongodb://localhost:27017/userData'
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 3
    },
    age: {
        required: true,
        type: Number,
        max: 120,
        min: 0
    },
    gender: {
        required: true,
        type: String
    },
    contact: {
        required: true,
        type: Number,
        maxlength: 10,
        minlength: 10
    },
    location: {
        required: true,
        type: String,
    }
})

const Users = mongoose.model('Users', userSchema)
