import DrupalJSONAPI from './DrupalJSONAPI'

class Recipes {

  constructor(baseUrl) {
    this.entityUri = '/recipes'
    this.jsonapi = new DrupalJSONAPI(baseUrl)
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
        limit: limit
      }
      /*
      include: [
        'tags',
        'field_image',
        'field_image.field_image',
        'field_image.field_image.file--file'
      ],
      */
    }
    const datas = await this.jsonapi.get(this.entityUri, query)
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
    return await this.jsonapi.get(this.entityUri, query)
  }

}

export default new Recipes(process.env.contentaJSONAPIBaseUrl)
