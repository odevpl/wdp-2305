/* selectors */

export const getAllPromoted = ({ products }) =>
  products.filter(item => item.promoted === true);
export const getDeals = ({ deals }) => deals;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
