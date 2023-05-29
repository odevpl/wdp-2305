/* selectors */
export const getAllBrands = ({ brands }) => brands;
export const getCount = ({ brands }) => brands;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
