/**
 * A simple wrapper around waterwheel, mostly to take
 * advantages of jsonapi-parse formatter.
 *  
 * const jsonapi = new JSONAPIClient(http://mydomain)
 * const datas = await jsonapi.get('recipes', queryParams)
 * 
 */
import Waterwheel from 'waterwheel'
import jsonapiParse from "jsonapi-parse"

class JSONAPIClient {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.waterwheel = new Waterwheel({
      base: this.baseUrl,
      jsonapiPrefix: 'api',
      timeout: 2000,
      accessCheck: false
    }, null, {});
  }

  /**
   * http GET request on JSON-API server with waterwheel
   * 
   * @param {string} entity Uri . eg : "/recipes"
   * @param {object} JSONAPI query parameters as an objct, @see JSONAPIQueryBuilder
   */
  async get (uri, queryParams = {}, id = '') {
    try {
      const response = await this.waterwheel.jsonapi.get(uri, queryParams, id)
      return jsonapiParse.parse(response).data
    }
    catch (e) {
      console.log(e.message)
    }
  }
}

export default JSONAPIClient
