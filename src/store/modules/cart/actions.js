export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"; 
export const ADD_QUANTITY = "ADD_QUANTITY"; 
export const REMOVE_QUANTITY = "REMOVE_QUANTITY"; 
export const addToCart = (item, quantity) => ({
  type: ADD_TO_CART,
  payload: { ...item, quantity },
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const addQuantity = (itemId) => ({
  type: ADD_QUANTITY,
  payload: itemId,
});

export const removeQuantity = (itemId) => ({
  type: REMOVE_QUANTITY,
  payload: itemId,
});