
/**
 * Get recipes from JSON API server
 */

import DrupalJSONAPIClient from './DrupalJSONAPIClient'
import axios from 'axios'
import {parse} from './subRequestsResponseParser'
import jsonapiParse from "jsonapi-parse"

class Recipes {

  constructor() {
    this.resourceUri = '/recipes'
    this.jsonapi = new DrupalJSONAPIClient(process.env.contentaJSONAPIBaseUrl)
  }

  async findOneById (id) {
    const options = {
      include: ['image']
    }
    return await this.jsonapi.get(this.resourceUri + '/' + id, options)
  }

  async findAllCategories (limit = 20) {
    const options = {
      page: {
        limit
      }
    }
    return await this.jsonapi.get('/categories', options)
  }

  async findAllLatest (limit = 4) {
    const options = {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      page: {
        limit
      },
      include: ['image', 'image.thumbnail'],
      fields: {
        recipes:['difficulty', 'image'],
        images: ['name', 'thumbnail'],
        files: ['filename']
      }
    }
    const datas = await this.jsonapi.get(this.resourceUri, options)
    return datas
  }

  /*
  async subRequestsFromCategories (categories) {
    const requests = []
    for (const index in categories) {
      requests.push({
        "requestId": index,
        "uri": "/api/recipes?include=category,image,image.thumbnail&filter[category.name][value]=" + encodeURI(categories[index].name) + '&page[limit]=4',
        "action": "view",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/vnd.api+json",
        }
      })
    }
    return axios.post("https://dev-contentacms.pantheonsite.io/subrequests?_format=json", requests).then(response => {
      return parse(response).map(r => jsonapiParse.parse(r).data)
    })
  }
  */

  async findAllByCategoryName (categoryName, limit = 4) {
    const options = {
      sortCreated: {
        path: 'created',
        direction: 'DESC'
      },
      include: [ 'image', 'image.thumbnail' ],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        },
      },
      fields: {
        recipes:['difficulty', 'image'],
        images: ['name', 'thumbnail'],
        files:['filename']
      },
      page: {
        offset: 0,
        limit: limit,
      }
    }
    return await this.jsonapi.get(this.resourceUri, options)
  }

}

export default new Recipes()

