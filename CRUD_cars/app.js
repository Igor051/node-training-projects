const express = require("express")

const apiRouter = require("./api.router")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", apiRouter)

app.listen(3000)