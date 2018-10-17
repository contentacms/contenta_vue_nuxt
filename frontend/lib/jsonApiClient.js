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
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();
import jsonapiParse from 'jsonapi-parse';
import qs from 'qs';

export default () => ({
  async get(uri, queryParams = {}, id = '') {
    const url = `${process.env.jsonApiServer}/${
      process.env.jsonApiPrefix
    }/${uri}${id ? `/${id}` : ''}?${
      Object.keys(queryParams).length
        ? `&${qs.stringify(queryParams, { indices: false })}`
        : ''
    }`;
    const response = await fetch(
      `${process.env.jsonApiServer}/${process.env.jsonApiPrefix}/${url}`
    );
    return jsonapiParse.parse(response).data;
  },
});
