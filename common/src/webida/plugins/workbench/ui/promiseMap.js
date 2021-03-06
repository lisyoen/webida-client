/*
* Copyright (c) 2012-2015 S-Core Co., Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * Constructor
 * promiseMap
 *
 * @see
 * @since: 2015.09.15
 * @author: hw.shim
 */

// @formatter:off
define([
    'webida-lib/util/logger/logger-client'
], function(
    Logger
) {
    'use strict';
// @formatter:on

    /**
     * @typedef {Object} Promise
     */

    var logger = new Logger();
    //logger.setConfig('level', Logger.LEVELS.log);
    //logger.off();

    var promiseMap = {

        promises: {},

        /**
         * @param {String} id
         * @param {Promise} promise
         */
        set: function(id, promise) {
            this.promises[id] = promise;
        },

        /**
         * @return {Promise}
         */
        get: function(id) {
            return this.promises[id];
        },
    };

    return promiseMap;
});
