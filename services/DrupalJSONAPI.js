/**
 * Send JSON-API request to Contenta JSON-API server.
 * 
 */
import axios from 'axios'
const _ = require('lodash')
var jsonapiParse = require("jsonapi-parse")

class DrupalJSONAPI {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  /**
   * http GET request on JSON-API server
   * 
   * @param {string} entity Uri . eg : "/recipes"
   * @param {object} query options as an object. do NOT use shorthands notation.
   * const query = {
   *  sort: {
   *    sortCreated: {
   *      path: 'created',
   *      direction: 'DESC'
   *    }
   *  },
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
   */
  async get (uri, query) {
    const queryString = this.buildQueryString(query)
    let result = null
    const url = encodeURI(this.baseUrl) + encodeURI(uri) + '?' + queryString
    try {
      const response = await axios.get(url)
      console.log('DrupalJSONAPI parsed url : ', url)
      const parsedJson = jsonapiParse.parse(response.data)
      result = parsedJson.data
    } catch (e) {
      console.error(e.message)
    }
    return result
  }

  buildQueryString (query) {

    console.log(query)

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

      // :-p
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

}

export default DrupalJSONAPI
