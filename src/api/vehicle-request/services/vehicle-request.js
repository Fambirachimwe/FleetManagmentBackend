'use strict';

/**
 * vehicle-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vehicle-request.vehicle-request');
