import axios from 'axios'

class contentaJSONAPI {

  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  async getArticles () {
    try {
      const result = await axios.get(this.baseUrl + '/node/article?sort=-created')
      const articles = result.data.data
      return articles
    } catch (e) {
      console.log(e.message)
    }
    return []
  }

}

export default new contentaJSONAPI(process.env.contentaJSONAPIBaseUrl)
