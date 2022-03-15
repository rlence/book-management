const statusMessage = {
    '400':'Bad Request',
    '409':'User not exist',
    '401':'User or password incorrect',
    '404':'Not Found',
    '500': 'Internal server error'
}

export const objRes = {
    message: "",
    status: 500
}

export const success = (res, body, status = 200) => {
    return res.status(status).send({'body':body});
}

export const error = (res, status = 500, message ) => {
    return res.status(status).send({'message': message || statusMessage[status]})
}

