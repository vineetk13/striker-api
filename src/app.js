const express = require("express")
require("./db/striker")

const app = express()
const strikerRouter = require("./routers/strike")

app.use(express.json())
app.use(strikerRouter)

module.exports = app