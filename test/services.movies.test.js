const assert = require('assert');

const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { moviesMocks } = require('../utils/mocks/movies/moviesMock');

describe('services - movies', function() {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock,
    });

    const moviesService = new MoviesServices();

    describe('when get Movies method is called', async function() {
        it('should call the getall MongoLibMethod', async function() {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async function() {
            const result = await moviesService.getMovies({});
            const expected = moviesMocks;

            assert.deepEqual(result, expected);
        });
    });
});