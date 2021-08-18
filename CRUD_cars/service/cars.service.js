let {cars, existing_models} = require("../db/cars_db")

module.exports = {
    get_all_cars: () => {
        return cars
    },
    get_cars_by_model_name: (model_name) => {
        return cars.filter((item) => {
            return item.model === model_name;
        })
    },
    check_car_name_validity: (model_name) => {
        return existing_models.indexOf(model_name) !== -1
    },
    set_new_car: (car_object) => {
        const car = {model: car_object.name, year: car_object.year}
        cars.push(car)
    },
    update_car: (car_object) => {
        const index = cars.findIndex((item) => {
            return item.model === car_object.name
        })
        if (index === -1) {
            return false
        } else {
            cars[index] = {model: car_object.name, year: car_object.year}
            return true
        }
    },
    delete_cars: (model_name) => {
            cars = cars.filter(item => {
                return item.model !== model_name
            })
    },
    can_delete_cars: (model_name) => {
        return cars.some(item => {
            return item.model === model_name
        })

    }
}