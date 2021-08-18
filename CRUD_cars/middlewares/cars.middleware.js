const {check_car_name_validity, can_delete_cars} = require("../service/cars.service")
const send_response = require("./helpers/cars.middleware.helpers")

const REQ_BODY_DESCRIPTION = "request body must be an json object with properties {\"name\":string, \"year\":number}"

module.exports = {
    check_car_name_validity: (req, res, next) => {
        try {
            if (check_car_name_validity(req.params.modelName)) {
                next()
            } else {
                throw new Error(`cars with model name ${req.params.modelName} does not exist`)
            }
        } catch (e) {
            send_response(res, 400, e.message)
        }
    },
    is_req_body_missing: (req, res, next) => {
        try {
            if (Object.keys(req.body).length !== 0) {
                next()
            } else {
                throw new Error("missing request body")
            }
        } catch (e) {
            send_response(res, 400, e.message, REQ_BODY_DESCRIPTION)
        }
    },
    is_req_body_name_a_string: (req, res, next) => {
        try {
            if (typeof req.body.name === "string") {
                next()
            } else {
                throw new Error("property \"name\" must be a string")
            }
        } catch (e) {
            send_response(res, 400, e.message, REQ_BODY_DESCRIPTION)
        }
    },
    is_req_body_name_an_empty_string: (req, res, next) => {
        try {
            const car_name = req.body.name
            car_name.trim()
            if (car_name) {
                next()
            } else {
                throw new Error("property \"name\" is an empty string")
            }
        } catch (e) {

            send_response(res, 400, e.message, REQ_BODY_DESCRIPTION)
        }
    },
    is_req_body_name_exist: (req, res, next) => {
        try {
            const is_car_name_at_db = check_car_name_validity(req.body.name)
            if (is_car_name_at_db) {
                next()
            } else {
                throw new Error(`cars with model name \"${req.body.name}\" does not exist`)
            }
        } catch (e) {
            send_response(res, 400, e.message)
        }
    },
    is_req_body_year_a_number: (req, res, next) => {
        try {
            if (typeof req.body.year === "number") {
                next()
            } else {
                throw new Error("property year must be a number")
            }
        } catch (e) {
            send_response(res, 400, e.message, REQ_BODY_DESCRIPTION)
        }
    },
    check_req_body_year_range: (req, res, next) => {
        try {
            const date = new Date()
            const current_year = date.getFullYear()
            if (req.body.year >= 1920 && req.body.year <= current_year) {
                next()
            } else {
                throw new Error("bad year range")
            }
        } catch (e) {
            send_response(res, 400, e.message)
        }
    },
    is_modelName_in_db: (req, res, next) => {
        try {
            if (can_delete_cars(req.params.modelName)) {
                next()
            } else {
                throw new Error(`does not have car with model \"${req.params.modelName}\"`)
            }
        } catch (e) {
            send_response(res, 400, e.message)
        }
    }
}