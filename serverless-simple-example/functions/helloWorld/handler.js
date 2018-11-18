'use strict';

module.exports.index = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: 'hello world',
    });
};
