/**
 * Get recipes from JSON API server
 */

import JSONAPIClient from './JSONAPIClient'

class Recipes {

  constructor() {
    this.resourceUri = '/recipes'
    this.jsonapi = new JSONAPIClient(process.env.contentaJSONAPIBaseUrl)
  }

  async findAllLatest (limit = 4) {
    const query = {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      page: {
        limit
      },
      include: ['image', 'image.thumbnail', 'tags'],  
    }
    const datas = await this.jsonapi.get(this.resourceUri, query)
    return datas
  }

  async findAllByCategoryName (categoryName, limit = 4) {
    const query = {
      sortCreated: {
        path: 'created',
        direction: 'DESC'
      },
      include:[
        'image', 'image.thumbnail', 'tags'
      ],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        },
      },
      page: {
        offset: 0,
        limit: limit,
      }
    }
    return await this.jsonapi.get(this.resourceUri, query)
  }

}

export default new Recipes()
