/**
 * Client for content JSON API.
 * We use "jsonapi-parse" package to format responses : 
 * It resolves relationships and included objects nicely in the final data object.
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
      return jsonapiParse.parse(r.data).data;
    });
    return promise;
  },
};
