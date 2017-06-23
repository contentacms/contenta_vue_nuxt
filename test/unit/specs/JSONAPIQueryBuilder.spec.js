import {buildQueryString} from '../../../services/JSONAPIQueryBuilder'

/**
 * An example unit test
 */
describe('JSONAPIQueryBuilder', () => {
  it('should render correct contents', () => {
    const queryParams = {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      page: {
        limit: 4
      }
    }
    expect(buildQueryString(queryParams)).toEqual("sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&page[limit]=4")
  })
})
