export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

export const fetchMenuRequest = () => ({
  type: FETCH_MENU_REQUEST,
});

export const fetchMenuSuccess = (menuData) => ({
  type: FETCH_MENU_SUCCESS,
  payload: menuData,
});

export const fetchMenuFailure = (error) => ({
  type: FETCH_MENU_FAILURE,
  payload: error,
});