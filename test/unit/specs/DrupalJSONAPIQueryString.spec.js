import {buildQueryString} from '../../../services/DrupalJSONAPIQueryString'

/**
 * An example unit test
 */
describe('JSONAPIQueryBuilder', () => {
  it('should return expected query string from queryParams Object', () => {
    const queryParams = {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      fields: {
        recipes: ['title']
      },
      include: ['tags', 'image'],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: "Main course"
          }
        },
      },
      page: {
        offset: 0,
        limit: 4
      }
    }
    expect(buildQueryString(queryParams)).toEqual("sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&fields[recipes]=title&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&page[offset]=0&page[limit]=4")
  })
})
