/**
 * Functions to get content from Contenta JSON API
 */
import jsonApi from './jsonApiClient';

/**
 * @param {String} uuid
 */
export function findOneRecipeByUuid(uuid) {
  const query = {
    include: 'image,category,image.thumbnail',
    filter: {
      isPublished: {
        path: 'isPublished',
        value: 1,
      },
    },
  };
  return jsonApi.get(`recipes/${uuid}`, query);
}

export function findAllPromotedRecipes(limit = 4) {
  const query = {
    page: {
      limit,
    },
    filter: {
      isPromoted: {
        path: 'isPromoted',
        value: 1,
      },
      isPublished: {
        path: 'isPublished',
        value: 1,
      },
    },
    include: 'image,image.thumbnail',
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
    },
    sort: '-created',
  };
  return jsonApi.get('recipes', query);
}

export function findAllRecipesCategories(limit = 20) {
  const query = {
    page: {
      limit,
    },
  };
  return jsonApi.get('categories', query);
}

export function findAllLatestRecipes(limit = 4, offset = 0) {
  const query = {
    sort: '-created',
    page: {
      limit,
    },
    include: 'image,image.thumbnail',
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
    },
  };
  return jsonApi.get('recipes', query);
}

export function findHomePromotedArticlesAndRecipes(limit) {
  const promotedRecipes = jsonApi.get('recipes', {
    page: {
      limit: 3,
    },
    filter: {
      isPromoted: {
        path: 'isPromoted',
        value: 1,
      },
      isPublished: {
        path: 'isPublished',
        value: 1,
      },
    },
    include: 'contentType,image,image.thumbnail',
    fields: {
      recipes: 'contentType,title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
      contentTypes: 'type',
    },
    sort: '-created',
  });
  const promotedArticles = jsonApi.get('articles', {
    page: {
      limit: 3,
    },
    filter: {
      isPromoted: {
        path: 'isPromoted',
        value: 1,
      },
      isPublished: {
        path: 'isPublished',
        value: 1,
      },
    },
    include: 'contentType,image,image.thumbnail',
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
      contentTypes: 'type',
    },
    sort: '-created',
  });
  return Promise.all([promotedRecipes, promotedArticles]).then(
    promisesValues => {
      const data = [...promisesValues[0], ...promisesValues[1]]
        .sort((item1, item2) => item1.createdAt > item2.createdAt)
        .slice(0, limit);
      return data;
    }
  );
}

export function findAllRecipesByCategoryName(
  categoryName,
  limit = 4,
  offset = 0
) {
  const query = {
    sort: '-created',
    include: 'image,image.thumbnail',
    filter: {
      categoryName: {
        condition: {
          path: 'category.name',
          value: categoryName,
        },
      },
    },
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
    },
    page: {
      offset: 0,
      limit: limit,
    },
  };
  return jsonApi.get('recipes', query);
}

export function findAllRecipesByDifficultyName(
  difficultyName,
  limit = 4,
  offset = 0
) {
  const query = {
    sort: '-created',
    include: 'image,image.thumbnail',
    filter: {
      difficulty: {
        path: 'difficulty',
        value: difficultyName,
      },
    },
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
    },
    page: {
      offset: 0,
      limit: limit,
    },
  };
  return jsonApi.get('recipes', query);
}

export function findAllRecipesByMaxTotalTime(
  maxTotalTime,
  limit = 4,
  offset = 0
) {
  const query = {
    sort: '-created',
    include: 'image,image.thumbnail',
    filter: {
      totalTime: {
        condition: {
          path: 'totalTime',
          value: maxTotalTime,
          operator: '<',
        },
      },
    },
    fields: {
      recipes: 'title,difficulty,image',
      images: 'name,thumbnail',
      files: 'filename,url',
    },
    page: {
      offset: 0,
      limit: limit,
    },
  };
  return jsonApi.get('recipes', query);
}
