const {get_all_cars, get_cars_by_model_name, set_new_car, update_car, delete_cars} = require("../service/cars.service")

module.exports = {
    get_all_cars: (req, res) => {
        const cars = get_all_cars()
        res.json(cars)
    },
    get_cars_by_model_name: (req, res) => {
        const cars = get_cars_by_model_name(req.params.modelName)
        if (cars.length !== 0) {
            res.json(cars)
        } else {
            res.status(204)
            res.statusMessage = "There are no cars with this model name"
            res.end()
        }
    },
    set_new_car: (req, res) => {
        set_new_car(req.body)
        res.end("car was add successful")
    },
    update_car: (req, res) => {
        const is_success = update_car(req.body)
        if (is_success) {
            res.end("car updated successfully")
        } else {
            res.status(406)
            res.statusMessage = "There are no cars with this model name"
            res.end()
        }
    },
    delete_cars: (req, res) => {
        delete_cars(req.params.modelName)
        res.end("cars deleted")
    }
}