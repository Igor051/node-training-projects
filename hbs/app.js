const express = require("express")
const path = require("path")
const express_handlebars = require("express-handlebars") // template engine

const {users, set_user, user_exist} = require("./users")

const app = express()

const static_path = path.join(process.cwd(), "views")
app.use(express.static(static_path)) // встановлюю де лежатимуть статичні файли

app.engine('.hbs', express_handlebars({ // налаштовую hbs, (defaultLayout треба задати false бо
    defaultLayout: false                           // інакше шукатиме лише index файл)
}));

app.set('view engine', '.hbs'); // кажу що мій 'view engine' (template engine) це файли .hbs

// вчу працювати апку з json i всякими даними з форм, урлів і тд.
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/users", (req, res) => {
    console.log(users);
    res.render("users", {users})
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/registration", (req, res) => {
    res.render("registration")
})

app.post("/login", (req, res) => {
    let user_name = user_exist(req.body.login, req.body.password)
    user_name ? res.end(user_name) : res.end("user does not exist")
})

app.post("/registration", (req, res) => {
    set_user(req.body.name, req.body.login, req.body.password)
    res.end("successful registration")
})


app.listen(3000)