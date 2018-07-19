'use strict';

const knexHelper = require('../helpers/knexHelper').get();

module.exports = {
    /**
     * @api public
     * @name jsonList
     * @description albumJsonList getter
     * @return {Array}
     */
    jsonList() {
        return knexHelper
            .select(
                'header', 
                'description',
                'imgUrl'
            )
            .from('LIST');
    },
};