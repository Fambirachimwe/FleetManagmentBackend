'use strict';

/**
 * fuel-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fuel-request.fuel-request');
