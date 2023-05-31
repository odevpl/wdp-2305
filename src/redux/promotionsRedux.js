import initialState from './initialState';

/* selectors */
export const getAllPromotions = () => initialState.promotions;
export const getPromotionById = id =>
  initialState.promotions.find(promotion => promotion.id === id);

/* reducer */
export default function reducer(state = initialState.promotions, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
