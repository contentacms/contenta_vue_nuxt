/**
 * Client for content JSON API
 * This is actually just a thin wrapper around waterwheel.js.
 * We additionnaly use "jsonapi-parse" package to format
 * reponses : it resolves relationships and included objects nicely.
 * 
 * Example usage : 
 *   const api = contentaJsonApi(https://mydomain.fr)
 *   const datas = await api.get('recipes', queryParams)
 */
import Waterwheel from "waterwheel"
import jsonapiParse from "jsonapi-parse"

export default () => {

  const waterwheel = new Waterwheel(
    {
      base: process.env.jsonApiServer,
      jsonapiPrefix: process.env.jsonApiPrefix,
      timeout: 3000,
      accessCheck: false
    }
  );

  return {
    get: async function (uri, queryParams = {}, id = "") {
      const response = await waterwheel.jsonapi.get(uri, queryParams, id);
      return jsonapiParse.parse(response).data;
    }
  }

}
