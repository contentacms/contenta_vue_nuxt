  import _ from 'lodash'
  
  /**
   * Helper to create a JSON API query string from a Object.
   * does NOT support shorthand syntaxes for now (eg : sort=-created)
   * 
   * const query = {
   *  sort: {
   *    sortCreated: {
   *      path: 'created',
   *      direction: 'DESC'
   *    }
   *  },
   * fields: {
   *   recipes
   * },
   *  page: {
   *    limit: 4
   *  },
   *  include: [
   *    'tags',
   *    'field_image',
   *    'field_image.field_image',
   *    'field_image.field_image.file--file'
   *  ],
   * }
   * 
   * @param {object} query options as an object. do NOT use shorthands notation.
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
