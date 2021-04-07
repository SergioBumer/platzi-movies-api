const assert = require('assert');

const proxyquire = require('proxyquire');
const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', function() {
    describe('when receives an entity and action', function() {
        it('should return the respective message', function() {
            const result = buildMessage('movie', 'create');
            const expected = 'movie created';

            assert.strictEqual(result, expected);
        });
    });

    describe('when receives an entity and action and is a list', function() {
        it('should return the resceptive message with the entity in plural', function() {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';

            assert.strictEqual(result, expected);
        });
    });
});