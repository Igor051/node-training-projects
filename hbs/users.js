class User {
    #name
    #login
    #password

    constructor(name, login, password) {
        this.#name = name
        this.#login = login
        this.#password = password
    }

    get name() {
        return this.#name
    }

    this_user(login, password) {
        return this.#login === login && this.#password === password
    }
}

let users = []
let names_of_each_users = []

function set_user(name, login, password) {
    let user = new User(name, login, password)
    users.push(user)
    names_of_each_users.push(user.name)
}

function user_exist(login, password) {
    let user_name = users.map((item, index, array) => {
        if (item.this_user(login, password)) {
            return item.name
        }
    })
    return user_name[0]
}


module.exports = {
    users: names_of_each_users,
    set_user,
    user_exist
}