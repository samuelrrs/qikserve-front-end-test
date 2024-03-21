import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY } from './actions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1, totalPrice: item.price * item.quantity } : item
        ),
      };
    case REMOVE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity > 0 && item.quantity - 1, totalPrice: item.price * item.quantity } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;