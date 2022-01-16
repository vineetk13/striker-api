const app = require("./app.js")

const port = process.env.PORT

app.listen(port, () => {
    console.log("App setup and running on ", port)
})
