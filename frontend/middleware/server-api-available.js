// Check if server is up before loading page
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();

export default async function(context) {
  const apiUrl = `${process.env.jsonApiServer}/${process.env.jsonApiPrefix}`;
  try {
    const response = await fetch(apiUrl);
    const output = await response.text();
    return output;
  } catch (e) {
    if (context.route.path !== '/server-unreachable') {
      context.redirect('/server-unreachable');
    }
  }
}
