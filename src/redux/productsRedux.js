/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_PRODUCT_RATE = createActionName('UPDATE_PRODUCT_RATE');

export const updateProductRate = payload => ({
  type: UPDATE_PRODUCT_RATE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
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
