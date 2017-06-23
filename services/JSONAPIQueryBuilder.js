  import _ from 'lodash'
  
  /**
   * Helper to create a JSON API query string from a Object
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
function buildQueryString (query) {
  
    let queryParts = []

    _.forEach(query, (value, key) => {

      if (key === 'include') {
        queryParts.push(key + '=' + value.join(','))
      }

      if (key === 'page' || key === 'fields') {
        _.forEach(value, (subvalue, subkey) => {
          queryParts.push(`${encodeURI(key)}[${encodeURI(subkey)}]=${encodeURI(subvalue)}`)
        })
      }

      if (key === 'sort') {
        _.forEach(value, (subvalue, subkey) => {
          _.forEach(subvalue, (subsubvalue, subsubkey) => {
            queryParts.push(`${encodeURI(key)}[${encodeURI(subkey)}][${encodeURI(subsubkey)}]=${encodeURI(subsubvalue)}`)
          })
        })
      }

      // to fix :D
      if (key === 'filter') {
        _.forEach(value, (subvalue, subkey) => {
          _.forEach(subvalue, (subsubvalue, subsubkey) => {
            _.forEach(subsubvalue, (subsubsubvalue, subsubsubkey) => {
              queryParts.push(`${encodeURI(key)}[${encodeURI(subkey)}][${encodeURI(subsubkey)}][${encodeURI(subsubsubkey)}]=${encodeURI(subsubsubvalue)}`)
            })
          })
        })
      }
    })

    const queryString = queryParts.join('&')
    return queryString
  }

export {
  buildQueryString
}
