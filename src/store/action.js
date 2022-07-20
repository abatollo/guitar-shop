const ActionType = {
  SET_POPUP: `SET_POPUP`,
  CHANGE_PROMOCODE: `CHANGE_PROMOCODE`,
  CHANGE_TOTAL_SUM: `CHANGE_TOTAL_SUM`,
  ADD_TO_CART: `ADD_TO_CART`,
  REMOVE_FROM_CART: `REMOVE_FROM_CART`,
  INCREASE_QUANTITY: `INCREASE_QUANTITY`,
  DECREASE_QUANTITY: `DECREASE_QUANTITY`
};

const ActionCreator = {
  setPopup: (payload) => ({
    type: ActionType.SET_POPUP,
    payload
  }),
  changePromocode: (payload) => ({
    type: ActionType.CHANGE_PROMOCODE,
    payload
  }),
  changeTotalSum: (payload) => ({
    type: ActionType.CHANGE_TOTAL_SUM,
    payload
  }),
  addToCart: (payload) => ({
    type: ActionType.ADD_TO_CART,
    payload
  }),
  removeFromCart: (payload) => ({
    type: ActionType.REMOVE_FROM_CART,
    payload
  }),
  increaseQuantity: (payload) => ({
    type: ActionType.INCREASE_QUANTITY,
    payload
  }),
  decreaseQuantity: (payload) => ({
    type: ActionType.DECREASE_QUANTITY,
    payload
  }),
};

export {ActionType, ActionCreator};
