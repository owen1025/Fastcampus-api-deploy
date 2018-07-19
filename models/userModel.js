'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    login(email, password) {
        return knexHelper
            .from('USER')
            .where({
                email,
                password,
            })
            .first()
            .then(loginResult => {
                const returnResult = loginResult ? 
                    { statusCode : 200, msg : 'success' } :
                    { statusCode : 401, msg : 'fail' }
                
                return returnResult;
            });
    },

    join(email, password) {
        return knexHelper('USER')
            .insert({
                email,
                password
            });
    }
};