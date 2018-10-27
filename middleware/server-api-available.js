// if we can't reach the server, redirect to a special page.
import axios from 'axios';
export default function(context) {
  return axios.get(process.env.serverApiUrl).catch(e => {
    if (context.route.path != '/server-unreachable') {
      context.redirect('/server-unreachable');
    }
  });
}
