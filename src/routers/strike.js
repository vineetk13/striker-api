const express = require("express")
const res = require("express/lib/response")
const Striker = require("../models/strike")

const router = express.Router()

let mystrike = null

Striker.find({owner: "vineetk13"},(err, doc) => {
    if(err){
        console.log('find documents error..!!!')
        return 
    }
    if(doc.length>0){
        mystrike = doc[0]
    }
    else{
        mystrike = new Striker({owner: "vineetk13"})
        mystrike.save()
    }
})


router.patch("/mystrike", (req, res) => {
    try{
        mystrike.total = mystrike.total + 1
        if(req.body.hit){
            mystrike.strike = mystrike.strike + 1 
        }
        else{
            mystrike.strike = mystrike.strike - 1
        }
        mystrike.last_strike = mystrike.current_strike
        mystrike.current_strike = req.body
        
        mystrike.save()
        res.send(mystrike)
    }
    catch(e){
        res.status(400).send()
    }
})

router.get("/mystrike", (req, res) => {
    try{
        res.send(mystrike)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports = router