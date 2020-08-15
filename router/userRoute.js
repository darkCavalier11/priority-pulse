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
            error: "Already used contact number or name. Try again again."
        })
    }
})

router.post('/update', async(req, res)=>{
    try{
        if (req.body.cred.name && req.body.cred.contact){
            const availableForUpdate = ['age', 'contact', 'location']
            const user = await UserModel.findOne(req.body.cred)
            const updateQuery = req.body.updateQuery
            const updateFields = Object.keys(req.body.updateQuery)
            console.log(user)
            for(i = 0; i < updateFields.length; i++){
                if (! availableForUpdate.includes(updateFields[i])){
                    throw new Error('Restrict to update')
                }
                user[updateFields[i]] = updateQuery[updateFields[i]]
            }
            console.log(user)
            await user.save()
            res.status(200).send(user)
        }
        else{
            throw new Error('Invalid credentials')
        }
    }
    catch(err){
        res.status(400).send({
            error: err.message
        })
    }
})

module.exports = router