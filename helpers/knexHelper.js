'use strict';

const app         = require('express')();
const dbConfig    = require('../package.json')['database'];

// knex initialize
const knex = require('knex')({
    client              : 'mysql',
    connection          : dbConfig,
    useNullAsDefault    : true
});

exports.get = () => knex;