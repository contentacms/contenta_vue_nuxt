/**
 * Help to fetch resources from our JSON-API
 */
import axios from 'axios'
import {buildQueryString} from './JSONAPIQueryBuilder'
import jsonapiParse from "jsonapi-parse"

class DrupalJSONAPI {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  /**
   * http GET request on JSON-API server
   * 
   * @param {string} entity Uri . eg : "/recipes"
   * @param {object} query definition, @see JSONAPIQueryBuilder
   */
  async get (uri, query) {
    const queryString = buildQueryString(query)
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

}

export default DrupalJSONAPI
