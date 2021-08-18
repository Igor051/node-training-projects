const path = require("path")
const fs = require("fs")

// дістати всі файли зі всіх вложених папок і винести їх усіх на один рівень
function doing_flat_file_system(ignored = [], item = __dirname, single_file = "") {
    if (ignored.indexOf(single_file) !== -1) {
        console.log("return");
        return
    }
    fs.readdir(item, (err, dir) => {
        if (dir === undefined) {

            fs.rename(item, path.join(__dirname, single_file), () => {
                console.log("item: " + item);
                console.log("dirname: " + __dirname);
            })

        } else {
            dir.forEach((structure) => {
                doing_flat_file_system(ignored, path.join(item, structure), structure)
            })
        }
    })
}

doing_flat_file_system([".idea", "node_modules"])
