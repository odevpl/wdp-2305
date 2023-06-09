/* selectors */

export const getAll = ({ products }) => products;

export const getCount = ({ products }) => products.length;
export const getProductsToCompare = ({ products }) =>
  products.filter(product => product.compare === true);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creators

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types

const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const FAVORITE_PRODUCT = createActionName('FAVORITE_PRODUCT');
const UPDATE_PRODUCT_RATE = createActionName('UPDATE_PRODUCT_RATE');
// action creators
export const addProductToCompare = payload => ({ type: ADD_TO_COMPARE, payload });

export const favoriteProduct = payload => ({ type: FAVORITE_PRODUCT, payload });
export const updateProductRate = payload => ({
  type: UPDATE_PRODUCT_RATE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );
    case FAVORITE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              favorite: action.payload.favorite,
            }
          : product
      );
    case UPDATE_PRODUCT_RATE:
      return statePart.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              userStars: action.payload.userStars,
            }
          : product
      );
    default:
      return statePart;
  }
}
