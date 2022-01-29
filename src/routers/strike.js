const express = require("express")
const res = require("express/lib/response")
const Striker = require("../models/strike")

const router = express.Router()

router.patch("/mystrike", async (req, res) => {
    const mystrike = await Striker.findOne({owner: "vineetk13"})
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

router.get("/mystrike", async (req, res) => {
    let mystrike = null
    try{
        const doc = await Striker.find({owner: "vineetk13"})
        if(doc.length>0){
            mystrike = doc[0]
        }
        else{
            mystrike = new Striker({owner: "vineetk13"})
            mystrike.save()
        }
    }
    catch(e){
        res.status(404).send()
    }
    

    try{
        res.send(mystrike)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports = router