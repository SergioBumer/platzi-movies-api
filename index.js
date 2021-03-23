const express = require('express');
const { config } = require('./config/index');

const moviesApi = require('./routes/movies.js');
const app = express();

const {
    errorHandler,
    wrapErrors,
    logErrors,
} = require('./utils/middlewares/errorHandlers');

const notFoundHandler = require('./utils/middlewares/notFoundHandler');

// body-parser
app.use(express.json());

//Rutas
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error Handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});