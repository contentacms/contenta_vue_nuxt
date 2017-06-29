/**
 * Get recipes from JSON API server
 */

import DrupalJSONAPIClient from './DrupalJSONAPIClient'

class Recipes {

  constructor() {
    this.resourceUri = '/recipes'
    this.jsonapi = new DrupalJSONAPIClient(process.env.contentaJSONAPIBaseUrl)
  }

  async findOneById(id) {
    const options = {
      include:['image']
    }
    return await this.jsonapi.get(this.resourceUri + '/' + id, options)
  }

  async findAllCategories(limit = 20) {
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
      include: ['image', 'image.thumbnail', 'tags'],  
    }
    const datas = await this.jsonapi.get(this.resourceUri, options)
    return datas
  }

  async findAllByCategoryName (categoryName, limit = 4) {
    const options = {
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
    return await this.jsonapi.get(this.resourceUri, options)
  }

}

export default new Recipes()
