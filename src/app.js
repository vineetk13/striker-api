const express = require("express")
const cors = require("cors")
require("./db/striker")

const app = express()
const strikerRouter = require("./routers/strike")

app.use(cors())
app.use(express.json())
app.use(strikerRouter)

module.exports = app