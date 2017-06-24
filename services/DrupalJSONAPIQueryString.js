  import _ from 'lodash'
  
  /**
   * Helper to create a JSON API query string from a Object.
   * @see https://www.drupal.org/docs/8/modules/json-api/json-api
   * does NOT support shorthand syntaxes for now (eg : sort=-created)
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
function buildQueryString (queryParams) {
  
    let queryStringParts = []

    _.forEach(queryParams, (value, key) => {

      if (key === 'include') {
        queryStringParts.push(key + '=' + value.join(','))
      }

      if (key === 'page' || key === 'fields') {
        _.forEach(value, (subvalue, subkey) => {
          queryStringParts.push(`${encodeURI(key)}[${encodeURI(subkey)}]=${encodeURI(subvalue)}`)
        })
      }

      if (key === 'sort') {
        _.forEach(value, (subvalue, subkey) => {
          _.forEach(subvalue, (subsubvalue, subsubkey) => {
            queryStringParts.push(`${encodeURI(key)}[${encodeURI(subkey)}][${encodeURI(subsubkey)}]=${encodeURI(subsubvalue)}`)
          })
        })
      }

      // to fix :D
      if (key === 'filter') {
        _.forEach(value, (subvalue, subkey) => {
          _.forEach(subvalue, (subsubvalue, subsubkey) => {
            _.forEach(subsubvalue, (subsubsubvalue, subsubsubkey) => {
              queryStringParts.push(`${encodeURI(key)}[${encodeURI(subkey)}][${encodeURI(subsubkey)}][${encodeURI(subsubsubkey)}]=${encodeURI(subsubsubvalue)}`)
            })
          })
        })
      }
    })

    const queryString = queryStringParts.join('&')
    return queryString
  }

export {
  buildQueryString
}
