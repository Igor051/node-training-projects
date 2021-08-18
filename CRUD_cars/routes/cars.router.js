const {Router} = require("express")
const controller = require("../controllers/cars.controller")
const middleware = require("../middlewares/cars.middleware")

const carsRouter = Router()

// отримати всі машини
carsRouter.get("/", controller.get_all_cars)

// отримати машину за назвою моделі
carsRouter.get("/:modelName", middleware.check_car_name_validity, controller.get_cars_by_model_name)


/*дізнатися чи можна створити лиш одну мідлвару, (check_req_body_validity) а всі ці мідлвари як хелпери якісь
 запихнути туди, зробити тіпа check_req_body_validity.helpers.js, бо шось забагато мідлварок на 1 роут */

// добавити нову машину
carsRouter.post("/",
    middleware.is_req_body_missing, middleware.is_req_body_name_a_string,
    middleware.is_req_body_name_an_empty_string, middleware.is_req_body_name_exist,
    middleware.is_req_body_year_a_number, middleware.check_req_body_year_range,
    controller.set_new_car
)

// оновити існуючу машину (обновить першу машину, що знайде на базі за вказаною моделлю, і змінить її рік)
// у машин немає id тому міняю за назвою
carsRouter.put("/",
    middleware.is_req_body_missing, middleware.is_req_body_name_a_string,
    middleware.is_req_body_name_an_empty_string, middleware.is_req_body_name_exist,
    middleware.is_req_body_year_a_number, middleware.check_req_body_year_range,
    controller.update_car
)

// видалить всі машини вказаної моделі
carsRouter.delete("/:modelName", middleware.is_modelName_in_db, controller.delete_cars)

module.exports = carsRouter