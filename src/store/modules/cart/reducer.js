import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "./actions";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity,
          totalPrice: action.payload.price * action.payload.quantity,
        };
        return {
          ...state,
          items: [...state.items, newItem],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
            : item
        ),
        totalPrice:
          state.totalPrice +
          state.items.find((item) => item.id === action.payload).price,
      };
    case REMOVE_QUANTITY:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: Math.max(item.quantity - 1, 0),
                  totalPrice: item.price * Math.max(item.quantity - 1, 0),
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    default:
      return state;
  }
};

export default cartReducer;
