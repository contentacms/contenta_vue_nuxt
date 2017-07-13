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
import axios from 'axios'

class ContentaClient {

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

  /**
   * return jsonapiParsed result of a d8 subrequests
   * @param {SubRequests} a SubRequests object from "d8-subrequests module"
   */
  async subrequests(subrequests) {
    const response = await axios.get(subrequests.getUrl())
    let data = subrequests.parseResponse(response.data)
    data = data.map(object => jsonapiParse.parse(object).data)
    return data
  }
}

export default ContentaClient
