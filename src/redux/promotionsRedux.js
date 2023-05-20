/* selectors */
export const getAll = ({ promotions }) => promotions;
export const getPromotion = ({ promotions }) => promotions.id;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
