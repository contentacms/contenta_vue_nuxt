import axios from 'axios'
import { buildQueryString } from 'd8-jsonapi-querystring'

class Pipeline {

  constructor(endpoint) {
    this.endpoint = endpoint
    this.requests = []
  }

  add (request) {
    // only add this request if this requestId is not already in the pipe
    const existing = this.requests.find(item => item.requestId == request.requestId)
    if (existing) return
    const defaultOptions = {
      action: "view",
      headers: {
        Accept: "application/json"
      },
      options: {}
    }
    if (request.options) {
      request.uri = request.uri + '?' + buildQueryString(request.options)
    }
    const subrequest = Object.assign(defaultOptions, request)

    if (request.multiply !== undefined) {
      let subrequests = []
      for (let i = 0; i < request.multiply; i++) {
        const newSubRequest = Object.assign({}, request)
        newSubRequest.uri = newSubRequest.uri.replace('--index', i)
        this.requests.push(newSubRequest)
      }
    }
    else {
      this.requests.push(subrequest)
    }
  }

  /**
   * @param response : axios response object
   */
  parseMultipartResponse (response) {
    const boundary = response.headers['content-type'].match(/"([^']+)"/)[1]
    const responses = response.data.split('--' + boundary).filter(v => v !== "" && v !== '--').map(v => JSON.parse(v.split("\n\r")[1]))
    return responses
  }

  send () {
    return axios.post(this.endpoint, JSON.stringify(this.requests))
      .then(response => {
        return this.parseMultipartResponse(response)
      })
  }

  getRequests () {
    return this.requests
  }

}

export default new Pipeline("https://dev-contentacms.pantheonsite.io/subrequests?_format=json")