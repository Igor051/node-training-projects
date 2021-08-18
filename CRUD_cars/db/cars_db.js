let cars = [ // машини присутні на базі
    {model: "BMW", year: 2015},
    {model: "Audi", year: 2010},
    {model: "Mitsubishi", year: 2019},
    {model: "Tesla", year: 2021},
    {model: "Nissan", year: 2012},
    {model: "Tesla", year: 2018}
]

// всі існуючі моделі машин, аби не можна було добавити на базу машину "Вася лох 228"
let existing_models = ["BMW", "Audi", "Mitsubishi", "Tesla", "Nissan", "Volvo"]

module.exports = {
    cars,
    existing_models
}