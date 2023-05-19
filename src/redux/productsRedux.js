/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action types */
const createActionName = actionName => `app/product/${actionName}`;
const FAVORITE_PRODUCT = createActionName('FAVORITE_PRODUCT');

/* action creators */
export const favoriteProduct = payload => ({ type: FAVORITE_PRODUCT, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FAVORITE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    default:
      return statePart;
  }
}
