const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-f]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.string().max(4);
const movieGenreSchema = joi.string().max(30);
const movieDurationSchema = joi.string().max(10);
const createMovieSchema = {
    name: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    genre: movieGenreSchema.required(),
    duration: movieDurationSchema.required(),
};

const updateMovieSchema = {
    name: movieTitleSchema,
    year: movieYearSchema,
    genre: movieGenreSchema,
    duration: movieDurationSchema,
};

module.exports = { movieIdSchema, createMovieSchema, updateMovieSchema };