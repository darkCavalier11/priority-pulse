const mongoose = require('mongoose')
const express = require('express')
const UserModel = require('../database/user')

const app = express()
const router = new express.Router()

app.use(express.json())

router.post('/add', async(req, res)=>{
    try{
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({
            error: err.message
        })
    }
})

module.exports = router