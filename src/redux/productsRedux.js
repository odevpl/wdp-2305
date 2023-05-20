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

// action creators

export const addProductToCompare = payload => ({ type: ADD_TO_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );

    default:
      return statePart;
  }
}
