
// функція що відправляє response, використовується аби уникнути дубляжу коду
const send_response = (res, status, statusMessage = undefined, res_body = undefined) => {
    res.status(status)
    if (statusMessage) {
        res.statusMessage = statusMessage
    }
    if(res_body){
        res.send(res_body)
    }else{
        res.end()
    }
}

module.exports = send_response
