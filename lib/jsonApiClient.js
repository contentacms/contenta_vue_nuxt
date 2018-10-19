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
import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import qs from 'qs';

export default {
  get: (uri, params = {}) => {
    let query = '';
    if (Object.keys(params).length > 0) {
      query = '?' + qs.stringify(params, { indices: false });
    }
    let url = `${process.env.jsonApiUrl}/${uri}${query}`;
    const promise = axios.get(url).then(r => {
      // jsonApi resolve "relationships" and include objects inside the data key.
      return jsonapiParse.parse(r.data).data;
    });
    return promise;
  },
};
