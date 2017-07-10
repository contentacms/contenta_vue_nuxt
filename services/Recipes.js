
/**
 * Get recipes from JSON API server
 */

import DrupalJSONAPIClient from './D8JSONAPIClient'
import jsonapiParse from "jsonapi-parse"

class Recipes {

  constructor() {
    this.resourceUri = 'recipes'
    this.api = new DrupalJSONAPIClient(process.env.contentaJSONAPIBaseUrl)
  }

  async findOneById (id) {
    const options = {
      include: 'image,category'
    }
    return await this.api.get('recipes', options, id)
  }

  /**
   * Promoted recipes sorted by created DESC
   * @param {int} limit 
   */
  async findAllPromoted(limit = 4) {
    const options = {
      page: { limit },
      filter: {
        isPromoted: {
          path:'isPromoted',
          value: 1
        }
      },
      include: 'image,image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename'
      },
      sort: '-created'
    }
    return await this.api.get('recipes', options)
  }

  async findAllCategories (limit = 20) {
    const options = {
      page: {
        limit
      }
    }
    return await this.api.get('categories', options)
  }

  async findAllLatest (limit = 4) {
    const options = {
      sort: '-created',
      page: { limit },
      include: 'image,image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename'
      }
    }
    return this.api.get('recipes', options)
  }

  async findAllLatestOld (limit = 4) {
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
      include: 'image, image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename'
      }
    }
    return await this.api.get(this.resourceUri, options)
  }

  async findAllByCategoryName (categoryName, limit = 4) {
    const options = {
      sort: '-created',
      include: ['image', 'image.thumbnail'].join(','),
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        },
      },
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename'
      },
      page: {
        offset: 0,
        limit: limit,
      }
    }
    return await this.api.get(this.resourceUri, options)
  }

}

export default new Recipes()

