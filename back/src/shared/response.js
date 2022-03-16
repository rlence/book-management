const statusMessage = {
    '400':'Bad Request',
    '409':'User not exist',
    '401':'User or password incorrect',
    '404':'Not Found',
    '500': 'Internal server error'
}

export const success = (res, body, status = 200) => {
    return res.status(status).send({'body':body});
}

export const error = (res,  message, status = 500, ) => {
    return res.status(status).send({'message': message || statusMessage[status]})
}

export const errorObject = (status = 500, message) => Promise.reject({ status, message});