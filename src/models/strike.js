const mongoose = require("mongoose")

const strikeSchema = new mongoose.Schema({
    strike:{
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    current_strike: {
        type: {
            date: String, 
            hit: Boolean,
        },
        default: null,
        // required: true
    },
    last_strike: {
        type: {
            date: String, 
            hit: Boolean,
        },
        default: null,
    }
})

const Striker = mongoose.model("Striker", strikeSchema)

module.exports = Striker
