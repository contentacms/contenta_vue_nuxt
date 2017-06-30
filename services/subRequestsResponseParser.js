/**
 * @param response : an axios response object
 */
exports.parse = function (response) {
  const boundary = response.headers['content-type'].match(/"([^']+)"/)[1]
  const responses = response.data.split('--' + boundary).filter(v => v !== "" && v !== '--').map(v => JSON.parse(v.split("\n\r")[1]))
  return responses
}