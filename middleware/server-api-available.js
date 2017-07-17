// Check if server is up before loading page
import axios from 'axios'
export default function (context) {
  return axios.get(process.env.contentaJSONAPIBaseUrl + '/api').catch(e => {
    if (context.route.path != "/server-unreachable") {
      context.redirect("/server-unreachable")
    }
  })
}