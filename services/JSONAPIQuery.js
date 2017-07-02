const {buildQueryString} = require ('d8-jsonapi-querystring')

class JsonApiQuery {

  constructor(endpoint, uri) {
    this.baseUri = endpoint + uri
    this.queryObject = {}
    this.allFieldsRequested = false
    return this
  }

  /**
   * 
   * @param {string} -created 
   */
  sort(params) {
    this.queryObject.sort = params
    return this
  }

  fields(params) {
    if (params === '*') {
      this.allFieldsRequested = true
      return this
    }

    this.queryObject.fields = params
    return this
  }

  page(params) {
    this.queryObject.page = params
  }

  include(params) {
    this.queryObject.include = params
    return this
  }

  filter(params) {
    this.queryObject.filter = params
    return this
  }

  toString() {
    this.validateQueryObject(this.queryObject)
    return this.baseUri + '?' + buildQueryString(this.queryObject)
  }

  validateQueryObject(queryObject) {
    // we should always only specify needed fields, 
    // because full loaded object increase significantly http download time
    if (this.allFieldsRequested === false && queryObject.fields === undefined) {
      throw new Error("JsonApiQuery : missing fields, please use fields() method to specify requested fields.")
    }
  }

}

export default JsonApiQuery