const _ = require('lodash')

/**
 * Helper to create a JSON API query string from an Object.
 * @see https://www.drupal.org/docs/8/modules/json-api/json-api
 * 
 * example usage :
 * const queryParams = {
 *  sort: {
 *    sortCreated: {
 *      path: 'created',
 *      direction: 'DESC'
 *    }
 *  },
 * fields: {
 *   recipes: ['title']
 * },
 *  page: {
 *    limit: 4
 *  },
 *  include: [
 *    'tags', 
 *    'image'
 *  ],
 * }
 * 
 * @param {object} queryParams as an object.
 */

function buildQueryString (object, stackedPath = '', stringsParts = []) {
  _.forEach(object, (value, property) => {
    const propertySyntax = stackedPath ? `[${encodeURI(property)}]` : property
    if (_.isPlainObject(value)) {
      buildQueryString(value, stackedPath + propertySyntax, stringsParts)
    }
    else {
      stringsParts.push(stackedPath + propertySyntax + '=' + encodeURI(value))
    }
  })
  return stringsParts.join("&")
}

export {
  buildQueryString
}
