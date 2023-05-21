import initialState from './initialState';

/* selectors */
export const getAllPromotions = () => initialState.promotions;
export const getPromotion = id =>
  initialState.promotions.find(promotion => promotion.id === id) || undefined;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
