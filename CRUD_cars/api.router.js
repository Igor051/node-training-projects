const {Router} = require("express")
const carsRouter = require("./routes/cars.router")

let apiRouter = Router()

apiRouter.use("/cars", carsRouter)

module.exports = apiRouter