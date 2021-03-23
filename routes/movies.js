const express = require('express');
const MoviesService = require('../services/movies');

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema,
} = require('../schemas/movies');

const validationHandler = require('../utils/middlewares/validationHandler');
const validatorHandler = require('../utils/middlewares/validationHandler');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            throw new Error('error getting Movies');
            res.status(200).json({
                data: movies,
                message: 'Movies charged',
            });
        } catch (err) {
            next(err);
        }
    });

    router.get(
        '/:movieId',
        validatorHandler({ movieId: movieIdSchema }, 'params'),
        async function(req, res, next) {
            const { movieId } = req.params;
            try {
                const movies = await moviesService.getMovie({
                    movieId,
                });

                res.status(200).json({
                    data: movies,
                    message: 'Movie charged',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.post(
        '/',
        validatorHandler(createMovieSchema),
        async function(req, res, next) {
            const { body: movie } = req;
            try {
                const createdMovieId = await moviesService.createMovie({ movie });

                res.status(200).json({
                    data: createdMovieId,
                    message: 'Movie created',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:movieId',
        validatorHandler({ movieId: movieIdSchema }, 'params'),
        validatorHandler(updateMovieSchema),
        async function(req, res, next) {
            const { body: movie } = req;
            const { movieId } = req.params;
            try {
                const updatedMovieId = await moviesService.updateMovie({
                    movieId,
                    movie,
                });

                res.status(200).json({
                    data: updatedMovieId,
                    message: 'Movie updated',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:movieId',
        validatorHandler({ movieId: movieIdSchema }, 'params'),
        async function(req, res, next) {
            const { movieId } = req.params;
            try {
                const deletedMovieId = await moviesService.deleteMovie({ movieId });

                res.status(200).json({
                    data: deletedMovieId,
                    message: 'Movie deleted',
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = moviesApi;