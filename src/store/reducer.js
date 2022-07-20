import {ActionType} from './action';

const initialState = {
  popup: {
    isOpened: false,
    type: `add`,
    itemId: ``,
  },
  sum: 47000,
  totalSum: 0,
  promoCode: `GITARAHIT`,
  cartAddedIds: [1, 2],
  cartQuantityById: {1: 1, 2: 1}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_POPUP:

      let scrollbarWidth = window.innerWidth - document.body.clientWidth;

      if (action.payload.isOpened) {
        document.body.style.height = `100vh`;
        document.body.style.overflow = `hidden`;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.height = `auto`;
        document.body.style.overflow = `auto`;
        document.body.style.paddingRight = ``;
      }
      
      return {
        ...state,
        popup: {
          ...state.popup,
          isOpened: action.payload.isOpened,
          type: action.payload.type,
          itemId: action.payload.id
        }
      }
    case ActionType.CHANGE_PROMOCODE:
      return {
        ...state,
        promoCode: action.payload
      }
    case ActionType.ADD_TO_CART: 
      return {
        ...state,
        cartAddedIds: [...new Set([...state.cartAddedIds, action.payload.id])],
        cartQuantityById: {
          ...state.cartQuantityById,
          [action.payload.id]: (state.cartQuantityById[action.payload.id] || 0) + 1
        },
        popup: {
          ...state.popup,
          type: `confirm`,
        },
        sum: state.sum + action.payload.price
      }
    case ActionType.REMOVE_FROM_CART: {
      return {
        ...state,
        cartAddedIds: state.cartAddedIds.filter(item => item !== action.payload.id),
        cartQuantityById: {
          ...state.cartQuantityById,
          [action.payload.id]: 0
        },
        sum: state.sum - action.payload.price
      }
    }
    case ActionType.INCREASE_QUANTITY: {
      return {
        ...state,
        cartQuantityById: {
          ...state.cartQuantityById,
          [action.payload.id]: state.cartQuantityById[action.payload.id] + 1
        },
        sum: state.sum + action.payload.price
      }
    }
    case ActionType.DECREASE_QUANTITY: {
      return {
        ...state,
        cartQuantityById: {
          ...state.cartQuantityById,
          [action.payload.id]: state.cartQuantityById[action.payload.id] - 1
        },
        sum: state.sum - action.payload.price
      }
    }
    case ActionType.CHANGE_TOTAL_SUM: {
      return {
        ...state,
        totalSum: action.payload
      }
    }
    default:
      return state;
  }
};

export {reducer};
