'use strict';

/**
 * planned-meal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::planned-meal.planned-meal');
