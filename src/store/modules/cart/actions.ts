export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; // Nova ação para remover item do carrinho
export const ADD_QUANTITY = 'ADD_QUANTITY'; // Nova ação para adicionar quantidade de um item no carrinho
export const REMOVE_QUANTITY = 'REMOVE_QUANTITY'; // Nova ação para remover quantidade de um item no carrinho

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({ // Ação para remover item do carrinho
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const addQuantity = (itemId) => ({ // Ação para adicionar quantidade de um item
  type: ADD_QUANTITY,
  payload: itemId,
});

export const removeQuantity = (itemId) => ({ // Ação para remover quantidade de um item
  type: REMOVE_QUANTITY,
  payload: itemId,
});