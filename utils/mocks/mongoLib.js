const sinon = require('sinon');


const { moviesMocks, filteredMovies } = require('./movies/moviesMock');

const getAllStub = sinon.stub();


getAllStub.withArgs('movies').resolves(moviesMocks);

const createStub = sinon.stub().resolves(moviesMocks[0].id);


class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
}