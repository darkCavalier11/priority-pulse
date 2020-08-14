const mongoose = require('mongoose')
const UserModel = require('../database/user')
const express = require('express')
const router = new express.Router()

const app = express()

app.use(express.json())

router.get('/getPersonsWithCred', async(req, res)=>{
    try{
        users = await UserModel.find(req.body)
        res.status(200).send(users)
    }
    catch(err){
        res.status(400).send({
            error: err.message
        })
    }    
})

module.exports = router