/**
 * Fetch resources from our JSON API server and format
 * result automatically with "jsonapi-parse", to put
 * "included" objects inside "data" objects; so that
 * they are ready to be consumed by our template
 * 
 * example usage :
 * 
 * const queryParams = {
 *    sort: {
 *      sortCreated: {
 *        direction: 'DESC'
 *        path: 'created',
 *      }
 *    },
 *    include: ['tags'],   
 *  }
 *  const datas = await this.jsonapi.get('/recipes', queryParams)
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
