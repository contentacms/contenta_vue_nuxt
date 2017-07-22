/**
 * Functions to get content from Contenta public API
 */
import ContentaClient from './ContentaClient'
const contenta = new ContentaClient(process.env.contentaJSONAPIBaseUrl)

/**
 * Default options to query recipes
 * 
 * @param {Number} number number of results
 * @param {Boolean} allFields include ALL fields 
 */
function getRecipeBaseQuery(limit = 10, allFields = false) {
  let query = {
    page: {
      limit,
      offset: 0
    },
    sort: '-created',
    filter: {
      isPublished: {
        path: 'isPublished',
        value: 1
      }
    },
    include: 'contentType,image,image.thumbnail'
  }
  if (allFields === false) {
    query.fields = {
      recipes: 'contentType,title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
      contentTypes: 'type'
    }
  }
  return Object.assign({}, query)
}

/**
 * @param {String} uuid 
 */
async function findOneRecipeByUuid(uuid) {
  return await contenta.get('recipes', getRecipeBaseQuery(true), uuid)
}

async function findAllPromotedRecipes(limit = 4) {
  let query = Object.assign(getRecipeBaseQuery(4), {
    filter: {
      isPromoted: {
        path: 'isPromoted',
        value: 1
      }
    }
  })
  return await contenta.get('recipes', query)
}

async function findAllRecipesCategories(limit = 20) {
  const query = {
    page: {
      limit
    }
  }
  return await contenta.get('categories', query)
}

async function findAllLatestRecipes(limit = 4) {
  return contenta.get('recipes', getRecipeBaseQuery(limit))
}

async function findHomePromotedArticlesAndRecipes(limit) {
  const recipesQuery = Object.assign(getRecipeBaseQuery(limit), {
    filter: {
      isPromoted: {
        path: 'isPromoted',
        value: 1
      }
    }
  })
  const promotedRecipes = contenta.get('recipes', recipesQuery)
  const promotedArticles = contenta.get('articles', recipesQuery)
  return Promise
    .all([promotedRecipes, promotedArticles])
    .then(promisesValues => {
      const data = [
        ...promisesValues[0],
        ...promisesValues[1]
      ].sort((item1, item2) => item1.createdAt > item2.createdAt).slice(0, limit)
      return data
    })
}

async function findAllRecipesByCategoryName(categoryName, limit = 4) {
  const query = Object.assign(getRecipeBaseQuery(limit), {
    filter: {
      categoryName: {
        condition: {
          path: 'category.name',
          value: categoryName
        }
      }
    }
  })
  return await contenta.get('recipes', query)
}

// using named imports, webpack will only import 
// used functions and not all the file
export {
  findOneRecipeById, 
  findAllPromotedRecipes,
  findAllRecipesCategories,
  findAllLatestRecipes,
  findHomePromotedArticlesAndRecipes,
  findAllRecipesByCategoryName
}
