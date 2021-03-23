const { config } = require('../../config');
const boom = require('@hapi/boom');

function witherrorStack(error, stack) {
    if (config.dev) {
        return {...error, stack };
    }
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        next(boom.badImplementation(err));
    }
    next(err);
}

function errorHandler(err, req, res, next) {
    const {
        output: { statusCode, payload },
    } = err;

    res.status(err.status || 500);
    res.json(witherrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    errorHandler,
    wrapErrors,
};