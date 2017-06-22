import axios from 'axios'

class contentaJSONAPI {

  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  async getRecipes () {
    try {
      const result = await axios.get(this.baseUrl + '/recipes?sort=-created')
      const nodes = result.data.data
      return nodes
    } catch (e) {
      console.log(e.message)
    }
    return []
  }

}

export default new contentaJSONAPI(process.env.contentaJSONAPIBaseUrl)
